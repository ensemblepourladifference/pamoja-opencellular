import {
  IChannelAnswerEvent,
  IPlaybackStopEvent,
  IDtmfEvent
} from 'src/features/esl/event-builder'
import { playFile } from 'src/utils/dialplan'
import { getFromManager } from 'src/apis/salama-manager'
import { setDialplanState } from 'src/apis/database'
import { dialplans } from 'src/constants'

const dialplan = dialplans.MANAGER

export async function executeDialplan(
  event: IChannelAnswerEvent | IPlaybackStopEvent | IDtmfEvent,
  state: string
) {
  switch (state) {
    case null:
      setDialplanState(`${dialplan}_${event.uniqueId}`, 'START')
      await playFile('1-1.wav', event.uniqueId)
      break
    case 'START':
      const response = await getFromManager(`/users/${event.caller.username}`)
      if (response.noUser) {
        setDialplanState(`${dialplan}_${event.uniqueId}`, 'NEW_USER_1')
        await playFile('1-2.wav', event.uniqueId)
        await playFile('1-3a.wav', event.uniqueId)
        await playFile('press.wav', event.uniqueId)
        await playFile('digits/1.wav', event.uniqueId)
        await playFile('1-3b.wav', event.uniqueId)
        await playFile('press.wav', event.uniqueId)
        await playFile('digits/2.wav', event.uniqueId)
      } else {
        setDialplanState(`${dialplan}_${event.uniqueId}`, 'EXISTING_USER_1')
      }
      break
    case 'NEW_USER_1':
      const dtmfEvent = event as IDtmfEvent
      if (dtmfEvent.digit && dtmfEvent.digit === '1') {
        console.log('its a 1')
      } else {
        console.log('its not a 1')
      }
      break
  }
}
