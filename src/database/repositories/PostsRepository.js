const Post = require('../models/Post')

class PostsRepository {
  async getAll() {
      return await Post.findAll()
  }
}

module.exports = new PostsRepository()