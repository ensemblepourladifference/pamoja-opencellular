import * as Hapi from 'hapi'
import Emergency, { IEmergencyModel } from 'src/model/emergency'
import { internal } from 'boom'
import * as Joi from 'joi'

interface IGetEmergencyResponse {
  emergency: IEmergencyModel
}

interface IEmergency {
  auditPath: string
  toBeContacted: string
  userId: string
}

export const emergencyPayload = Joi.object().keys({
  auditPath: Joi.string(),
  toBeContacted: Joi.string(),
  userId: Joi.number()
})

export const updateEmergencyPayload = Joi.object().keys({
  contacted: Joi.string(),
  active: Joi.boolean(),
  cancelled: Joi.boolean(),
  userId: Joi.number()
})

export async function getEmergencyHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const id = request.params.id
  const emergency: IEmergencyModel | null = await Emergency.findById(id)
  if (!emergency) {
    throw internal('Emergency does not exist')
  }
  const response: IGetEmergencyResponse = { emergency }

  return response
}

export async function createEmergencyHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const emergencyDetails: IEmergency = request.payload as IEmergency

  const newEmergency = new Emergency(emergencyDetails)
  newEmergency.save((err: Error, emergency: IEmergencyModel) => {
    if (!err) {
      throw internal('Cannot create emergency: ', err)
    }
    const response: IGetEmergencyResponse = { emergency }

    return response
  })
}

export async function updateEmergencyHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  Emergency.findOneAndUpdate(
    { _id: request.params.id },
    request.payload,
    { new: true },
    (err, emergency) => {
      if (!emergency) {
        throw internal('Cannot find emergency to update: ', err)
      }
      if (!err) {
        throw internal('Cannot update emergency: ', err)
      }
      const response: IGetEmergencyResponse = { emergency }

      return response
    }
  )
}

export async function deleteDialplanHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {}
