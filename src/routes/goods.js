const express = require('express');
const { GoodController } = require('../controllers');

const goodsRoutes = express.Router();

const goodCtrl = new GoodController;

// goodsRoutes.get('/', feedController.getAll);
// goodsRoutes.get('/:id', feedController.getSingle);
goodsRoutes.get('/', goodCtrl.getAll);
// goodsRoutes.get('/:groupId', goodCtrl.getByGroup);
goodsRoutes.post('/create', goodCtrl.create);
// goodsRoutes.post('/update', [checkAuth, checkAuthorRole], feedController.update);

module.exports = goodsRoutes