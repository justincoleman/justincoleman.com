$(document).ready(function() {
    new WOW().init();

    var windowWidth = $(document).width();
    var timelineCount = $('.experience__job').length;

    if (windowWidth <= 899) {
        for (var i = 0; i < timelineCount; i++) {
            $('.experience__job').each(function(i, el) {
                $(this).addClass('slideInRight');
            });
        }
    } else {
        $('.experience__job').each(function(i, el) {
            if (i%2 === 0)
                $(this).addClass('slideInRight');
            else
                $(this).addClass('slideInLeft');
        });
    }

    setTimeout(function() {
        $('.skills__bar').removeClass('skills__bar--no-val');
    }, 1000);
});