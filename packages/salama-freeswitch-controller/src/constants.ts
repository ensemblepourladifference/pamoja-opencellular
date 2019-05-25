import * as DotEnv from 'dotenv'
DotEnv.config({
  path: `${process.cwd()}/.env`
})

interface IConfigModule {
  ip: string
  port: string | number
  password: string
}

export const config: IConfigModule = {
  ip: process.env.FREESWITCH_IP || '127.0.0.1',
  port: process.env.FREESWITCH_PORT || 8021,
  password: process.env.FREESWITCH_PASSWORD || 'ClueCon'
}
