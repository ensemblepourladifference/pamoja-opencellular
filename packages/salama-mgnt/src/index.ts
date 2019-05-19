// tslint:disable no-var-requires
require('app-module-path').addPath(require('path').join(__dirname, '../'))
// tslint:enable no-var-requires

import * as Hapi from 'hapi'
import getPlugins from './config/plugins'
import { SALAMA_HOST, SALAMA_PORT } from './constants'
import * as database from './database'
import {
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  userPayload,
  userExtensionPayload
} from './features/user/handler'
import {
  getDialplanHandler,
  createDialplanHandler,
  updateDialplanHandler,
  deleteDialplanHandler,
  extensionsPayload
} from './features/dialplan/handler'
import {
  getEmergencyHandler,
  createEmergencyHandler,
  updateEmergencyHandler,
  emergencyPayload,
  updateEmergencyPayload
} from './features/emergency/handler'

export async function createServer() {
  const server = new Hapi.Server({
    host: SALAMA_HOST,
    port: SALAMA_PORT,
    routes: {
      cors: { origin: ['*'] }
    }
  })

  server.route({
    method: 'GET',
    path: '/users/{extension}',
    handler: getUserHandler,
    options: {
      tags: ['api'],
      description: 'Returns user'
    }
  })

  server.route({
    method: 'POST',
    path: '/users',
    handler: createUserHandler,
    options: {
      tags: ['api'],
      description: 'Creates user',
      validate: {
        payload: userExtensionPayload
      }
    }
  })

  server.route({
    method: 'PUT',
    path: '/users/{id}',
    handler: updateUserHandler,
    options: {
      tags: ['api'],
      description: 'Updates user',
      validate: {
        payload: userPayload
      }
    }
  })

  server.route({
    method: 'GET',
    path: '/dialplan/{userId}',
    handler: getDialplanHandler,
    options: {
      description: 'Route to get dialplans.',
      tags: ['api']
    }
  })

  server.route({
    method: 'POST',
    path: '/dialplan/{userId}',
    handler: createDialplanHandler,
    options: {
      description: 'Route to create a dialplan.',
      tags: ['api'],
      validate: {
        payload: extensionsPayload
      }
    }
  })

  server.route({
    method: 'PUT',
    path: '/dialplan/{id}',
    handler: updateDialplanHandler,
    options: {
      description: 'Route to update a dialplan.',
      tags: ['api'],
      validate: {
        payload: extensionsPayload
      }
    }
  })

  server.route({
    method: 'DELETE',
    path: '/dialplan/{id}',
    handler: deleteDialplanHandler,
    options: {
      description: 'Route to delete a dialplan.',
      tags: ['api']
    }
  })

  server.route({
    method: 'GET',
    path: '/emergencies/{id}',
    handler: getEmergencyHandler,
    options: {
      description: 'Route to get emergencies.',
      tags: ['api']
    }
  })

  server.route({
    method: 'POST',
    path: '/emergencies',
    handler: createEmergencyHandler,
    options: {
      description: 'Route to create emergencies.',
      tags: ['api'],
      validate: {
        payload: emergencyPayload
      }
    }
  })

  server.route({
    method: 'PUT',
    path: '/emergencies/{id}',
    handler: updateEmergencyHandler,
    options: {
      description: 'Route to update a emergencies.',
      tags: ['api'],
      validate: {
        payload: updateEmergencyPayload
      }
    }
  })

  await server.register(getPlugins())

  async function stop() {
    await server.stop()
    await database.stop()
    server.log('info', 'server stopped')
  }

  async function start() {
    await server.start()
    await database.start()
    server.log('info', `server started on ${SALAMA_HOST}:${SALAMA_PORT}`)
  }

  return { server, start, stop }
}

if (require.main === module) {
  createServer().then(server => server.start())
}
