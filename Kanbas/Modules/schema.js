import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    course: { type: String, required: true, unique: true },
    description: String,
    lessons: [
      { id: String, name: String, description: String, module: String },
    ],
  },
  { collection: "modules" }
);
export default moduleSchema;
