import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("layout");
});

router.get("/es/inicio", (req, res) => {
  res.render("pages/home");
});

router.get("/es/tramitesYServicios", (req, res) => {
  res.render("pages/services");
});

router.get("/es/ciudad", (req, res) => {
  res.render("pages/city");
});

router.get("/es/ciudad/objetosPerdidos", (req, res) => {
  res.render("pages/lostAndFound");
});

router.get("/es/ciudad", (req, res) => {
  res.render("pages/city");
});

router.get("/es/ayuntamiento", (req, res) => {
  res.render("pages/cityhall");
});

router.get("/es/turismo", (req, res) => {
  res.render("pages/turism");
});

router.get("/es/agenda2030", (req, res) => {
  res.render("pages/schedule");
});





export default router;
