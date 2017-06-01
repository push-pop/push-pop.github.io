$(function () {
    //Simple filter controls
    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
        $(this).find('project-desc')
    });
    //Multifilter controls
    $('.multifilter li').click(function () {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function () {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function () {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
    $('.filtr-item').on({
        mouseenter: function () {
            $(this).find(".caption-content").stop().animate({
                height: "show"
            }, 500, "easeOutQuad"); //.slideDown({});
        }
        , mouseleave: function () {
            $(this).find(".caption-content").stop().animate({
                height: "hide"
            }, 500, "easeOutQuad");
        }
    });
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
});