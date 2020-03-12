const router = require("express").Router();
const controller = require("../controllers/analyticsController.js");

router.route("/analytics/summary").get(controller.aggregateViewData);

module.exports = router;
