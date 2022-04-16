const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// 11 base fake users
const userdata = [
    {
        username: 'tinkerbell',
        email: 'tinkerbell@aol.com',
        password: 'pw123'
    },
    {
        username: 'musicl0v3r',
        email: 'musicl0v3r@mail.com,
        password: 'pw123'
    },
    {
        username: 'oodlesnoodles',
        email: 'noodles@aol.com',
        password: 'pw123'
    },
    {
        username: 'dailybeliever',
        email: 'believer@aol.com',
        password: 'pw123'
    },
    {
        username: 'dancemaster',
        email: 'dancemaster@aol.com',
        password: 'pw123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;