import { logger } from 'src/logger'
import {
  IBuiltEvent,
  IChannelExecuteEvent,
  IChannelAnswerEvent,
  IPlaybackStopEvent,
  IDtmfEvent,
  CHANNEL_CREATE,
  CHANNEL_ANSWER,
  CHANNEL_EXECUTE,
  PLAYBACK_STOP,
  CHANNEL_HANGUP,
  DTMF
} from 'src/features/esl/event-builder'
import { config } from 'src/constants'
import { checkAndTrackCall } from 'src/apis/database'
import { answer } from 'src/utils/dialplan'
import { routeChannel } from 'src/features/esl/channel-router'

export async function notify(event: IBuiltEvent) {
  console.log(event.name)
  switch (event.name) {
    case CHANNEL_CREATE:
      logger.info(`New Channel Create event: ${JSON.stringify(event)}`)
      break

    case CHANNEL_EXECUTE:
      const executeEvent: IChannelExecuteEvent = event as IChannelExecuteEvent
      const shouldAnswer = await checkAndTrackCall(executeEvent.uniqueId)
      if (
        config.applicationDialplans.includes(executeEvent.destinationNumber) &&
        shouldAnswer
      ) {
        answer(executeEvent.uniqueId)
      }
      break

    case CHANNEL_ANSWER:
      logger.info(`Channel Answer event: ${JSON.stringify(event)}`)
      const answerEvent: IChannelAnswerEvent = event as IChannelAnswerEvent
      logger.info(
        `${answerEvent.caller.destinationNumber} Answered from: ${
          answerEvent.caller.username
        }`
      )
      if (
        config.applicationDialplans.includes(
          answerEvent.caller.destinationNumber
        )
      ) {
        routeChannel(answerEvent)
      }
      break

    case PLAYBACK_STOP:
      logger.info(`Playback Stop event: ${JSON.stringify(event)}`)
      const playbackStopEvent: IPlaybackStopEvent = event as IPlaybackStopEvent
      if (
        config.applicationDialplans.includes(
          playbackStopEvent.caller.destinationNumber
        )
      ) {
        routeChannel(playbackStopEvent)
      }
      break

    case CHANNEL_HANGUP:
      logger.info(`Channel Hangup event: ${JSON.stringify(event)}`)
      break

    case DTMF:
      logger.info(`Dtmf event: ${JSON.stringify(event)}`)
      const dtmfEvent: IDtmfEvent = event as IDtmfEvent
      if (
        config.applicationDialplans.includes(dtmfEvent.caller.destinationNumber)
      ) {
        routeChannel(dtmfEvent)
      }
      break

    default:
      break
  }
}
