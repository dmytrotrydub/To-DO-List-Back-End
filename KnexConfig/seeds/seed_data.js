require('dotenv').config();
// const dummyUsers = require('../seedData/users/dummyUsers');
const toDoList = require('../seedData/toDoList')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex('todoList')
    .del()
    .then(function () {
      return knex('todoList').insert(toDoList);
    })

};
