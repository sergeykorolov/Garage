const Router = require('express');
const router = new Router();
const serviceHistoryController = require("../controllers/serviceHistoryController");

router.post('/', serviceHistoryController.create);
router.get('/', serviceHistoryController.getAll);

module.exports = router;