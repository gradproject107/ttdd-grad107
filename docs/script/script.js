function init() {

    const colorbutton = document.getElementById('colorbutton');
    const body = document.body;
    const bodyblack = document.getElementById("bodyblack");
    // const body = document.getElementById("body01");
    const mobilenav = document.getElementById("mobilenav");
    const openmenu = document.getElementById("openmenu");
    // colorbutton.onclick = function() {
    //     // body.classList.toggle("dark-mode");
    //     if (bodyblack.style.display != "block") {
    //         bodyblack.style.display = "block";

    //     } else {
    //         bodyblack.style.display = "none";

    //     }

    //     if (mobilenav.style.backgroundColor != "black") {
    //         mobilenav.style.backgroundColor = "black";
    //         mobilenav.style.color = "rgb(7, 11, 226)";
    //     } else {
    //         mobilenav.style.backgroundColor = "white";
    //         mobilenav.style.color = "rgb(7, 11, 226)";
    //     }


    //     // if (cursor.style.mixBlendMode != "normal") {
    //     //     cursor.style.mixBlendMode = "normal";
    //     // } else {
    //     //     cursor.style.mixBlendMode = "difference";
    //     // }


    // }

    openmenu.onclick = function() {
        if (mobilenav.style.display != "block") {
            mobilenav.style.display = "block";
            body.style.overflow = "hidden";
        } else {
            mobilenav.style.display = "none";
            body.style.overflow = "scroll";
        }
        if (openmenu.innerHTML != "-MENU") {
            openmenu.innerHTML = "-MENU";
        } else { openmenu.innerHTML = "+MENU" }
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
            openmenu.innerHTML = "+MENU";
        }
        // if (width > 800) {
        //     mobilenav.style.display = "none";
        // }


    }, [100])

}







init();