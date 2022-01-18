function init() {

}


const colorbutton = document.getElementById('colorbutton');
const body = document.body;
const mobilenav = document.getElementById("mobilenav")
const openmenu = document.getElementById("openmenu")
colorbutton.onclick = function() {
    body.classList.toggle("dark-mode");
    if (mobilenav.style.backgroundColor != "black") {
        mobilenav.style.backgroundColor = "black";
        mobilenav.style.color = "white";
    } else {
        mobilenav.style.backgroundColor = "white";
        mobilenav.style.color = "black";
    }

}

openmenu.onclick = function() {
    if (mobilenav.style.display != "block") {
        mobilenav.style.display = "block";
        body.style.overflow = "hidden";
    } else {
        mobilenav.style.display = "none";
        body.style.overflow = "scroll";
    }
    if (openmenu.innerHTML != "-menu") {
        openmenu.innerHTML = "-menu";
    } else { openmenu.innerHTML = "+menu" }
}

// function noscroll() {
//     if (mobilenav.style.display = "block") {
//         body.style.overflow = "hidden";
//     } else { body.style.overflow = "scroll"; }
// }
// noscroll();

// setInterval(
//     function colors() {
//         if (body.style.backgroundColor = "white") {
//             mobilenav.style.color = "black";
//             mobilenav.style.backgroundColor = "white";
//         } else if (body.style.backgroundColor = "black") {
//             mobilenav.style.color = "white";
//             mobilenav.style.backgroundColor = "black";
//         }

//     }, [100])


setInterval(function() {
    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    if (width > height) {
        mobilenav.style.display = "none";
        openmenu.innerHTML = "+menu";
    }
    // if (width > 800) {
    //     mobilenav.style.display = "none";
    // }


}, [100])





init();
