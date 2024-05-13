import mongoose, { Model, Types } from "mongoose";

export interface chatInterface {
  participants: Types.ObjectId[];
  message: Types.ObjectId[];
}

export interface chatDocument extends chatInterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

const chatSchema = new mongoose.Schema<chatDocument>(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);

const Chat: Model<chatDocument> = mongoose.model("Chat", chatSchema);

export default Chat;
