
import objCatModel from "../../models/objectCategoryModel.js";

async function controllerGetByID(id) {
  const result = await objCatModel.findByPk(id);
  return result;
}

async function controllerGetAll() {
  const result = await objCatModel.findAll();
  return result;
}

async function controllerCreate(data) { 
  const result = await objCatModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  let doc = await objCatModel.findByPk(id);
  data.name = data.name ? data.name : doc.name;
  
  const result = await objCatModel.update(data, {
    where: {
      object_category_id: id,
    },
  });
  doc = await objCatModel.findByPk(id);
  return doc;
}

async function controllerRemove(id) {
  const result = await objCatModel.destroy({
    where: {
      object_category_id: id,
    },
  });
  return result == 1 ? "Removed Completed without complication" 
  : "The has been an error in the removing process";;
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
