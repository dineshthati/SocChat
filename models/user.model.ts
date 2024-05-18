import mongoose, { Date, Document, Model } from "mongoose";

export interface UserInterface {
  username: string;
  fullName: string;
  email: string;
  profilePhotoUrl: string;
}

export interface UserDocument extends UserInterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePhotoUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User: Model<UserDocument> =
  mongoose?.models?.User || mongoose.model("User", userSchema);

export default User;
