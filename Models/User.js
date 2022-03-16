const Sequelize = require('sequelize')
const sequelize = require('../db.js')
const User = sequelize.define('user', {
id: {type: Sequelize.INTEGER, field:'user_id' , autoIncrement: true , allowNull: false , primaryKey: true },
name: { type: Sequelize.STRING , field:'user_name' , allowNull: false, unique:true },
password: { type: Sequelize.STRING , field:'user_password' , allowNull: false }
})
module.exports = User
