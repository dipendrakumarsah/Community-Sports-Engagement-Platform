const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');


const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/authRoute'))
app.use('/api/auth', require('./routes/userAuth'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/teams', require('./routes/teamRoutes'));
app.use('/api/suggestions', require('./routes/suggestionRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
