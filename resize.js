$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("header").removeClass("navbar-large").addClass("navbar-small");
    } else {
        $("header").removeClass("navbar-small").addClass("navbar-large");
    }

});

$('.hamburger-toggle').click(function() {
    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
});

$(document).ready(function(){
    $('#hamburger-icon').click(function(){
        $(this).toggleClass('open');
    });
});
