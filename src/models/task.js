const { DataTypes } = require('sequelize')
const connection = require('../config/sequelize')
const Users = require('./users')
const sequelizePaginate = require('sequelize-paginate')

const task = connection.define('task', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    },

},
{timestamps: false}
)

sequelizePaginate.paginate(task)

Users.hasMany(task)
task.belongsTo(Users)

module.exports = task