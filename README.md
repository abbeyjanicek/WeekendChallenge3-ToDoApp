# WeekendChallenge3-ToDoApp

One Paragraph of project description goes here. Link to the live version of the app if it's hosted on Heroku.

## Built With

List technologies and frameworks here

## Getting Started

Using AngularJS, create a front end experience that allows a user to create a task.
HTML:
[x]  Create a header.
[x]  Create a footer.
[x]  Input field: "enter new task here"
[x]  Dropdown menu: Today, Future
[x]  Button: "let's do this!"
[]  Table 1: 
    []  label: "Today" 
    []  3 TH: "completed", "task", "delete";
    []  checkbox: "completed"
    []  text: "task"
    []  button: "delete"
[]  Table 2:
    []  label: "Future"
    []  3 TH: "move", "task", "delete";
    [?] button: "move"
    []  text: "task"
    []  button: "delete"


-When the task is created, it should be stored inside of a database (MongoDB)
-Whenever a task is created the front end should refresh to show all tasks that need to be completed.
-Each task should have an option to 'Complete' or 'Delete'.
-When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. ng-class will come in handy!)
-Whether or not a task is complete should also be stored in the database.
-Deleting a task should remove it both from the Front End as well as the Database.
-Include a README.md with your project (template).
-We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Think through your Schema for Mongoose and how you will structure your data. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:

Background color of the page
font family and size
text color &or background color of tasks to show whether or not they have been completed

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
