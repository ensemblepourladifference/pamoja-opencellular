import { model, Schema, Document } from 'mongoose'

interface IUser {
  uuid: string
  username: string
  email: string
  extension: string
  passwordHash: string
  salt: string
  given: string
  family: string
}
export interface IUserModel extends IUser, Document {}

const userSchema = new Schema({
  uuuid: String,
  username: String,
  email: String,
  extension: String,
  passwordHash: { type: String, required: true },
  salt: { type: String, required: true },
  given: String,
  family: String
})

export default model<IUserModel>('User', userSchema)
