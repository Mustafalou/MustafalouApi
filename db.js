const Sequelize = require("sequelize")
const details = require("./info.json")
const sequelize = new Sequelize(
    details.database,
    details.HostName,
    details.PassWord,
    {
        dialect:details.dialect,
        host:details.HostIP
    }
)
module.exports = sequelize