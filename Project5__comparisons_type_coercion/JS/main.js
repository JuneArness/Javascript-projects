function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test").innerHTML = isNaN('This is a string');
    document.getElementById("Test").innerHTML = isNaN('007');
    document.write(2E310);
    document.write(-3E310);
    document.write(10>2);
    document.write(10<2);
    console.log(2+2);
    document.write(10==10);
    document.write(3==10);
}
   var a = "10";
   var b = parseInt(a)
   document.write("value is" + b);
   let X= 10;
   let Y= 10;
    document.write(X === Y);
    document.write(5>2 && 10>4);
    document.write(5>10 && 10>4);
    document.write(5>10 || 10>4);
    document.write(5>10 || 10>20);
function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);

}
function not_Function1() {
    document.getElementById("Not").innerHTML = ! (5>10);
    
}

