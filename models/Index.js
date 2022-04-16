const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

Comment.belongsTo(User, {
    foreign_key:'user_id'
});

Comment.belongsTo(Post, {
    foreignKEy: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
  
module.exports = { User, Post, Comment};