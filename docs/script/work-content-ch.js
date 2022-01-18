function init() {

}

const opendesigner = document.getElementById("opendesigner");
const designerinfos = document.getElementById("designerinfos");
const imgbg = document.getElementById("imgbg");
const logo = document.getElementById("logo");


var imgs = document.getElementsByClassName("workimg")
var vids = document.getElementsByClassName("vid")
opendesigner.onclick = function() {
    designerinfos.classList.toggle("display");
    if (opendesigner.innerHTML != "-設計者") {
        opendesigner.innerHTML = "-設計者";
        imgbg.style.top = "180vh";


    } else {
        opendesigner.innerHTML = "+設計者";
        imgbg.style.top = "98vh";

    }


}
var i, j;
for (i = 0; i < imgs.length; i++) {
    imgs[i].onmousemove = function() {
        logo.style.zIndex = "-2";

    }
    imgs[i].onmouseout = function() {
        logo.style.zIndex = "2";

    }
}
for (j = 0; j < vids.length; j++) {
    vids[j].onmousemove = function() {
        logo.style.zIndex = "-2";

    }
    vids[j].onmouseout = function() {
        logo.style.zIndex = "2";

    }
}




init();
