
const { GroupModel, GoodModel } = require('../models');

class Group {

	// Получаем все группы
	// TODO: В дальнейшем будет пагинация
	getAll = async (req, res) => {
		try {
			const groups = await GroupModel.findAll({
				include: [{		// вместе с товарами
					model: GoodModel
				}]
			})

			res.json({
				status: 'success',
				data: groups
			})
		} catch (e) {
			console.log(e)
	
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}
	}

	getById = async (req, res) => {
		const groupId = req.params.id;

		try {
			// const findedGroup = await GroupModel.findByPk(groupId);
			const findedGroup = await GroupModel.findOne({
				where: {
					_id: groupId
				},
				include: [
					{
						model: GoodModel,
						// attributes: ['_id', 'name', 'cost', 'image', 'tags', 'createdAt', 'updatedAt'],
						// as: 'goods',	// Всякие возможности
						// where: {isDelete: false} // ticket object will be blank if comment not found; 
					}
				],
				// attributes: ['ticketId', 'ticketNumber', 'title', 'description', 'type', 'severity', 'status', 'userId'],
			});

			res.json({
				status: 'success',
				data: findedGroup
			})
		} catch (e) {
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}
	}

	// Создаём группу, а если есть товары, то сразу добавляем их в созданную группу
	create = async (req, res) => {
		try {
			const postData = {
				name: req.body.name,
				goods: req.body.goods
			}

			const newGroup = await GroupModel.create({ 
				name: postData.name
			});

			// И это работает. Также доступны методы addGood, setGood, hasGood, removeGood, createGood, countGood
			// hasGoods, addGoods, setGoods, removeGoods
			// const newGood = await newGroup.createGood({
			// 	name: 'test', 
			// 	cost: 777,
			// 	image: null,
			// 	tags: ["test"]
			// })

			postData.goods && await newGroup.addGoods(postData.goods)

			// console.log(newGood)

			res.json({
				status: 'success',
				data: newGroup
			})
		} catch (e) {
			console.log(e)
	
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}
	}

	// Обновляем данные группы (name)
	update = async (req, res) => {
		const groupId = req.body.groupId;
		const name = req.body.name;

		try {
			const findedGroup = await GroupModel.findByPk(groupId);		// поиск по первичному ключу
			if (findedGroup) {
				const updatedGroup = await findedGroup.update({
					name
				});

				return res.json({
					status: 'success',
					data: updatedGroup
				})
			}

			res.status(404).json({
				status: 'error',
				message: `Группа не найдена`
			})

		} catch (e) {
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}
	}

	// Удаляем группу и связанные товары из таблицы связей GroupGoods
	remove = async (req, res) => {
		const groupId = req.body.groupId;

		try {
			const findedGroup = await GroupModel.findByPk(groupId);

			if (findedGroup) {
				await findedGroup.destroy()		// удаляет
					
				return res.json({
					status: 'success'
				})
			}

			res.status(404).json({
				status: 'error',
				message: `Группа не найдена`
			})

		} catch (e) {
			res.status(400).json({
				status: 'error',
				message: `Самсинг вент ронг`
			})
		}


	}

	// Добавляем товар в группу
	addGoods = async (req, res) => {
		const postData = {
			groupId: req.body.groupId,
			goods: req.body.goods		// массив goodId-шек
		}

		try {
			const findedGroup = await GroupModel.findByPk(postData.groupId);
			// await findedGroup.addGood(postData.goodId)
			await findedGroup.addGoods(postData.goods)

			res.json({
				status: 'success',
			})
	
		} catch (e) {
			res.status(400).json({
				status: 'error',
				message: 'Ошибка'
			})
		}
	}

	// Удаляем товар из группы
	removeGoods = async (req, res) => {
		const postData = {
			groupId: req.body.groupId,
			goods: req.body.goods
		}

		try {
			const findedGroup = await GroupModel.findByPk(postData.groupId);
			await findedGroup.removeGoods(postData.goods);

			res.json({
				status: 'success',
			})
	
		} catch (e) {
			res.status(400).json({
				status: 'error',
				message: 'Ошибка'
			})
		}
	}
}

module.exports = Group;






















