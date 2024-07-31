import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };
  app.post("/api/courses/:cid/modules", createModule);

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.id);
    res.json(status);
  };
  app.delete("/api/modules/:id", deleteModule);

  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.id, req.body);
    res.json(status);
  };
  app.put("/api/modules/:id", updateModule);

  const findModulesByCourse = async (req, res) => {
    const modules = await dao.findModulesByCourse(req.params.id);
    res.json(modules);
  };
  app.get("/api/courses/:id/modules", findModulesByCourse);
}
