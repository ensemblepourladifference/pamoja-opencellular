import * as FreeswitchApi from 'src/apis/freeswitch'
import { config } from 'src/constants'
import { logger } from 'src/logger'
import { ICaller } from 'src/features/esl/event-builder'

export const playFile = (file: string, channelId: string): Promise<boolean> => {
  return FreeswitchApi.execute(
    `uuid_broadcast ${channelId} ${
      config.applicationSoundsDirectory
    }${file} both`
  )
    .then(res => {
      logger.info(`Played file: ${JSON.stringify(res)}`)
      return true
    })
    .catch(error => {
      logger.error(`Cant play file: ${JSON.stringify(error)}`)
      return false
    })
}

export const hangUp = (channelId: string): Promise<boolean> => {
  return FreeswitchApi.execute(`sched_hangup +0 ${channelId}`)
    .then(res => {
      logger.info(`Call ended: ${JSON.stringify(res)}`)
      return true
    })
    .catch(error => {
      logger.error(`Cant end call: ${JSON.stringify(error)}`)
      return false
    })
}

export const transfer = (
  destination: string,
  caller: ICaller
): Promise<boolean> => {
  return FreeswitchApi.execute(
    `originate sofia/internal/${destination}@127.0.0.1 &bridge(sofia/internal/${
      caller.callerIdNumber
    }@127.0.0.1)`
  )
    .then(res => {
      logger.info(`Call transferred: ${JSON.stringify(res)}`)
      return true
    })
    .catch(error => {
      logger.error(`Cant transfer call: ${JSON.stringify(error)}`)
      return false
    })
}

export const answer = (channelId: string): Promise<void> => {
  return FreeswitchApi.execute(`uuid_park ${channelId}`)
    .then(res => {
      logger.info(`${channelId} Parked: ${JSON.stringify(res)}`)
      return FreeswitchApi.execute(`myevents ${channelId}`)
        .then(res => {
          logger.info(`${channelId} Events added: ${JSON.stringify(res)}`)
          return FreeswitchApi.execute(`uuid_answer ${channelId}`)
            .then(res => {
              logger.info(`${channelId} Answered: ${JSON.stringify(res)}`)
            })
            .catch(error => {
              logger.error(`Cant answer: ${JSON.stringify(error)}`)
            })
        })
        .catch(error => {
          logger.error(`Cant add events: ${JSON.stringify(error)}`)
        })
    })
    .catch(error => {
      logger.error(`Cant park: ${JSON.stringify(error)}`)
    })
}
