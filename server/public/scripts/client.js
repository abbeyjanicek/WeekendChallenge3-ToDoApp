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
        $http({
            method: 'POST',
            url:'/tasks',
            data: newTask
        }).then(function(response){
            console.log('received the new task', response.data);
        }).catch(function(error){
            alert('unable to add new task')
            console.log(error);            
        })
    }











})
