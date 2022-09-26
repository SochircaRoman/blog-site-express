const Router = require("express");
const router = new Router();

const controller = require('../controllers/PostsController')

router.get('/', controller.getAll);

module.exports = router