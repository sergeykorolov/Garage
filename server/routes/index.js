const Router = require('express');
const router = new Router();
const carRouter = require('./carRouter');
const userRouter = require('./userRouter');
const repairPartsRouter = require('./repairPartsRouter');
const serviceHistoryRouter = require('./serviceHistoryRouter');
const tasksRouter = require('./tasksRouter');

router.use('/user', userRouter);
router.use('/car', carRouter);
router.use('/repairParts', repairPartsRouter);
router.use('/serviceHistory', serviceHistoryRouter);
router.use('/tasks', tasksRouter);

module.exports = router;