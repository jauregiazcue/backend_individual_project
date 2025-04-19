
import userModel from "../../models/userModel.js";

async function controllerGetByID(id) {
  const user = await userModel.findByPk(id);
  return user;
}

async function controllerGetAll() {
  const user = await userModel.findAll();
  return user;
}

async function controllerCreate(data) { 
  const result = await userModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  
  const result = await userModel.update(data, {
    where: {
      email: id,
    },
  });
  const updatedUser = await userModel.findByPk(id);
  return updatedUser;
}

async function controllerRemove(id) {
  const result = await userModel.destroy({
    where: {
      email: id,
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
