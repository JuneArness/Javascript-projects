
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper" , 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
}

var new_Person=new Person("David","Banner",18);
function count_Function () {
    document.getElementById("Counting").innerHTML = Count ();
   
    
}
function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
}
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not eligible to vote":"You can vote";
    document.getElementById("Vote").innerHTML = Can_vote = " to vote.";
    
}