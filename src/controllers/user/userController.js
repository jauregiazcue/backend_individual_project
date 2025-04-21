
import userModel from "../../models/userModel.js";
import { hash } from "../../utils/bcrypt.js";

async function controllerGetByID(id) {
  const result = await userModel.findByPk(id);
  return result;
}

async function controllerGetAll() {
  const result = await userModel.findAll();
  return result;
}

async function controllerCreate(data) { 
  const result = await userModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  let user = await userModel.findByPk(id);
  data.first_name = data.first_name ? data.first_name : user.first_name;
  data.last_name = data.last_name ? data.last_name : user.last_name;
  data.password = data.password ? await hash(data.password) : user.pasword;
  
  const result = await userModel.update(data, {
    where: {
      email: id,
    },
  });
  user = await userModel.findByPk(id);
  return user;
}

async function controllerRemove(id) {
  const result = await userModel.destroy({
    where: {
      email: id,
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
