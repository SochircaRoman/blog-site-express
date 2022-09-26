const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {
  async getAll() {
      return await PostsRepository.getAll()
  }
}

module.exports = new PostsService()