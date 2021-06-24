const { DataTypes } = require('sequelize')
const connection = require('../config/sequelize')

const users = connection.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{timestamps: false}
)

module.exports = users
