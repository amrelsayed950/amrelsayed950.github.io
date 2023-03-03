document.getElementById("taskList").value ="";
var taskList = window.localStorage.getItem('taskList');
document.getElementById("taskList").value = taskList;

function addTask(){
    var inputVal = document.getElementById("task").value;
    var listOfTasks = document.getElementById("taskList").value;

    if(document.getElementById("taskList").value.length == 0)
        document.getElementById("taskList").value =inputVal;
    else
        document.getElementById("taskList").value = listOfTasks+"\n"+inputVal;
    
    document.getElementById("task").value ="";

    window.localStorage.setItem('taskList', document.getElementById("taskList").value);
}

function clearTasks(){
    document.getElementById("taskList").value ="";
    window.localStorage.removeItem('taskList');

}