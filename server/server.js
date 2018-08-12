const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoURI = 'mongodb://localhost:27017/tasks';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: { type: String }
    //task_completed: { type: Boolean }
});

const Tasks = mongoose.model('Tasks', TaskSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('server/public'));

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on('open', () => {
    console.log('connected to Mongo');
});
mongoose.connection.on('error', (error) => {
    console.log('did not connect to Mongo', error);
});

//POST
app.post('/tasks', (req, res) => {
    console.log('POST to /tasks req.body:', req.body);
    const taskFromClient = req.body;
    const taskToAdd = new Tasks(taskFromClient);
    taskToAdd.save().then(() => {
        console.log('task added', taskToAdd);
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

//GET
app.get('/tasks', (req, res) => {
    console.log('GET /tasks');
    Tasks.find({}).then((foundNewTasks) => {
        res.send(foundNewTasks);
    })
});







app.listen(PORT, () => {
    console.log('listening on port', PORT);
})