const Sequelize = require('sequelize')
const sequelize = require('../database')
const { Products } = require('./products')
const { Users } = require('./users')

const Favs = sequelize.define('Favs', {
    product_id: {
        type: Sequelize.INTEGER,
        foreingKey: 'products_favs',
        references: {
            model: Products,
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        foreingKey: 'user_favs',
        references: {
            model: Users,
            key: 'id'
        }
    },
    status: {
        type: Sequelize.BOOLEAN,
    }
}, {
    freezeTableName: true,
})

module.exports = { Favs }