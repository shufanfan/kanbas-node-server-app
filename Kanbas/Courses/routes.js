import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  app.post("/api/courses", createCourse);

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  app.get("/api/courses", findAllCourses);

  const updateCourse = async (req, res) => {
    const status = await dao.updateCourse(req.params.id, req.body);
    res.json(status);
  };
  app.put("/api/courses/:id", updateCourse);

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };
  app.delete("/api/courses/:id", deleteCourse);
}
