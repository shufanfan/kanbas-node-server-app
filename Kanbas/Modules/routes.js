import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  app.delete("/api/modules/:mid", async (req, res) => {
    try {
      const { mid } = req.params;
      const status = await dao.deleteModule(mid);
      if (status.deletedCount === 0) {
        return res.status(404).json({ message: "Module not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting module:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/courses/:cid/modules", async (req, res) => {
    try {
      const { cid } = req.params;
      const modules = await dao.findAllModulesForCourse(cid);
      res.status(200).json(modules);
    } catch (error) {
      console.error("Error fetching modules:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    try {
      const { cid } = req.params;
      const newModule = await dao.createModule(cid, req.body);
      res.status(201).json(newModule);
    } catch (error) {
      console.error("Error creating module:", error);
      res.status(500).json({ message: error.message });
    }
  });

  app.put("/api/modules/:mid", async (req, res) => {
    try {
      const { mid } = req.params;
      const module = await dao.updateModule(mid, req.body);
      if (!module) {
        return res.status(404).json({ message: "Module not found" });
      }
      res.status(200).json(module);
    } catch (error) {
      console.error("Error updating module:", error);
      res.status(500).json({ message: error.message });
    }
  });
}
