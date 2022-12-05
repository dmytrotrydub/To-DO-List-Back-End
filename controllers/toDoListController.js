const environment = process.env.NODE_ENV || 'environment';
const config = require('../knexfile')[environment];
const db = require('knex')(config);
const { v4: uuidv4 } = require('uuid');

module.exports.postToDoItem = async (req, res) => {
  console.log(typeof(req.body.Description));
  if (!req.body) {
    res.json({ error: 'No data had been received' }).status(400);
  }
// Assigning an id to a new to-do task 
    const taskId = uuidv4()
    console.log(taskId);
  //Object to post to a database
  const toDoItem = {
    id: taskId,
    Description: req.body.Description,
  };
    console.log(toDoItem.Description);

  //Talking to a database to post a new task
  try {
    await db('toDoList').insert(toDoItem);
  } catch (err) {
    console.log(err);
  }
    
    res.json(`To-do item posted :${toDoItem}`).status(200);
};
