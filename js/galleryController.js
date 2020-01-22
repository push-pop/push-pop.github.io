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
            var video = $(this).find("video").get(0)
            if (video)
                video.play();
        },
        mouseleave: function () {
            $(this).find(".caption-content").stop().animate({
                height: "hide"
            }, 500, "easeOutQuad");
            var video = $(this).find("video").get(0)
            if (video) {
                video.pause();
                // video.get(0).currentTime = 0;
                // video.get(0).load();
            }
        }
    });
    $('.caption-content').animate({
            height: "hide"
        }, 0, "easeOutQuad");
    
    $('.video-thumb').each(()=>{{
        var video = this;
        video.addEventListener('loadedmetadata', () =>{
            console.log('Loaded');
            if (video.buffered.length === 0) return;
        
            var bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
            console.log(bufferedSeconds + ' seconds of video are ready to play!');
          });

          video.addEventListener('progress',()=>{
            if (Math.round(video.buffered.end(0)) / Math.round(video.seekable.end(0)) === 1) {
                // Entire video is downloaded
                console.log('Downloaded Video');
             }
          }, false);
    }});
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
});