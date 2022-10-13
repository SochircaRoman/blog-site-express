const User = require('../models').User

class UsersRepository {
    async getAllUsers(fields = undefined) {
        return await User.findAll({attributes: fields})
    }

    async getUser(id) {
        return await User.findByPk(id)
    }

    async updateUser(id, user) {
      //const existingUser = await User.findByPk(id)
      return await id.update(user);
    }

    async updateAdminRoot(id, admin_root) {
      //const existingUser = await User.findByPk(id)
      return await id.update({ admin_root: admin_root });
    }

    async deleteUser(id) {
        return await User.destroy({
            where: { id: id }
        })
    }
}

module.exports = new UsersRepository()