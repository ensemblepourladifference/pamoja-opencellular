import { logger } from 'src/logger'
import * as FreeswitchApi from 'src/apis/freeswitch'

/**
 * Set a channel variable with a given value.
 *
 * @param uuid  The UUID.
 * @param variable  The channel variable name.
 * @param value  The channel variable value.
 */
const execute = (uuid: string, variable: any, value: any) => {
  logger.info(`Set channel variable: ${variable} = ${value}`)
  FreeswitchApi.executeWithOkResult(
    `uuid_setvar ${uuid} ${variable} '${value}'`
  )
}

exports.execute = execute
