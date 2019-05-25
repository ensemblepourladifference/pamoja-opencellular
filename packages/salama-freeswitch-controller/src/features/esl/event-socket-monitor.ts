import { logger } from 'src/logger'
import * as FreeswitchApi from 'src/apis/freeswitch'
import { buildEvent, IBuiltEvent } from 'src/features/esl/event-builder'
import * as ChannelObserver from './channel-observer'

const RETRY_TIMEOUT_IN_MILLIS = 10000

export const startJob = () => {
  FreeswitchApi.connect()
    .then((connection: any) => {
      connection.subscribe(FreeswitchApi.ALL_EVENTS)

      connection.on(FreeswitchApi.Event.RECEIVED, (rawEvent: any) => {
        const channelEvent: IBuiltEvent = buildEvent(rawEvent)

        if (channelEvent !== null && channelEvent.name !== null) {
          ChannelObserver.notify(channelEvent)
        }
      })

      connection.on(FreeswitchApi.Event.Connection.CLOSED, () => {
        logger.error(
          `Connection to FreeSWITCH was closed. Retrying in ${RETRY_TIMEOUT_IN_MILLIS} millis...`
        )
        setTimeout(startJob, RETRY_TIMEOUT_IN_MILLIS)
      })

      connection.on(FreeswitchApi.Event.Connection.ERROR, () => {
        logger.error(
          `Error connecting to FreeSWITCH. Retrying in ${RETRY_TIMEOUT_IN_MILLIS} millis...`
        )
        setTimeout(startJob, RETRY_TIMEOUT_IN_MILLIS)
      })
    })
    .catch(() => {
      logger.error(
        `Error connecting to FreeSWITCH. Retrying again in ${RETRY_TIMEOUT_IN_MILLIS} millis...`
      )
      setTimeout(startJob, RETRY_TIMEOUT_IN_MILLIS)
    })
}
