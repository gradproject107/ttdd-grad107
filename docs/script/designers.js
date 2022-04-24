function init() {


}
const openworks = document.getElementById("opendesigners");
const workstags = document.getElementById("designertags");
openworks.onclick = function() {
    // workstags.classList.toggle("nodisplay");
    if (openworks.innerHTML != "-DESIGNERS") {
        openworks.innerHTML = "-DESIGNERS";
    } else { openworks.innerHTML = "+DESIGNERS"; }
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
        openworks.innerHTML = "+DESIGNERS";
    }
    // if (width > 800) {
    //     mobilenav.style.display = "none";
    // }


}, [10])




init();