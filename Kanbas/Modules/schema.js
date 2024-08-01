import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: String,
    description: String,
    course: String,
    lessons: [
      { id: String, name: String, description: String, module: String },
    ],
  },
  { collection: "modules" }
);
export default moduleSchema;
