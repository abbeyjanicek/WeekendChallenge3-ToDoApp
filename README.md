# WeekendChallenge3-ToDoApp



-Whenever a task is created the front end should refresh to show all tasks that need to be completed.
-When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. ng-class will come in handy!)
-Whether or not a task is complete should also be stored in the database.

-Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:

    -Background color of the page
    -  font family and size
    -text color &/or background color of tasks to show whether or not they have been completed

## Built With

List technologies and frameworks here

## Getting Started
[x]  Install node/express, spin up server.
[x]  Set up Mongo/Mongoose.

CLIENT: HTML:
[x]  Create a header.
[x]  Create a footer.
[x]  Input field: "enter new task here"
[x]  Dropdown menu: Today, Future
[x]  Button: "let's do this!"
[x]  Table 1: 
    [x]  heading: "Today" 
    [x]  3 TH: "completed", "task", "delete";
    [x]  checkbox: "completed"
    [x]  text: "task"
    [x]  button: "delete"
[x]  Table 2:
    [x]  headin: "Future"
    [x]  3 TH: "move", "task", "delete";
    [?]  button: "move"
    [x]  text: "task"
    [x]  button: "delete"

CLIENT: ANGULARJS on HTML:
[x]  set up app
[x]  set up controller
[x]  ng-submit: form
[x]  ng-model: input, select
[x]  ng-click: delete buttons
[]  ng-repeat: tr of tbody

CLIENT: JS:
[x]  1. POST req to SERVER: function: send newTask to server
[x]  2. GET req to SERVER: function: get taskToDo array
[x]  3. DELETE req to SERVER: function: deleteTask
[]  4. PUT req to SERVER: function completeTask

SERVER: JS:
[x]  1. POST res to CLIENT: return: newTask
[x]  1. POST req to DB: newTask added to taskToDo array 
[x]  2. GET req to DB: get taskToDo array 
[x]  2. GET res to CLIENT: taskToDo array 
[x]  3. DELETE req to DB: find task ID and remove
[x]  3. DELETE res to CLIENT: task deleted
[]  4. PUT req to DB: find task by ID and update
[]  4. PUT res to CLIENT: task completed

DATABASE: MONGO:
[x]  1. POST res to SERVER: sendStatus(200)
[x]  2. GET res to SERVER: send array 
[x]  3. DELETE res to server: array updated with task deleted
[]  4. PUT res to SERVER: array updated with task completed

DEBUG:
-page needs to be refreshed to show data in table



### Installing

Steps to get the development environment running.

1. Download this project.
2. `npm install`
3. `npm start`

And so on...

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Feature a
- [x] Feature b

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Feature c
