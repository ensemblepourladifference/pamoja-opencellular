import * as redis from 'redis'
import { config } from 'src/constants'
import { promisify } from 'util'

let redisClient: redis.RedisClient

export interface IDatabaseConnector {
  stop: () => void
  start: () => void
  set: (key: string, value: string) => Promise<void>
  get: (key: string) => Promise<string | null>
  del: (key: string) => Promise<number>
}

export async function stop() {
  redisClient.quit()
}

export async function start() {
  redisClient = redis.createClient({
    host: config.redisHost,
    retry_strategy: options => {
      return 1000
    }
  })
}

export const get = (key: string) =>
  promisify(redisClient.get).bind(redisClient)(key)

export const set = (key: string, value: string) =>
  promisify(redisClient.set).bind(redisClient)(key, value)

export const del = (key: string) =>
  promisify(redisClient.del).bind(redisClient)(key)

export const connector: IDatabaseConnector = { set, get, del, stop, start }

export default connector

const activeChannels: string[] = []

export async function checkAndTrackCall(channelId: string) {
  if (!activeChannels.includes(channelId)) {
    activeChannels.push(channelId)
    const inProgress = await get(`call_in_progress_${channelId}`)
    if (inProgress !== null) {
      return false
    } else {
      await set(`call_in_progress_${channelId}`, 'in_progress')
      return true
    }
  } else {
    return false
  }
}

export function setDialplanState(dialplanStateId: string, value: string) {
  set(dialplanStateId, value)
}

export async function getDialplanState(dialplanStateId: string) {
  return await get(dialplanStateId)
}
