import model from "./model.js";

export const createModule = async (courseId, module) => {
  delete module._id;
  //module.id = new Date().getTime().toString();
  module.course = courseId;
  return model.create(module);
};

export const findAllModulesForCourse = async (courseId) => {
  return await model.find({ course: courseId });
};

export const findModuleById = async (moduleId) => {
  return await model.findOne({ id: moduleId });
};

export const updateModule = async (moduleId, module) => {
  return await model.updateOne({ id: moduleId }, { $set: module });
};

export const deleteModule = async (moduleId) => {
  console.log("Deleting module with ID:", moduleId);
  return await model.deleteOne({ _id: moduleId });
};
