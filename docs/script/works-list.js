function init() {


}
const openworks = document.getElementById("openworks");
const workstags = document.getElementById("workstags");
openworks.onclick = function() {
    // workstags.classList.toggle("nodisplay");
    if (openworks.innerHTML != "-works") {
        openworks.innerHTML = "-works";
    } else { openworks.innerHTML = "+works"; }
    if (workstags.style.display != "block") {
        workstags.style.display = "block";
    } else { workstags.style.display = "none" }

}



setInterval(function() {
    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    if (width < height) {
        workstags.style.display = "none";
        openworks.innerHTML = "+works";
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



titles[0].onmousemove = function() {
    imgs[0].style.display = "block";
}
titles[0].onmouseout = function() {
    imgs[0].style.display = "none";
}
titles[1].onmousemove = function() {
    imgs[1].style.display = "block";
}
titles[1].onmouseout = function() {
    imgs[1].style.display = "none";
}
titles[2].onmousemove = function() {
    imgs[2].style.display = "block";
}
titles[2].onmouseout = function() {
    imgs[2].style.display = "none";
}
titles[3].onmousemove = function() {
    imgs[3].style.display = "block";
}
titles[3].onmouseout = function() {
    imgs[3].style.display = "none";
}
titles[4].onmousemove = function() {
    imgs[4].style.display = "block";
}
titles[4].onmouseout = function() {
    imgs[4].style.display = "none";
}
titles[5].onmousemove = function() {
    imgs[5].style.display = "block";
}
titles[5].onmouseout = function() {
    imgs[5].style.display = "none";
}
titles[6].onmousemove = function() {
    imgs[6].style.display = "block";
}
titles[6].onmouseout = function() {
    imgs[6].style.display = "none";
}




init();
