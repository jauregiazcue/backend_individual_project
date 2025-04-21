
import docModel from "../../models/documentationModel.js";

async function controllerGetByID(id) {
  const result = await docModel.findByPk(id);
  return result;
}

async function controllerGetAll() {
  const result = await docModel.findAll();
  return result;
}

async function controllerCreate(data) { 
  const result = await docModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  let doc = await docModel.findByPk(id);
  data.name = data.name ? data.name : doc.name;
  data.last_name_one = data.last_name_one ? data.last_name_one : doc.last_name_one;
  data.last_name_two = data.last_name_two ? data.last_name_two : doc.last_name_two;
  
  const result = await docModel.update(data, {
    where: {
      documentation_id: id,
    },
  });
  doc = await docModel.findByPk(id);
  return doc;
}

async function controllerRemove(id) {
  const result = await docModel.destroy({
    where: {
      documentation_id: id,
    },
  });
  return result == 1 ? "Removed Completed without complication" 
  : "The has been an error in the removing process";
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
