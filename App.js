import "dotenv/config";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./Kanbas/User/routes.js";

import cors from "cors";
import mongoose from "mongoose";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());

app.use(express.json());

Lab5(app);

Hello(app);

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
