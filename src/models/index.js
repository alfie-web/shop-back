const GoodModel = require('./Good');
const GroupModel = require('./Group');

// GroupModel.hasMany(GoodModel);

module.exports = {
	GoodModel,
	GroupModel,
	GroupGoodsModel: require('./GroupGoods'),
}	