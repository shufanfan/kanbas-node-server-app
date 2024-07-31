import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: true, unique: true },
    description: String,
    course: { type: String, required: true, unique: true },
    lessons: [
      { id: String, name: String, description: String, module: String },
    ],
  },
  { collection: "modules" }
);
export default moduleSchema;
