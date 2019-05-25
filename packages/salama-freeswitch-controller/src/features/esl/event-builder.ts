export const CHANNEL_CREATE = 'CHANNEL_CREATE'
export const CHANNEL_HANGUP = 'CHANNEL_HANGUP'
const DTMF = 'DTMF'

interface IFreeswitch {
  hostname: string
  ipV4: string
  ipV6: string
}

interface ICaller {
  callerIdName: string
  callerIdNumber: string
  channelName: string
  context: string
  destinationNumber: string
  dialplan: string
  networkAddr: string
  privacyHideName: string
  privacyHideNumber: string
  screenBit: string
  source: string
  uniqueId: string
  username: string
  channelAnsweredTime?: string
  channelCreatedTime?: string
  channelHangupTime?: string
  channelTransferTime?: string
}

interface IChannel {
  name: string
  state: string
  stateNumber: string
}

interface ICodec {
  channelReadCodecName: string
  channelReadCodecRate: string
  channelWriteCodecName: string
  channelWriteCodecRate: string
}

interface IDate {
  gmt: string
  local: string
  timestamp: string
}

interface IOriginate {
  callerIdName: string
  callerIdNumber: string
  channelName: string
  context: string
  destinationNumber: string
  dialplan: string
  networkAddr: string
  privacyHideName: string
  privacyHideNumber: string
  screenBit: string
  source: string
  uniqueId: string
  username: string
}

interface IGenericEvent {
  callingFile: string
  callingFunction: string
  callingLineNumber: string
  date: IDate
  name: string
}

interface IChannelHangupEvent extends IGenericEvent {
  codec: ICodec
  caller: ICaller
  originate: IOriginate
  hangupCause: string
}

interface IChannelCreateEvent extends IGenericEvent {
  channel: IChannel
  freeswitch: IFreeswitch
  answerState: string
  callDirection: string
  coreUuid: string
  presenceCallDirection: string
  uniqueId: string
}

interface IDtmfEvent extends IGenericEvent {
  codec: ICodec
  caller: ICaller
  channel: IChannel
  freeswitch: IFreeswitch
  answerState: string
  callDirection: string
  coreUuid: string
  digit: string
  duration: string
  uniqueId: string
}

const getFreeswitch = (rawEvent: any): IFreeswitch => {
  return {
    hostname: rawEvent.getHeader('FreeSWITCH-Hostname'),
    ipV4: rawEvent.getHeader('FreeSWITCH-IPv4'),
    ipV6: rawEvent.getHeader('FreeSWITCH-IPv6')
  }
}

const getCaller = (rawEvent: any): ICaller => {
  return {
    callerIdName: rawEvent.getHeader('Caller-Caller-ID-Name'),
    callerIdNumber: rawEvent.getHeader('Caller-Caller-ID-Number'),
    channelName: rawEvent.getHeader('Caller-Channel-Name'),
    context: rawEvent.getHeader('Caller-Context'),
    destinationNumber: rawEvent.getHeader('Caller-Destination-Number'),
    dialplan: rawEvent.getHeader('Caller-Dialplan'),
    networkAddr: rawEvent.getHeader('Caller-Network-Addr'),
    privacyHideName: rawEvent.getHeader('Caller-Privacy-Hide-Name'),
    privacyHideNumber: rawEvent.getHeader('Caller-Privacy-Hide-Number'),
    screenBit: rawEvent.getHeader('Caller-Screen-Bit'),
    source: rawEvent.getHeader('Caller-Source'),
    uniqueId: rawEvent.getHeader('Caller-Unique-ID'),
    username: rawEvent.getHeader('Caller-Username')
  }
}

const getChannel = (rawEvent: any): IChannel => {
  return {
    name: rawEvent.getHeader('Channel-Name'),
    state: rawEvent.getHeader('Channel-State'),
    stateNumber: rawEvent.getHeader('Channel-State-Number')
  }
}

const getCodec = (rawEvent: any): ICodec => {
  return {
    channelReadCodecName: rawEvent.getHeader('Channel-Read-Codec-Name'),
    channelReadCodecRate: rawEvent.getHeader('Channel-Read-Codec-Rate'),
    channelWriteCodecName: rawEvent.getHeader('Channel-Write-Codec-Name'),
    channelWriteCodecRate: rawEvent.getHeader('Channel-Write-Codec-Rate')
  }
}

const getChannelCreate = (rawEvent: any): IChannelCreateEvent => {
  const channelCreate = getGeneric(rawEvent) as IChannelCreateEvent
  channelCreate.channel = getChannel(rawEvent)
  channelCreate.freeswitch = getFreeswitch(rawEvent)
  channelCreate.answerState = rawEvent.getHeader('Answer-State')
  channelCreate.callDirection = rawEvent.getHeader('Call-Direction')
  channelCreate.coreUuid = rawEvent.getHeader('Core-UUID')
  channelCreate.presenceCallDirection = rawEvent.getHeader(
    'Presence-Call-Direction'
  )
  channelCreate.uniqueId = rawEvent.getHeader('Unique-ID')
  return channelCreate
}

const getChannelHangup = (rawEvent: any): IChannelHangupEvent => {
  const channelHangup = getGeneric(rawEvent) as IChannelHangupEvent
  channelHangup.codec = getCodec(rawEvent)
  channelHangup.caller = getCaller(rawEvent)
  channelHangup.originate = getOriginate(rawEvent)
  channelHangup.hangupCause = rawEvent.getHeader('Hangup-Cause')
  return channelHangup
}

const getDtmf = (rawEvent: any): IDtmfEvent => {
  const dtmf = getGeneric(rawEvent) as IDtmfEvent
  const caller = getCaller(rawEvent)
  caller.channelAnsweredTime = rawEvent.getHeader(
    'Caller-Channel-Answered-Time'
  )
  caller.channelCreatedTime = rawEvent.getHeader('Caller-Channel-Created-Time')
  caller.channelHangupTime = rawEvent.getHeader('Caller-Channel-Hangup-Time')
  caller.channelTransferTime = rawEvent.getHeader(
    'Caller-Channel-Transfer-Time'
  )
  dtmf.caller = caller
  dtmf.channel = getChannel(rawEvent)
  dtmf.codec = getCodec(rawEvent)
  dtmf.freeswitch = getFreeswitch(rawEvent)
  dtmf.answerState = rawEvent.getHeader('Answer-State')
  dtmf.callDirection = rawEvent.getHeader('Call-Direction')
  dtmf.coreUuid = rawEvent.getHeader('Core-UUID')
  dtmf.digit = rawEvent.getHeader('DTMF-Digit')
  dtmf.duration = rawEvent.getHeader('DTMF-Duration')
  dtmf.uniqueId = rawEvent.getHeader('Unique-ID')
  return dtmf
}

const getGeneric = (rawEvent: any): IGenericEvent => {
  return {
    callingFile: rawEvent.getHeader('Event-Calling-File'),
    callingFunction: rawEvent.getHeader('Event-Calling-Function'),
    callingLineNumber: rawEvent.getHeader('Event-Calling-Line-Number'),
    date: {
      gmt: rawEvent.getHeader('Event-Date-GMT'),
      local: rawEvent.getHeader('Event-Date-Local'),
      timestamp: rawEvent.getHeader('Event-Date-Timestamp')
    },
    name: rawEvent.getHeader('Event-Name')
  }
}

const getOriginate = (rawEvent: any): IOriginate => {
  return {
    callerIdName: rawEvent.getHeader('Originatee-Caller-ID-Name'),
    callerIdNumber: rawEvent.getHeader('Originatee-Caller-ID-Number'),
    channelName: rawEvent.getHeader('Originatee-Channel-Name'),
    context: rawEvent.getHeader('Originatee-Context'),
    destinationNumber: rawEvent.getHeader('Originatee-Destination-Number'),
    dialplan: rawEvent.getHeader('Originatee-Dialplan'),
    networkAddr: rawEvent.getHeader('Originatee-Network-Addr'),
    privacyHideName: rawEvent.getHeader('Originatee-Privacy-Hide-Name'),
    privacyHideNumber: rawEvent.getHeader('Originatee-Privacy-Hide-Number'),
    screenBit: rawEvent.getHeader('Originatee-Screen-Bit'),
    source: rawEvent.getHeader('Originatee-Source'),
    uniqueId: rawEvent.getHeader('Originatee-Unique-ID'),
    username: rawEvent.getHeader('Originatee-Username')
  }
}

export type IBuiltEvent =
  | IGenericEvent
  | IDtmfEvent
  | IChannelCreateEvent
  | IChannelHangupEvent

export const buildEvent = (rawEvent: any): IBuiltEvent => {
  const eventName = rawEvent.getHeader('Event-Name')
  switch (eventName) {
    case CHANNEL_CREATE:
      return getChannelCreate(rawEvent)
    case CHANNEL_HANGUP:
      return getChannelHangup(rawEvent)
    case DTMF:
      return getDtmf(rawEvent)
    default:
      return getGeneric(rawEvent)
  }
}
