var express = require("express");
var router = express.Router();
var controller = require("../controllers/home.controller");
router.get("/", controller.home);


router.post("/them", controller.them);

router.post("/xuatdanhsach", controller.xuatdanhsach);
router.post("/diemcao", controller.diemcao);
router.post("/topdiemcao", controller.topdiemcao);
router.post("/timkiem", controller.timkiem);
module.exports = router;