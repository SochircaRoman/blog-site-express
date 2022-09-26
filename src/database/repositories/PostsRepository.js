const Post = require('../models/Post')

class PostsRepository {
  async getAll(fields = undefined) {
      return await Post.findAll({attributes: fields})
  }
}

module.exports = new PostsRepository()