const { Post } = require('../models');

const postdata = [
    {
        title: 'A little pick-me-up for a bad day',
        post_url: 'https://www.youtube.com/watch?v=1k8craCGpgs',
        user_id: 3
    },
    {
        title: 'Never stop believing in yourself!',
        post_url: 'https://www.youtube.com/watch?v=1k8craCGpgs',
        user_id: 5
    },
    {
        title: 'MVC to save the day',
        post_url: 'https://www.youtube.com/watch?v=1k8craCGpgs',
        user_id: 3
    },
    {
        title: 'I hate you, I love you',
        post_url: 'https://www.youtube.com/watch?v=1k8craCGpgs',
        user_id: 1
    },
    {
        title: 'Forever Young',
        post_url: 'https://www.youtube.com/watch?v=1k8craCGpgs',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;