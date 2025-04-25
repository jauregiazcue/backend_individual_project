
import requestModel from "../../models/requestModel.js";

async function controllerGetByID(id) {
  const result = await requestModel.findByPk(id);
  return result;
}

async function controllerGetAll() {
  const result = await requestModel.findAll();
  return result;
}

async function controllerCreate(data) { 
  const result = await requestModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  let request = await requestModel.findByPk(id);
  
  const result = await requestModel.update(data, {
    where: {
      request_id: id,
    },
  });
  request = await requestModel.findByPk(id);
  return request;
}

async function controllerRemove(id) {
  const result = await requestModel.destroy({
    where: {
      request_id: id,
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
};
