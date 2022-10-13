const Post = require('../models/Post')

class PostsRepository {
  async getAll(fields = undefined) {
      return await Post.findAll({attributes: fields})
  }

  async getUserPosts(id, fields = undefined) {
    return await Post.findAll({
        where: { id: id },
        attributes: fields
    })
  }
}

module.exports = new PostsRepository()