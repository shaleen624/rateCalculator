const express = require('express');
//const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const routes = require('./routes');
dotenv.config(); // Load environment variables from .env file
const connectDB = require('./config/database');

connectDB();

const app = express();

//app.use(express.static('../frontend/dist/rate-calculator-app'))
//app.use(express.static('rate-calculator-app'))
// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:4200',
    'http://dev.rc.fluffpandastore.com/',
    'https://dev.rc.fluffpandastore.com/',
    'http://rc.fluffpandastore.com/',
    'https://rc.fluffpandastore.com/']
}));
app.use(helmet());
app.use(morgan('combined'));

// Routes
app.use('/', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


