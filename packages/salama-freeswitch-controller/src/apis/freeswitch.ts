import * as ESL from 'modesl'
import { logger } from 'src/logger'
import { config } from 'src/constants'

export const Event = {
  Connection: {
    READY: 'esl::ready',
    CLOSED: 'esl::end',
    ERROR: 'error'
  },
  RECEIVED: 'esl::event::*::*'
}
export const ALL_EVENTS = 'all'
export const RESPONSE_SUCCESS = '+OK'

let connection: any = null

/**
 * Connect to Event Socket or return the existing connection.
 *
 * @return Promise contanining the current ESL connection.
 */
export const connect = () =>
  new Promise((resolve, reject) => {
    if (connection !== null && connection.connected()) {
      resolve(connection)
    } else {
      logger.info(
        `Opening new FreeSWITCH event socket connection... IP: ${
          config.ip
        }, PORT: ${config.port}, PASSWORD: ${config.password}`
      )

      connection = new ESL.Connection(
        config.ip,
        config.port,
        config.password,
        () => {
          connection.api('status', (res: any) => {
            console.log('Freeswitch status: ', res.getBody())
          })
        }
      )

      connection.on(Event.Connection.ERROR, () => {
        logger.error('Error connecting to FreeSWITCH!')
        reject('Connection error')
      })

      connection.on(Event.Connection.CLOSED, () => {
        logger.error('Connection to FreeSWITCH closed!')
        reject('Connection closed')
      })

      connection.on(Event.Connection.READY, () => {
        logger.info('Connection to FreeSWITCH established!')
        resolve(connection)
      })
    }
  })

/**
 * Execute a FreeSWITCH command through Event Socket.
 * NOTE: The returned Promise is resolved no matter the response.
 *       Use executeWithOkResult if you are interested only in successful responses.
 *
 * @return The body of the response, or an error.
 */
export const execute = (callerIdNumber: string | number, command: any) =>
  new Promise((resolve, reject) => {
    logger.info(`[${callerIdNumber}] Executing command: ${command}`)

    connect()
      .then((freeswitch: any) => {
        freeswitch.bgapi(command, (response: any) => {
          const responseBody = response.getBody()
          resolve(responseBody)
        })
      })
      .catch(error => {
        logger.error(
          `[${callerIdNumber}] Error executing command '${command}': ${error.trim()}`
        )
        reject(error)
      })
  })

export const isSuccessfulResponse = (response: any) => {
  return response.indexOf(RESPONSE_SUCCESS) === 0
}

/**
 * Execute a FreeSWITCH command through Event Socket.
 * NOTE: The returned Promise is resolved only if the response is successful.
 *
 * @return The body of the response, or an error.
 */
export const executeWithOkResult = (
  callerIdNumber: string | number,
  command: any
) =>
  new Promise((resolve, reject) => {
    execute(callerIdNumber, command)
      .then((response: any) => {
        if (isSuccessfulResponse(response)) {
          logger.info(
            `[${callerIdNumber}] Command '${command}' executed successfully: ${response.trim()}`
          )
          resolve(response)
        } else {
          logger.error(
            `[${callerIdNumber}] Error executing command '${command}': ${response.trim()}`
          )
          reject(response)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
