const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars')
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false})); // For handling form submission.
//In order to avoid keeping separate routes, express comes with a functionality to make
// static folder and Headers, I am making the public folder as Static.

//Homepage Route
app.get('/',(req,res) => res.render('index',{title:'Member App', members})
);

app.use(express.static(path.join(__dirname,'public')));
// Members API Routes
app.use('/api/members',require('./routes/api/members'));
const PORT = process.env.PORT || 5000
// Because when I deploy this, the server does not mandatorily run on 5000 PORT.  
// So,the environment variable port is checked and if not available then PORT 5000 is used.

app.listen(PORT , ()=> console.log(`Server started on port ${PORT}`));

// '/' is the route for the index page.

//Middle Ware
// They are functions which have access to request and response. ie., we can change and add things.

//Router Functionality
// We can use router that comes with express to put all of our routes into a single file
