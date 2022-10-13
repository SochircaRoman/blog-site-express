const Router = require("express");
const router = new Router();

const controller = require('../controllers/UsersController')

router.get('/', controller.getAllUsers)
router.get('/:id', controller.getUser)
router.patch('/:id', controller.updateUser)
router.patch('/:id/root', controller.updateAdminRoot)
router.delete('/:id', controller.deleteUser);

router.get('/:id/posts', controller.getUserPosts)

module.exports = router