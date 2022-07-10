function init() {


}



setInterval(function() {
    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    if (width < height) {
        workstags.style.display = "none";
        openworks.innerHTML = "+WORKS";
    }
    // if (width > 800) {
    //     mobilenav.style.display = "none";
    // }


}, [10])


var i, j;

var imgs = document.getElementsByClassName("listimg");
var titles = document.getElementsByClassName("title");
for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
}




function showicons(tt) {
    titles[tt].onmousemove = function() {
        imgs[tt].style.display = "block";
    }
    titles[tt].onmouseout = function() {
        imgs[tt].style.display = "none";
    }
}
for (var tt = 0; tt < imgs.length; tt++) {
    showicons(tt);
}


init();
