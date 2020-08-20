const { DataTypes } = require('sequelize');

const db = require('../core/db');

// const { GroupModel } = require('./');
const GroupModel = require('./Group');

const GoodModel = db.define('Good', {
	_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cost: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING
	},
	tags: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		defaultValue: []
	},
	colors: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		defaultValue: []
	}
}, {
	timestamps: true
});

// console.log('GoodModel', GoodModel.belongsToMany)
// console.log('GroupModel', GroupModel.belongsToMany)

// Good.belongsToMany(GroupModel, { through: 'GroupGoods' });

// console.log(GoodModel === db.models.Good); // true
// console.log('MODELS', db.models); // true



module.exports = GoodModel;