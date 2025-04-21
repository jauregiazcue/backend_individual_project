import objCategoryController from "./objCategoryController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const response = await objCategoryController.controllerGetByID(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const response = await objCategoryController.controllerGetAll();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const response = await objCategoryController.controllerCreate(req.body);
    
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
    const response = await objCategoryController.controllerEdit(id, req.body);
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: error });
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await objCategoryController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  create,
  edit,
  remove,
};
