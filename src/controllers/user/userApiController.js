import userController from "./userController.js";
import {hash} from "../../utils/bcrypt.js";
import {createToken,verifyToken} from "../../utils/token.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const response = await userController.controllerGetByID(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const response = await userController.controllerGetAll();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    req.body.password = await hash(req.body.password);
    const response = await userController.controllerCreate(req.body);
    
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function edit(req, res) {
  try {
    const id = req.params.id;
    req.body.password = await hash(req.body.password);
    const response = await userController.controllerEdit(id, req.body);
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await userController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}


async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await userController.controllerLogin(email, password);

    const data = {
      user_id: result.user_id
    };
    const token = createToken(data);
    res.json({ token: token });
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}


export default {
  getAll,
  getByID,
  create,
  edit,
  remove,
  login
};
