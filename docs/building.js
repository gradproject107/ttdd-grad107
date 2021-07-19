$(document).ready( function() {
    var aaX = 0, aaY = 0;
    var aaW = $('#A').outerWidth(), aaH = $('#A').outerHeight();
    var adW = $(document).width(), adH = $(document).height();
    var asX = 4, asY = 3;
    var asX = 1 + Math.random()*10;
    var asY = 1 + Math.random()*10;
    var state = true;
    
    setInterval(function() {
        if(state){
            $('#A').offset({top: aaY, left: aaX});
            aaX += asX;
            aaY += asY;
            if(aaX + aaW + asX > adW || aaX + asX < 0) {
                asX = -asX;
            }
            if(aaY + aaH + asY > adH || aaY + asY < 0) {
                asY = -asY;
            }
        }
    }, 20);
    $('#A').mouseenter(function() {
        state = false;
    }).mouseleave(function() {
        state = true;
    })
    $(window).resize(function() {
        var adW = $(document).width(), adH = $(document).height();
    })
});