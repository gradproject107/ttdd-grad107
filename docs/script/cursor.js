function init() {


    const cursor = document.getElementById("cursor");
    cursor.classList.add('noclick');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "transform: translate(" + (e.clientX) + "px, " + (e.clientY) + "px);")
    })
    document.addEventListener('mousedown', function() {
        cursor.classList.remove('noclick');
        cursor.classList.add('click');
        // cursor.style.width = "50px";
        // cursor.style.height = "50px";
    });

    document.addEventListener('mouseup', function() {
        cursor.classList.add('noclick');
        cursor.classList.remove('click');
        // cursor.style.width = "14px";
        // cursor.style.height = "14px";
    });

}






init();