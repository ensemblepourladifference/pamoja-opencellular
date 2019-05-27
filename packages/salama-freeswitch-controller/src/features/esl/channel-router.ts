import { logger } from 'src/logger'
import {
  IChannelAnswerEvent,
  IPlaybackStopEvent,
  IDtmfEvent
} from 'src/features/esl/event-builder'
import * as Manager from 'src/features/manager'
import { dialplans } from 'src/constants'
import { getDialplanState } from 'src/apis/database'

export async function routeChannel(
  event: IChannelAnswerEvent | IPlaybackStopEvent | IDtmfEvent
) {
  logger.info(
    `Routing: ${event.uniqueId} to: ${event.caller.destinationNumber}`
  )
  const dialplanState = await getDialplanState(
    `${event.caller.destinationNumber}_${event.uniqueId}`
  )
  switch (event.caller.destinationNumber) {
    case dialplans.MANAGER:
      Manager.executeDialplan(event, dialplanState)
      break
  }
}
