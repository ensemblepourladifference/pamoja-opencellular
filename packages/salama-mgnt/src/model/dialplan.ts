import { model, Schema, Document } from 'mongoose'
import { IUserModel } from 'src/model/user'

interface IDialplan {
  uuid: string
  extensions: string
  userId: IUserModel['_id']
}
export interface IDialplanModel extends IDialplan, Document {}

const dialplanSchema = new Schema({
  uuuid: String,
  extensions: String,
  userId: { type: Schema.Types.ObjectId, required: true }
})

export default model<IDialplanModel>('Dialplan', dialplanSchema)
