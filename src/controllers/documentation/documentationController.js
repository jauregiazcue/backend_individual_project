
import docModel from "../../models/documentationModel.js";

async function controllerGetByID(id) {
  const user = await docModel.findByPk(id);
  return user;
}

async function controllerGetAll() {
  const user = await docModel.findAll();
  return user;
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
  return result;
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
