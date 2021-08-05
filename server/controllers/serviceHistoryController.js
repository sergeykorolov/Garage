const {ServiceHistory} = require('../models/models');
const ApiError = require('../error/ApiError');

class ServiceHistoryController {
   async create(req, res) {
      const {title, mileage, date, price} = req.body;
      const serviceHistory = await ServiceHistory.create({title, mileage, date, price});
      return res.json(serviceHistory);
   }

   async getAll(req, res) {
      const serviceHistory = await ServiceHistory.findAll();
      return res.json(serviceHistory);
   }
}

module.exports = new ServiceHistoryController();