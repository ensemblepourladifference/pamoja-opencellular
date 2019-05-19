import * as Hapi from 'hapi'
import Dialplan, { IDialplanModel } from 'src/model/dialplan'
import { internal } from 'boom'
import * as Joi from 'joi'
import { v4 as uuid } from 'uuid'

interface IGetDialplanResponse {
  dialplans: IDialplanModel[]
}

interface IDialplanResponse {
  dialplan: IDialplanModel
}

export const extensionsPayload = Joi.object().keys({
  extensions: Joi.string()
})

export async function getDialplanHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const userId = request.params.userId
  const dialplans: IDialplanModel[] | null = await Dialplan.find({
    userId
  })
  if (!dialplans) {
    throw internal('Dialplans do not exist')
  }
  const response: IGetDialplanResponse = { dialplans }

  return response
}

export async function createDialplanHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const extensions = request.payload
  const userId = request.params.userId
  const uuidV4 = uuid()
  const newDialplan = new Dialplan({ uuidV4, extensions, userId })
  newDialplan.save((err: Error, dialplan: IDialplanModel) => {
    if (!err) {
      throw internal('Cannot create dialplan: ', err)
    }
    const response: IDialplanResponse = { dialplan }

    return response
  })
}

export async function updateDialplanHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  Dialplan.findOneAndUpdate(
    { _id: request.params.id },
    request.payload,
    { new: true },
    (err, dialplan) => {
      if (!dialplan) {
        throw internal('Cannot find dialplan to update: ', err)
      }
      if (!err) {
        throw internal('Cannot update dialplan: ', err)
      }
      const response: IDialplanResponse = { dialplan }

      return response
    }
  )
}

export async function deleteDialplanHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const id = parseInt(request.params.id, 10)
  Dialplan.find({ id }).remove((err: Error, response: any) => {
    if (!err) {
      throw internal('Cannot delete dialplan: ', err)
    }
    return response
  })
}
