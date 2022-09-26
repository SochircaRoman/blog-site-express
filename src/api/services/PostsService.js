const PostsRepository = require('../../database/repositories/PostsRepository')

class PostsService {
  async getAll(fields = undefined) {
      return await PostsRepository.getAll(fields)
  }
}

module.exports = new PostsService()