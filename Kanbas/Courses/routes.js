import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  app.put("/api/courses/:id", async (req, res) => {
    const course = await dao.updateCourse(req.params.id, req.body);
    res.json(course);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  });

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
}
