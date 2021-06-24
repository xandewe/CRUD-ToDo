const Sequelize = require('sequelize')
require('dotenv/config');

const {user, password, host, database} = process.env

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:5432/${database}`);

try {
    const conn = sequelize.sync();
} catch(error) {
    console.log(error);
}

module.exports = sequelize;