var express = require('express')
var sequelize = require('./models/index').sequelize;

var app = express();

sequelize.sync();

// app.get("/",hi)

let test = async() =>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }  
  }
// console.log(sequelize)
test()

app.listen(5000)