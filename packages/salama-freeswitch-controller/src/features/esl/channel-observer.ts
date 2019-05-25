import { logger } from 'src/logger'
import {
  IBuiltEvent,
  CHANNEL_CREATE,
  CHANNEL_HANGUP
} from 'src/features/esl/event-builder'

export const notify = (event: IBuiltEvent) => {
  switch (event.name) {
    case CHANNEL_CREATE:
      logger.info(`New Channel Create event: ${JSON.stringify(event)}`)
      break

    case CHANNEL_HANGUP:
      logger.info(`New Channel Hangup event: ${JSON.stringify(event)}`)
      break

    default:
      // Unhandled event... nothing to do!
      break
  }
}
