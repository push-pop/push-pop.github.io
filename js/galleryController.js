$(function () {
    //Simple filter controls
    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
        //        $(this).find('project-desc')
    });
    //Multifilter controls
    $('.multifilter li').click(function () {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function () {
        $('.sort-btn').removeClass('active');
    });
    $('.nav-btn').click(function () {
        //        $('section').hide();
        //        var dest = $($(this).find('a').attr('href'));
        //        dest.show();
        $('.filtr-container').filterizr();
        $('.simplefilter li').removeClass('active');
        $('#filter-all').addClass('active');
    })
    //Sort controls
    $('.filtr-item').on({
        mouseenter: function () {
            $(this).find(".caption-content").stop().animate({
                height: "show"
            }, 500, "easeOutQuad"); //.slideDown({});
            var video = $(this).find("video")
            if (video)
                video.get(0).play();
        },
        mouseleave: function () {
            $(this).find(".caption-content").stop().animate({
                height: "hide"
            }, 500, "easeOutQuad");
            var video = $(this).find("video")
            if (video) {
                video.get(0).pause();
                // video.get(0).currentTime = 0;
                // video.get(0).load();
            }
        }
    });
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
});