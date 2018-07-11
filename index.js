const skygearCloud = require("skygear/cloud");
const request = require('request');

/*
  Docs:
    https://docs.skygear.io/js/reference/latest/variable/index.html#static-variable-pool
*/


skygearCloud.handler('hello', (req) => {
  return {message: "hello"};
}, {
  userRequired: false
});