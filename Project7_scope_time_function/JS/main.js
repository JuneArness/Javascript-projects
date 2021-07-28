x = 10;

function error_function() {
    var Y = 5;
    console.log(Z)
    return Y+Z;
    
}

if (1 < 2) {
    document.write("The left number is smaller thsn the number on the right.")
}

function get_date() {
    if(new Date().getHours() < 18) {
        document,getElementById("Greeting").innerHTML = "How are you today?";
            }
}

function age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

error_function()