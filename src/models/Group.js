const { DataTypes } = require('sequelize');

const db = require('../core/db');
// const { GoodModel } = require('./index');
const { GoodModel } = require('./');

// console.log('GoodModel', GoodModel)

const GroupModel = db.define('Group', {
	_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		defaultValue: ""
	},
	// goods: {
	// 	type: DataTypes.ARRAY({
	// 		type: DataTypes.UUID,
	// 		references: {
	// 			model: GoodModel,
	// 			key: 'id',
	// 			// deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
	// 		},
	// 		allowNull: false
	// 	}),
	// 	allowNull: false
	// }
}, {
	timestamps: true
})

// console.log('GroupModel', GroupModel.belongsToMany)
// console.log('GoodModel', GoodModel.belongsToMany)
// console.log('MODELS', db.models)

// GroupModel.belongsToMany(GoodModel, { through: 'GroupGoods' });

// GroupModel.hasMany(GoodModel);


module.exports = GroupModel;








// const Movie = db.define('Movie', { name: DataTypes.STRING });
// const Actor = db.define('Actor', { name: DataTypes.STRING });
// const ActorMovies = db.define('ActorMovies', {
// 	MovieId: {
// 		type: DataTypes.INTEGER,
// 		references: {
// 			model: Movie, // 'Movies' would also work
// 			key: 'id'
// 		}
// 	},
// 	ActorId: {
// 		type: DataTypes.INTEGER,
// 		references: {
// 			model: Actor, // 'Actors' would also work
// 			key: 'id'
// 		}
// 	}
// });
// Movie.belongsToMany(Actor, { through: ActorMovies });
// Actor.belongsToMany(Movie, { through: ActorMovies });