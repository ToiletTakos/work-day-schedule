var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("time");

// get current time
var time = moment();

// display current time in day of the week, month, date number then current time followed by am or pm
$(currentDay).text(moment(time).format('dddd, MMMM Do h:mm:ss a'));

//set all inputs into localStorage
function saveNine() {
    var nine = document.getElementById("nine").value;
    localStorage.setItem("timeNine", nine);
}
function saveTen() {
    var ten = document.getElementById("ten").value;
    localStorage.setItem("timeTen", ten);
}
function saveEleven() {
    var eleven = document.getElementById("eleven").value;
    localStorage.setItem("timeEleven", eleven);
}
function saveTwelve() {
    var twelve = document.getElementById("twelve").value;
    localStorage.setItem("timeTwelve", twelve);
}
function saveOne() {
    var one = document.getElementById("one").value;
    localStorage.setItem("timeOne", one);
}
function saveTwo() {
    var two = document.getElementById("two").value;
    localStorage.setItem("timeTwo", two);
}
function saveThree() {
    var three = document.getElementById("three").value;
    localStorage.setItem("timeThree", three);
}
function saveFour() {
    var four = document.getElementById("four").value;
    localStorage.setItem("timeFour", four);
}
function saveFive() {
    var five = document.getElementById("five").value;
    localStorage.setItem("timeFive", five);
}

//Function to recall anything saved in localStorage
function getNine(){
    var returnNine = localStorage.getItem("timeNine");

    document.getElementById('nine').value = returnNine;
    document.getElementById('nine').className("present")
}
function getTen(){
    var returnTen = localStorage.getItem("timeTen");

    document.getElementById('ten').value = returnTen;
}
function getEleven(){
    var returnEleven = localStorage.getItem("timeEleven");

    document.getElementById('eleven').value = returnEleven;
}
function getTwelve(){
    var returnTwelve = localStorage.getItem("timeTwelve");

    document.getElementById('twelve').value = returnTwelve;
}
function getOne(){
    var returnOne = localStorage.getItem("timeOne");

    document.getElementById('one').value = returnOne;
}
function getTwo(){
    var returnTwo = localStorage.getItem("timeTwo");

    document.getElementById('two').value = returnTwo;
}
function getThree(){
    var returnThree = localStorage.getItem("timeThree");

    document.getElementById('three').value = returnThree;
}
function getFour(){
    var returnFour = localStorage.getItem("timeFour");

    document.getElementById('four').value = returnFour;
}
function getFive(){
    var returnFive = localStorage.getItem("timeFive");

    document.getElementById('five').value = returnFive;
}

// Display what was stored in localStorage
getNine();
getTen();
getEleven();
getTwelve();
getOne();
getTwo();
getThree();
getFour();
getFive();


/*function colour(){

    var time = moment().set("hour", 9);
    if(moment().isBefore(time)) {
        $(ten).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(ten).addClass("present");
    }
    else {
        $(ten).addClass("past")
    }
}*/