import { logger } from 'src/logger'
import * as FreeswitchApi from 'src/apis/freeswitch'

/**
 * Retrieve the value of a given channel variable.
 *
 * @param callerIdNumber  The caller ID number.
 * @param uuid  The UUID.
 * @param variable  The channel variable name.
 * @return Promise containing the channel variable value.
 */
const execute = (
  callerIdNumber: string | number,
  uuid: string,
  variable: any
) =>
  new Promise((resolve, reject) => {
    logger.info(`[${callerIdNumber}] Get channel variable '${variable}'`)
    FreeswitchApi.execute(callerIdNumber, `uuid_getvar ${uuid} ${variable}`)
      .then(value => {
        resolve(value)
      })
      .catch(error => {
        reject(error)
      })
  })

exports.execute = execute
