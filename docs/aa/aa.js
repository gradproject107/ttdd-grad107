$(document).on('mousemove', function(e) {
    var w = $(document).width();
    var mouseX = e.pageX;
    var a = mouseX/w;
    var b;
    var e = 4;
    if (a <= 0.5) {
        b = (a*2)**e/2;
    } else {
        b = 1-(((1-a)*2)**e/2);
    }
    var result = b*300 + 100;
    $('#A p').css('font-variation-settings', "'wdth'" + result);
})