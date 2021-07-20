function my_Dictionary() {
    var Animals = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animals.Sound;
}