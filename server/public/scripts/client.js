console.log('js');
const toDoApp = angular.module('toDoApp', []);
toDoApp.controller('TaskController', function ($http) {
    let vm = this;
    vm.taskToDo = [];

    //POST
    vm.sendTask = function () {
        let newTask = {
            task: vm.taskIn,
            task_completed: vm.taskCompleted
        }
        console.log(newTask);
        $http({
            method: 'POST',
            url: '/tasks',
            data: newTask
        }).then(function (response) {
            console.log('received the new task', response.data);
            getTasks();
        }).catch(function (error) {
            alert('unable to add new task')
            console.log(error);
        })
    }

    //GET
    function getTasks() {
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function (response) {
            console.log('back from server with:', response.data);
            vm.taskToDo = response.data
        }).catch(function (error) {
            alert('unable to get tasks', error);
            console.log('error with angular request', error);
        })
    }

    //PUT
    vm.taskCompleted = function (taskId) {
        $http({
            method: 'PUT',
            url: '/tasks/' + taskId
        }).then(function (response) {
            getTasks();
        }).catch(function (response) {
            console.log('unable to complete task', error);
            alert('unable to complete task', error);
        })
    }

    //DELETE
    vm.deleteTask = function (taskId) {
        $http({
            method: 'DELETE',
            url: '/tasks/' + taskId
        }).then(function (response) {
            console.log('task deleted');
            getTasks();
        }).catch(function (response) {
            console.log('task is not deleted', error);
            alert('task is not deleted', error);
        })
    }

    getTasks();

})









