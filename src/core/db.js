const { Sequelize } = require('sequelize');

const db = new Sequelize({
	database: 'shop',
	username: 'postgres',
	password: '677091418237',
	host: 'localhost',
	port: 5432,
	dialect: 'postgres'
});

db.sync();

module.exports = db;