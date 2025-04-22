const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const ideaRoutes=require('./routes/ideaRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', ideaRoutes);

mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
}).catch(err => console.error('MongoDB connection error:', err));
app.get('/', (req, res) => {
    res.send('Welcome to the Idea Logger API - Use /api/ideas to add and get ideas best of Luck with your project testing ');
  });
  