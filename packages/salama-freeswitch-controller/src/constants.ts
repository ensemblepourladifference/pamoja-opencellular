import * as DotEnv from 'dotenv'
DotEnv.config({
  path: `${process.cwd()}/.env`
})

interface IConfigModule {
  ip: string
  port: string | number
  password: string
  language: string
  managerUrl: string
  applicationSoundsDirectory: string
  applicationDialplans: string[]
  redisHost: string
}

export const dialplans = {
  MANAGER: '333'
}

export const config: IConfigModule = {
  ip: process.env.FREESWITCH_IP || '0.0.0.0',
  port: process.env.FREESWITCH_PORT || 8021,
  password: process.env.FREESWITCH_PASSWORD || 'ClueCon',
  language: process.env.FREESWITCH_LANGUAGE || 'en',
  managerUrl: process.env.SALAMA_MANAGER_URL || 'http://localhost:4040',
  applicationSoundsDirectory: process.env.APP_SOUNDS_DIRECTORY || 'salama/', // Everything after the default Freeswitch directory.  Eg: /usr/local/freeswitch/sounds/fr/ca/june/
  applicationDialplans: Object.values(dialplans),
  redisHost: process.env.REDIS_HOST || 'localhost'
}
