console.log('js');
const toDoApp = angular.module('toDoApp', []);
toDoApp.controller('TaskController', function ($http) {
    let vm = this;
    vm.taskToDo = [];

    //POST
    vm.sendTask = function () {
        let newTask = {
            task: vm.taskIn,
            task_completed: vm.taskCompleted,
            when_to_schedule: vm.whenToSchedule
        }
        console.log(newTask);
        $http({
            method: 'POST',
            url: '/tasks',
            data: newTask
        }).then(function (response) {
            console.log('POST/ received the new task: ', response.data);
            getTasks();
            vm.taskIn = ''; //include in here so it does not clear field if not succcessful
        }).catch(function (error) {
            alert('unable to add new task: ', error)
            console.log(error);
        })
    }

    //GET
    function getTasks() {
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function (response) {
            console.log('GET/ back from server with: ', response.data);
            vm.taskToDo = response.data
        }).catch(function (error) {
            alert('unable to get tasks: ', error);
            console.log('error with angular request: ', error);
        })
    }

    //PUT
    vm.taskCompleted = function (taskId) {
        $http({
            method: 'PUT',
            url: '/tasks/' + taskId
        }).then(function (response) {
            console.log('PUT/ task completed');
            getTasks();
        }).catch(function (response) {
            console.log('unable to complete task: ', error);
            alert('unable to complete task: ', error);
        })
    }

    //DELETE
    vm.deleteTask = function (taskId) {
        $http({
            method: 'DELETE',
            url: '/tasks/' + taskId
        }).then(function () {
            deleteAlert();
        }).then(function (response) {
                console.log('DELETE/ task deleted');
                getTasks();
            }).catch(function (response) {
                console.log('task is not deleted: ', error);
                alert('task is not deleted: ', error);
            })
    }

    function deleteAlert() {
        swal({
            title: "are you sure?",
            text: "once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("your task has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("your task is still on your to-do list!");
                }
            });
    }
    getTasks();

})









