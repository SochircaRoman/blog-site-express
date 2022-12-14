# Project name: Blog site

# Project description:
This is the backend and frontend part of a blog site written in Express.js a framework of Node.js and VueJS using for frontend

In this project are used MEVN stack:
- Node/Express
- MongoDB
- VueJS

Dependences:
- Mongoose
- Nodemon
- Dotenv

# Entities:

## User
```
{
  userId: int(PK, autoincrement),
  username: string(required, min: 5: max: 50),
  password: int(required, min: 5 max: 20),
  admin_root: boolean(optional)
}
```
## Post
```
{
  postId: int(PK, autoincrement),
  title: string(required, min: 5: max: 150),
  description: string(required, min: 100: max: 5000),
  author: string(required, min: 5: max: 50),
  image: string(required, path to file),
  userId: int(required, FK to userId)
}
```
## Tag
```
{
  tagId: int(PK, autoincrement),
  tag: string(required, min: 5: max: 50),
  postId: int(required, FK to postId)
}
```
## Example: https://ibb.co/kqD8Bwc

## Custom endpoints
+ Find post by name
+ Find post by tags
+ Get all posts
+ Get all users

## CRUD methods
+ Create a post
+ Get all posts
+ Update post
+ Delete post

## Custom endpoints
+ Get posts by tag
+ Get post by title

## User authentification
+ The users can be authenticated using username and password.
+ The users will have 2 groups: admin and simple users

## Working with files
Example: Every post entity will contain one image.

Must be implemented the following functionalities>
+ Upload cover image
+ Delete cover image
