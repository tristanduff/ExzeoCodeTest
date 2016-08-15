/*globals $, Handlebars*/

var srcCards = $('#cardTemplate').html();
//var srcSongs = $('#songTemplate').html();

var cardsTemplate = Handlebars.compile(srcCards);
//var songsTemplate = Handlebars.compile(srcSongs);

$.getJSON("/songs", function(data) {
    $.each(data, function (index, songs) {
      //$.getJSON("/songs/:id", function(id) {
        //console.log(id);
        //var songMaker = songsTemplate(id);
        //$('.songHolder').append(songMaker);
      //});
        var cardMaker = cardsTemplate(songs);
        //console.log(cardMaker);
        $('.center').append(cardMaker);
		});
});
