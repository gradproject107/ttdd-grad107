function init() {

}

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// var r = getRandomInt(9);

// var slideIndex = r;
var slideIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("slidepic");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(slideshow, 6000);
}


init();
