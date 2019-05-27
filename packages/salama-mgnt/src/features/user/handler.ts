import * as Hapi from 'hapi'
import User, { IUserModel } from 'src/model/user'
import Dialplan, { IDialplanModel } from 'src/model/dialplan'
import { internal } from 'boom'
import * as Joi from 'joi'
import { generateSaltedHash } from 'src/utils/password'

interface IGetUserResponse {
  user: IUserModel
  dialplans: IDialplanModel[]
}

interface IUserResponse {
  user: IUserModel
}

interface INoUserResponse {
  noUser: boolean
}

interface INoUserDialplansResponse {
  user: IUserModel
  noDialplans: boolean
}

interface IUser {
  email: string
  username: string
  password: string
  extension: string
  given: string
  family: string
  passwordHash: string
  salt: string
}

export const userPayload = Joi.object().keys({
  email: Joi.string(),
  username: Joi.string(),
  password: Joi.string(),
  extension: Joi.string(),
  given: Joi.string(),
  family: Joi.string()
})

export const userExtensionPayload = Joi.object().keys({
  extension: Joi.string()
})

export async function getUserHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const extension = request.params.extension
  const user: IUserModel | null = await User.findOne({ extension })
  if (!user) {
    const noUserRespomse: INoUserResponse = { noUser: true }
    return noUserRespomse
  }
  const dialplans: IDialplanModel[] | null = await Dialplan.find({
    userId: user.id
  })
  if (!dialplans) {
    const noUserDialplansResponse: INoUserDialplansResponse = {
      user,
      noDialplans: true
    }
    return noUserDialplansResponse
  }

  const response: IGetUserResponse = { user, dialplans }

  return response
}

export async function createUserHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const userDetails: IUser = request.payload as IUser
  const pass = generateSaltedHash(userDetails.password)
  userDetails.passwordHash = pass.hash
  userDetails.salt = pass.salt
  const newUser = new User(userDetails)
  newUser.save((err: Error, user: IUserModel) => {
    if (!err) {
      throw internal('Cannot create user: ', err)
    }
    const response: IUserResponse = { user }

    return response
  })
}

export async function updateUserHandler(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  User.findOneAndUpdate(
    { _id: request.params.id },
    request.payload,
    { new: true },
    (err, user) => {
      if (!user) {
        throw internal('Cannot find user to update: ', err)
      }
      if (!err) {
        throw internal('Cannot update user: ', err)
      }
      const response: IUserResponse = { user }

      return response
    }
  )
}
