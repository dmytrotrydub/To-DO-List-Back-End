const environment = process.env.NODE_ENV || 'environment';
const config = require('../knexfile')[environment];
const db = require('knex')(config);
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

module.exports.postToDoItem = async (req, res) => {
  if (!req.body) {
    res.json({ error: 'No data had been received' }).status(400);
  }
  // Assigning an id to a new to-do task
  const taskId = uuidv4();
  console.log(req.body);
  //Object to post to a database
  const toDoItem = {
    id: taskId,
    Description: req.body.Description,
  };

  //Talking to a database to post a new task
  try {
    await db('toDoList').insert(toDoItem);
  } catch (err) {
    console.log(err);
  }

  res.json(`To-do item posted :${toDoItem}`).status(200);
};

module.exports.getToDoItemsList = async (req, res) => {
  const listToReturn = await db('toDoList').select('id', 'Description', 'updated_at');

  // Setting start point for each task's timer

  listToReturn.forEach((toDoItem) => {

    const today = new Date();
    const dateStartTime = new Date(toDoItem.updated_at);
    const diffTime = today - dateStartTime;
    const days = Math.floor(diffTime / 86400000);
    const hours = Math.floor((diffTime % 86400000) / 3600000);
    const mins = Math.round(((diffTime % 86400000) % 3600000) / 60000);
    
    toDoItem.timerStart = {
      daysElapsed: days,
      hoursElapsed: hours,
      minutesElapsed: mins
    }
  });

  res.json(listToReturn).status(200);
};
