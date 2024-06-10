
const express = require('express');
const bodyParser = require('body-parser');
const companyRouter = require('./routes/companies');
const cors = require('cors'); // Import the cors middleware

const app = express();

app.use(bodyParser.json());
// Use cors middleware
// Allow only requests from http://example.com
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.use('/companies', companyRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
