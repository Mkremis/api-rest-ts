import { Schema, Types, model, Models } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: false,
      default: 'https://cdn-icons-png.flaticon.com/512/727/727368.png',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel = model('users', UserSchema);
export default UserModel;
