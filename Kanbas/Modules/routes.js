import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    try {
      const module = await dao.createModule(req.body);
      res.status(201).json(module);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  app.post("/api/modules", createModule);

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  app.delete("/api/modules/:moduleId", deleteModule);

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };
  app.get("/api/modules", findAllModules);

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };
  app.get("/api/modules/:moduleId", findModuleById);

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  app.put("/api/modules/:moduleId", updateModule);
}
