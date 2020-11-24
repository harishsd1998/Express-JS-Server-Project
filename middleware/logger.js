const moment = require('moment')

// middleware function
//next is used so that next middleware function can be used in the stack
const logger = (req, res, next) => {
   
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
    next()
}
// Moment is a third party package which deals with dates.
//INIT MIddleware
//app.use(logger)
// So everytime, I make a request the middleware function gonna run. 
module.exports = logger;