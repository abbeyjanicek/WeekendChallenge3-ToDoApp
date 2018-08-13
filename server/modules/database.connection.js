const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tasks';

mongoose.connect(mongoURI, { useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('connected to Mongo');
});
mongoose.connection.on('error', (error) => {
    console.log('did not connect to Mongo', error);
});

module.exports = mongoose;