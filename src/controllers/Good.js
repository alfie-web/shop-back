
const { GoodModel } = require('../models');

class Good {
	getAll = async (req, res) => {
		try {
			const goods = await GoodModel.findAll()

			res.json({
				status: 'success',
				data: goods
			})
		} catch (e) {
			console.log(e)
	
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}
	}

	// Хотя это может быть рационально, получать товары группы, без самой группы
	// getByGroup = async (req, res) => {
	// 	const groupId = req.params.groupId;

	// 	try {
	// 		const finded = await GoodModel.findAll({
	// 			include: [{
	// 				...
	// 			}]
	// 		})

	// 		res.json({
	// 			status: 'success',
	// 			data: finded
	// 		})
	// 	} catch (e) {
	// 		console.log(e)
	// 		res.status(400).json({
	// 			status: 'error',
	// 			message: `Самсинг вент ронг`
	// 		})
	// 	}
	// }

	create = async (req, res) => {
		const postData = {
			name: req.body.name,
			cost: req.body.cost,
			tags: req.body.tags ? ['all', ...req.body.tags] : ["all"]
		}

		try {
			const newGood = await GoodModel.create({ 
				name: postData.name, 
				cost: postData.cost,
				image: null,
				tags: postData.tags
			});

			console.log('newGood', newGood)

			res.json({
				status: 'success',
				data: newGood
			})
		} catch (e) {
			console.log(e)
	
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}
	}
}

module.exports = Good