import { Schema, model, Document, Types } from 'mongoose';
import { User } from '../../domain/models/User';

export interface UserDocument extends Omit<User, '_id'>, Document {
  _id: Types.ObjectId; 
}

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<UserDocument>('User', UserSchema);
