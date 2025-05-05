
import objectModel from "../../models/objectModel.js";

async function controllerGetByID(id) {
  const result = await objectModel.findByPk(id);
  return result;
}

async function controllerGetByCategory(category_id) {
  const result = await objectModel.findAll({ 
    where: {object_category_id: category_id} 
  });
  return result;
}

async function controllerGetAll() {
  const result = await objectModel.findAll();
  return result;
}

function setNewObjectId() {
  //Example of ID : D21M5A2025M06S10
  let myDate = new Date();
  let newId = 
  "D" + myDate.getDate().toString() +
  "M" + (myDate.getMonth() + 1).toString() +
  "A" + myDate.getFullYear().toString() +
  "M" + (myDate.getMinutes()).toString() +
  "S" + (myDate.getSeconds()).toString();

  return newId;
}

async function controllerCreate(data) { 
console.log(setNewObjectId());
  data.object_id = setNewObjectId();
  data.lost_at = data.lost_at ? data.lost_at : new Date();
  const result = await objectModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  let doc = await objectModel.findByPk(id);
  
  
  const result = await objectModel.update(data, {
    where: {
      object_id: id,
    },
  });
  doc = await objectModel.findByPk(id);
  return doc;
}

async function controllerRemove(id) {
  const result = await objectModel.destroy({
    where: {
      object_id: id,
    },
  });
  return result == 1 ? "Removed Completed without complication" 
  : "There has been an error in the removing process";
}

export default {
  controllerGetByID,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
  controllerGetByCategory,
};
