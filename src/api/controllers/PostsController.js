const PostsService = require('../services/PostsService')

class PostsController {
  async getAll(request, response) {
    try {
        return await response.status(200).json(await PostsService.getAll)
    } catch (error) {
        return await response.status(500).json(JSON.stringify(error))
    }
  }

}

module.exports = new PostsController()