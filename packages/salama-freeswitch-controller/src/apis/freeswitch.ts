import * as ESL from 'modesl'
import { logger } from 'src/logger'
import { config } from 'src/constants'
import * as Freeswitch from './freeswitch'
import EventEmitter = NodeJS.EventEmitter

export interface IConnection extends EventEmitter {
  api(command: any, args: string[], cb?: (args: any) => void): void
  auth(cb: () => void): void
  bgapi(
    command: any,
    args: string[],
    jobid?: any,
    cb?: (args: any) => void
  ): void
  connected(): any
  disconnect(): void
  events(
    type: 'json' | 'plain' | 'xml',
    events: string,
    cb?: (args: any) => void
  ): void
  execute(app: any, arg?: string, uuid?: string, cb?: (args: any) => void): any
  executeAsync(
    app: any,
    arg?: string,
    uuid?: string,
    cb?: (args: any) => void
  ): any
  filter(header: any, value: any, cb?: (args: any) => void): void
  filterDelete(header: any, value: any, cb?: (args: any) => void): void
  getInfo(): any
  message(options: any, cb?: (args: any) => void): void
  originate(options: any, cb?: (args: any) => void): void
  recvEvent(cb?: (args: any) => void): void
  recvEventTimed(ms: any, cb?: (args: any) => void): void
  send(command: any, args: any): void
  sendEvent(event: any, cb?: (args: any) => void): void
  sendRecv(command: any, args: any, cb?: (args: any) => void): void
  setAsyncExecute(value: any): void
  setEventLock(value: any): void
  show(item: any, format: any, cb?: (args: any) => void): void
  socketDescriptor(): any
  subscribe(events: any, cb?: (args: any) => void): void
}

export interface IHeader {
  name: string
  value: string
}

export interface IEvent {
  PRIORITY: {
    HIGH: string
    LOW: string
    NORMAL: string
  }
  headers: IHeader[]
  addBody(value: any): any
  addHeader(name: any, value: any): any
  delHeader(name: any): any
  firstHeader(): any
  getBody(): any
  getHeader(name: any): string
  getType(): any
  nextHeader(): any
  serialize(format: any): any
  setPriority(priority: any): void
}

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

let connection: Freeswitch.IConnection

/**
 * Connect to Event Socket or return the existing connection.
 *
 * @return Promise contanining the current ESL connection.
 */
export const connect = () =>
  new Promise((resolve, reject) => {
    if (connection !== undefined && connection.connected()) {
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
          connection.api('status', [], (res: any) => {
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
export const execute = (command: string, args?: string[]) =>
  new Promise((resolve, reject) => {
    logger.info(`Executing command: ${command}`)

    connect()
      .then((freeswitch: Freeswitch.IConnection) => {
        freeswitch.bgapi(command, [], (response: any) => {
          const responseBody = response.getBody()
          resolve(responseBody)
        })
      })
      .catch(error => {
        logger.error(`Error executing command '${command}': ${error.trim()}`)
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
export const executeWithOkResult = (command: any) =>
  new Promise((resolve, reject) => {
    execute(command)
      .then((response: any) => {
        if (isSuccessfulResponse(response)) {
          logger.info(
            `Command '${command}' executed successfully: ${response.trim()}`
          )
          resolve(response)
        } else {
          logger.error(
            `Error executing command '${command}': ${response.trim()}`
          )
          reject(response)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
