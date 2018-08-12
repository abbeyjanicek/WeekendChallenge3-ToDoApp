console.log('js');
const toDoApp = angular.module('toDoApp', []);
toDoApp.controller('TaskController', function ($http) {
    let vm = this;
    vm.taskToDo = [];

    vm.sendTask = function () {
        let newTask = {
            task: vm.taskIn,
        }
        console.log(newTask);

    }











})
