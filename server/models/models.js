const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   name: {type: DataTypes.STRING, allowNull: false},
   email: {type: DataTypes.STRING, unique: true, allowNull: false},
   password: {type: DataTypes.STRING, allowNull: false}
})

const Car = sequelize.define('car', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   brand: {type: DataTypes.STRING, allowNull: false},
   model: {type: DataTypes.STRING, allowNull: false},
   engine: {type: DataTypes.STRING, allowNull: false},
   hp: {type: DataTypes.INTEGER, allowNull: false},
   year: {type: DataTypes.INTEGER, allowNull: false},
   img: {type: DataTypes.STRING, allowNull: false}
})

const ServiceHistory = sequelize.define('service_history', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   title: {type: DataTypes.STRING, allowNull: false},
   mileage: {type: DataTypes.INTEGER, allowNull: false},
   date: {type: DataTypes.DATE, allowNull: false},
   price: {type: DataTypes.INTEGER, allowNull: false}
})

const Tasks = sequelize.define('tasks', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   title: {type: DataTypes.STRING, allowNull: false}
})

const RepairParts = sequelize.define('repair_parts', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   title: {type: DataTypes.STRING, allowNull: false},
   part_number: {type: DataTypes.STRING, allowNull: false}
})

User.hasMany(Car);
Car.belongsTo(User);

Car.hasMany(ServiceHistory);
ServiceHistory.belongsTo(Car);

Car.hasMany(Tasks);
Tasks.belongsTo(Car);

Car.hasMany(RepairParts);
RepairParts.belongsTo(Car);

module.exports = {
   User,
   Car,
   ServiceHistory,
   Tasks,
   RepairParts
}