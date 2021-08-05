const Router = require('express');
const router = new Router();
const tasksController = require('../controllers/tasksController');

router.post('/', tasksController.create);
router.get('/', tasksController.getAll);

module.exports = router;