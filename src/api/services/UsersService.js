const UsersRepository = require('../../database/repositories/UsersRepository')
const PostsRepository = require('../../database/repositories/PostsRepository')

class UsersService {
    async getAllUsers(fields = undefined) {
        return await UsersRepository.getAllUsers(fields)
    }

    async getUser(id) {
        return await UsersRepository.getUser(id)
    }

    async updateUser(id, user) {
      return await UsersRepository.updateUser(id, user);
    }

    async updateAdminRoot(id, admin_root) {
        return await UsersRepository.updateAdminRoot(id, admin_root);
    }

    async deleteUser(id) {
        return await UsersRepository.deleteUser(id)
    }

    async getPosts(id, fields) {
        return await PostsRepository.getAllOfUser(userId, fields);
    }
}

module.exports = new UsersService()