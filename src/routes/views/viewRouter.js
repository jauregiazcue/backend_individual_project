import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("layout");
});

router.get("/es/inicio", (req, res) => {
  res.render("home");
});

router.get("/es/tramitesYServicios", (req, res) => {
  res.render("services");
});

router.get("/ciudad", (req, res) => {
  res.render("city");
});

router.get("/ayuntamiento", (req, res) => {
  res.render("cityhall");
});

router.get("/turismo", (req, res) => {
  res.render("turism");
});

router.get("/agenda2030", (req, res) => {
  res.render("schedule");
});





export default router;
