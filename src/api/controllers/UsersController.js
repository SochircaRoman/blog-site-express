const UsersService = require('../services/UsersService');

class UsersController{
  async getAllUsers(request, response){
      try{
          return await response.status(200).json(await UsersService.getAllUsers([
              'id',
              'username',
              'password',
              'email',
              'admin_root'
          ]))
      } catch(error){
          return await response.status(500).json(JSON.stringify(error))
      }
  }

  async getUser(request, response){
      try{
          const user = await UsersService.getUser(request.params.id)
          if(!user){
              return response.status(404).json({ error: "No user found with that id" })
          }
          return response.status(200).json({ message: "User successfully found", user: user})
      } catch(error){
          return response.status(500).json(JSON.stringify(error))
      }
  }

  async updateUser(request, response){
      try{
          const { username="", password="", email="" } = request.body
          if (!username && !password && !email) {
              return response.status(404).json({message: "Nothing to update"});
          }
          const user = await UsersService.getUser(request.params.id)
          if(!user){
              return response.status(404).json({ error: "No user found with that id" })
          }
          return response.status(200).json(await UsersService.updateUser(request.params.id, request.body));
      } catch(error){
          return response.status(500).json(JSON.stringify(error))
      }
  }

  async updateAdminRoot(request, response) {
    try {
         const { admin_root } = request.body
         if (!admin_root) {
             return response.status(404).json({ error: "Id or admin_root not present" })
         }
         return response.status(200).json(await UsersService.updateAdminRoot(request.params.id, admin_root));
    } catch (error) {
        return response.status(500).json(JSON.stringify(error))
    }
  }

  async deleteUser(request, response){
      try{
          const deletedUser = await UsersService.deleteUser(request.params.id)
          if (!deletedUser) {
            return response.status(404).json({ error: "No user found with that id" })
          }
          return response.status(204).json({ message: "Succes", user: deletedUser  })
      } catch(error){
          return response.status(500).json(JSON.stringify(error))
      }
  }

  async getUserPosts(request, response){
      try{
          const user = await UsersService.getUser(request.params.id)
          if (!user) {
            return response.status(404).json({ error: "No user found with that id" })
          }
          return response.status(200).json(await UsersService.getUserPosts(
              request.params.id, 
              ['id', 'title', 'description', 'author', 'image', 'date']
          ))
      } catch(error){
          return response.status(500).json(JSON.stringify(error))
      }
  }
}

module.exports = new UsersController()