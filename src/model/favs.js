const Sequelize = require('sequelize')
const sequelize = require('../database')

const Favs = sequelize.define('Favs', {
    product_id: {
        type: Sequelize.INTEGER,
    },
    user_id: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.BOOLEAN,
    }
}, {
    freezeTableName: true,
})

module.exports = { Favs }