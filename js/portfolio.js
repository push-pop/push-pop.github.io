const portfolioProto = `   
<div class="col-xs-6 col-sm-4 col-md-6 filtr-item" data-category="{data-categories}" data-sort="Sound Journeys">
<a href="#{tag}" class="portfolio-link" data-toggle="modal">
    <!-- <img class="img-responsive" src="img/portfolio/joyride.png" alt="sample image"> -->
    <div class="embed-responsive embed-responsive-16by9">
        <video class="video-thumb embed-responsive-item" loop="true" muted="true">
            <source src="{video-thumb}"
                type="video/mp4" />
        </video>
        <div class="item-desc">
            <h4>{title}</h4>
            <div class="caption-content">
                <p>{subtitle}</p>
            </div>
        </div>
    </div>

</a>
</div>
`

const init = () => {
    loadJSON((res) => {
        var json = JSON.parse(res);
        var item = json.items[0];

        var str = (' ' + portfolioProto).slice(1);
        str = str.replace('{title}', item.title);
        str = str.replace('{subtitle}', item.subtitle);
        str = str.replace('{video-thumb}', item.video_thumb);
        str = str.replace('{tag}', item.tag);
        str = str.replace('{data-categories}', item.data_categories);

        console.log(str);
        $('.filtr-container').append(str);
    })
}


const loadJSON = (callback) => {
    var xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open('GET', 'data.json', true);
    xObj.onreadystatechange = () => {
        if (xObj.readyState == 4 && xObj.status == "200") {
            callback(xObj.responseText);
        }

    }
    xObj.send(null);
}

init();