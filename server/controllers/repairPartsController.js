const {RepairParts} = require('../models/models');
const ApiError = require('../error/ApiError');

class RepairPartsController {
   async create(req, res) {
      const {title, part_number} = req.body;
      const repairPart = await RepairParts.create({title, part_number});
      return res.json(repairPart);
   }

   async getAll(req, res) {
      const repairParts = await RepairParts.findAll();
      return res.json(repairParts);
   }
}

module.exports = new RepairPartsController();