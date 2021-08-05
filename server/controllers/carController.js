const uuid = require('uuid');
const path = require('path');
const {Car} = require("../models/models");
const ApiError = require('../error/ApiError');

class CarController {
   async create(req, res, next) {
      try {
         const {brand, model, engine, hp, year, userId} = req.body;
         const {img} = req.files;
         let fileName = uuid.v4() + ".jpg";
         img.mv(path.resolve(__dirname, '..', 'static', fileName));

         const car = await Car.create({brand, model, engine, hp, year, img: fileName, userId});

         return res.json(car);
      } catch (e) {
         next(ApiError.badRequest(e.message));
      }
   }

   async getAll(req, res) {
      // const {userId} = req.query;
      let cars = await Car.findAll();
      return res.json(cars);
   }

   async getOne(req, res) {
      const {id} = req.params;
      const car = await Car.findOne({where: {id}});
      return  res.json(car);
   }

   async delete(req, res) {

   }
}

module.exports = new CarController();