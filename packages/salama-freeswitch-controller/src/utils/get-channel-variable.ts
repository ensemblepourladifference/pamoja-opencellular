import { logger } from 'src/logger'
import * as FreeswitchApi from 'src/apis/freeswitch'

/**
 * Retrieve the value of a given channel variable.
 *
 * @param uuid  The UUID.
 * @param variable  The channel variable name.
 * @return Promise containing the channel variable value.
 */
const execute = (uuid: string, variable: any) =>
  new Promise((resolve, reject) => {
    logger.info(`Get channel variable '${variable}'`)
    FreeswitchApi.execute(`uuid_getvar ${uuid} ${variable}`)
      .then(value => {
        resolve(value)
      })
      .catch(error => {
        reject(error)
      })
  })

exports.execute = execute
