//Implementation of express

const express = require('express')

const bodyParser = require('body-parser')

const dbLib = require('./db.js')


let auth = {
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432};
  
  
const db = new dbLib(auth);



const restPort = 3000;
const graphPort = 3001;

let rest = routeAPI(restPort);

let graph = routeAPI(graphPort);

/*
restApp.use(bodyParser.json())

restApp.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
*/



