const Router = require('express');
const router = new Router();
const repairPartsController = require('../controllers/repairPartsController');

router.post('/', repairPartsController.create);
router.get('/', repairPartsController.getAll);

module.exports = router;