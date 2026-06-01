const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes connections linked to version namespacing
app.use('/api/v1/auth', require('./src/routes/authRoutes'));
app.use('/api/v1/tasks', require('./src/routes/taskRoutes'));

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'API Route requested does not exist' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚙️  Runtime cluster running on port ${PORT}`));
