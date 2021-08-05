const {Tasks} = require('../models/models');
const ApiError = require('../error/ApiError');

class TasksController {
   async create(req, res) {
      const {title} = req.body;
      const task = await Tasks.create({title});
      return res.json(task);
   }

   async getAll(req, res) {
      const tasks = await Tasks.findAll();
      return res.json(tasks);
   }
}

module.exports = new TasksController();