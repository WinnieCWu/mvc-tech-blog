const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is amazing!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Where did you get that?',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Hi there!',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Where did you go?',
    user_id: 9,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;