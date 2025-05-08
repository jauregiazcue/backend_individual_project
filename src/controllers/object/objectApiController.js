import objectController from "./objectController.js";

async function getByID(req, res) {
  try {
    const id = req.params.id;
    const response = await objectController.controllerGetByID(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getByCategory(req, res) {
  try {
    const id = req.params.category_id;
    const response = await objectController.controllerGetByCategory(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const response = await objectController.controllerGetAll();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    const response = await objectController.controllerCreate(req.body);

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

async function edit(req, res) {
  try {
    const id = req.params.id;
    const response = await objectController.controllerEdit(id, req.body);
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
    const response = await objectController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  getByCategory,
  create,
  edit,
  remove,
};
