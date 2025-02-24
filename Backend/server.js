const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/members', require('./routes/memberRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/issuances', require('./routes/issuanceRoutes'));

// Default route
app.get('/', (req, res) => {
  res.send('Library Management API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
