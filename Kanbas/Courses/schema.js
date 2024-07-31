import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: { type: String },
    number: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" }
);
export default courseSchema;
