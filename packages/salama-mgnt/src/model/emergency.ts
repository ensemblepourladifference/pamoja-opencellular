import { model, Schema, Document } from 'mongoose'
import { IUserModel } from 'src/model/user'

interface IEmergency {
  uuid: string
  auditPath: string
  toBeContacted: string
  contacted: string
  active: boolean
  cancelled: boolean
  userId: IUserModel['_id']
}
export interface IEmergencyModel extends IEmergency, Document {}

const emergencySchema = new Schema({
  uuuid: String,
  auditPath: String,
  toBeContacted: String,
  contacted: String,
  active: Boolean,
  cancelled: Boolean,
  userId: { type: Schema.Types.ObjectId, required: true }
})

export default model<IEmergencyModel>('Emergency', emergencySchema)
