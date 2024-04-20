const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoutes = require('./routes/AdminRoutes');
const parentsRoutes = require('./routes/ParentsRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/school-management-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/parents', parentsRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

