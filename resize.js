$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("header").removeClass("large").addClass("small");
    } else {
        $("header").removeClass("small").addClass("large");
    }

});

$('.menu-toggle').click(function() {
    $('ul').toggleClass('opening');
    $(this).toggleClass('open');
});

$(document).ready(function(){
    $('#hamburger-icon').click(function(){
        $(this).toggleClass('open');
    });
});

