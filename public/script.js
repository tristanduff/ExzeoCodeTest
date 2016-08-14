/*globals $, Handlebars*/

var srcCards = $('#cardTemplate').html();

var cardsTemplate = Handlebars.compile(srcCards);
var ranking = 1;
   
$.getJSON("/albums", { get_param: "value" }, function(data) { 
	
    var albums = data.feed.entry;
	//console.log(albums);
	
    $.each(albums, function (index, album) {
 		//grab songs on album
 		$.getJSON("/songs/"+albumCode, function(data) {
        	var results = data;
				console.log(results);
			});
 //Pull all info, use as necessary in the templates
        var albumData = {
        	ranking: ranking,
			iTunesLink: album['link'].attributes.href,
        	albumArt: album['im:image'][2].label,
            name: album['im:name'].label,
            artist:album['im:artist'].label,
            releaseDate:album['im:releaseDate'].attributes.label,
            songCount:album['im:itemCount'].label,
            genre:album['category'].attributes.label,
            moreOfGenre:album['category'].attributes.scheme,
            rights:album['rights'].label
        }	
        var cardMaker = cardsTemplate(albumData);
        ranking = ranking+1;
		$('.center').append(cardMaker);
    });

});
