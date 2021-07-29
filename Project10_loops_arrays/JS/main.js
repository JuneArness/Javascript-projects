function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violen", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function call_loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("loop").innerHTML = Content;
    }

    function cat_pics() {
        var array_function = [];
        Cat_Picture[0] = "sleeping";
        Cat_Picture[1] = "playing";
        Cat_Picture[2] = "eating";
        Cat_Picture[3] = "purring";
        document.getElementById("Array").innerHTML = "In this picture, the cat is" + Cat_Picture[2] + ".";
    }

    function constant_function() {
        const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "900";
        document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
    }
    
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

    
    var X =82;
    document.write(X);
    {
        var X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

    document.write("<br>" + X);
function myFunction() {
  return Math.PI;
} 

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }

  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }