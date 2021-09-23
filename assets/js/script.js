var currentDay = document.getElementById("currentDay");
var taskEntry = document.getElementById("task-entry");


var time = moment();

$(currentDay).text(moment(time).format('dddd, MMMM Do: h:mm:ss a'));
