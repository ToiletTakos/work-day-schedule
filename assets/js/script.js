var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("time");

// get current time
var time = moment();

// display current time in day of the week, month, date number then current time followed by am or pm
$(currentDay).text(moment(time).format('dddd, MMMM Do h:mm:ss a'));

//set all inputs into localStorage
//nine
function saveNine() {
    var nine = document.getElementById("nine").value;
    localStorage.setItem("timeNine", nine);
}
//ten
function saveTen() {
    var ten = document.getElementById("ten").value;
    localStorage.setItem("timeTen", ten);
}
// eleven
function saveEleven() {
    var eleven = document.getElementById("eleven").value;
    localStorage.setItem("timeEleven", eleven);
}
// twleve
function saveTwelve() {
    var twelve = document.getElementById("twelve").value;
    localStorage.setItem("timeTwelve", twelve);
}
//one
function saveOne() {
    var one = document.getElementById("one").value;
    localStorage.setItem("timeOne", one);
}
// two
function saveTwo() {
    var two = document.getElementById("two").value;
    localStorage.setItem("timeTwo", two);
}
// three
function saveThree() {
    var three = document.getElementById("three").value;
    localStorage.setItem("timeThree", three);
}
// four
function saveFour() {
    var four = document.getElementById("four").value;
    localStorage.setItem("timeFour", four);
}
// five
function saveFive() {
    var five = document.getElementById("five").value;
    localStorage.setItem("timeFive", five);
}

//Function to recall anything saved in localStorage

//nine
function getNine(){
    var returnNine = localStorage.getItem("timeNine");

    document.getElementById('nine').value = returnNine;

    var nineColour = document.getElementById("nine")
    

    var time = moment().set("hour", 9);
    if(moment().isBefore(time)) {
        $(nineColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(nineColour).addClass("present");
    }
    else {
        $(nineColour).addClass("past")
    }
}

//ten
function getTen(){
    var returnTen = localStorage.getItem("timeTen");

    document.getElementById('ten').value = returnTen;

    var tenColour = document.getElementById("ten")
    

    var time = moment().set("hour", 10);
    if(moment().isBefore(time)) {
        $(tenColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(tenColour).addClass("present");
    }
    else {
        $(tenColour).addClass("past")
    }
}

// eleven
function getEleven(){
    var returnEleven = localStorage.getItem("timeEleven");

    document.getElementById('eleven').value = returnEleven;

    var elevenColour = document.getElementById("eleven")
    

    var time = moment().set("hour", 11);
    if(moment().isBefore(time)) {
        $(elevenColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(elevenColour).addClass("present");
    }
    else {
        $(elevenColour).addClass("past")
    }
}

// twelve
function getTwelve(){
    var returnTwelve = localStorage.getItem("timeTwelve");

    document.getElementById('twelve').value = returnTwelve;

    var twelveColour = document.getElementById("twelve")
    

    var time = moment().set("hour", 12);
    if(moment().isBefore(time)) {
        $(twelveColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(twelveColour).addClass("present");
    }
    else {
        $(twelveColour).addClass("past")
    }
}

//one
function getOne(){
    var returnOne = localStorage.getItem("timeOne");

    document.getElementById('one').value = returnOne;

    var oneColour = document.getElementById("one")
    

    var time = moment().set("hour", 13);
    if(moment().isBefore(time)) {
        $(oneColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(oneColour).addClass("present");
    }
    else {
        $(oneColour).addClass("past")
    }
}

// two
function getTwo(){
    var returnTwo = localStorage.getItem("timeTwo");

    document.getElementById('two').value = returnTwo;

    var twoColour = document.getElementById("two")
    

    var time = moment().set("hour", 14);
    if(moment().isBefore(time)) {
        $(twoColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(twoColour).addClass("present");
    }
    else {
        $(twoColour).addClass("past")
    }
}

// three
function getThree(){
    var returnThree = localStorage.getItem("timeThree");

    document.getElementById('three').value = returnThree;

    var threeColour = document.getElementById("three")
    

    var time = moment().set("hour", 15);
    if(moment().isBefore(time)) {
        $(threeColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(threeColour).addClass("present");
    }
    else {
        $(threeColour).addClass("past")
    }
}

// four
function getFour(){
    var returnFour = localStorage.getItem("timeFour");

    document.getElementById('four').value = returnFour;

    var fourColour = document.getElementById("four")
    

    var time = moment().set("hour", 16);
    if(moment().isBefore(time)) {
        $(fourColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(fourColour).addClass("present");
    }
    else {
        $(fourColour).addClass("past")
    }
}

// five
function getFive(){
    var returnFive = localStorage.getItem("timeFive");

    document.getElementById('five').value = returnFive;

    var fiveColour = document.getElementById("five")
    

    var time = moment().set("hour", 17);
    if(moment().isBefore(time)) {
        $(fiveColour).addClass("future");
    }
    else if(moment().isSame(time)) {
        $(fiveColour).addClass("present");
    }
    else {
        $(fiveSColour).addClass("past")
    }
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