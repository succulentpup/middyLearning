'use strict';
const middy = require('middy');
const { jsonBodyParser } = require('middy/middlewares');

const testMiddleWare = () => {
    return ({
        before: (err, next) => {
            console.log('testMiddleware() is called');
            return next();
        }
    });
};

const main = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully! Good Job',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.handler =  middy(main)
    .use(jsonBodyParser())
    .use(testMiddleWare());
