var srcCards = $('#cardTemplate').html();

var cardsTemplate = Handlebars.compile(srcCards);

$.getJSON("/songs", function(data) {
    $.each(data, function (index, song) {
        var cardMaker = cardsTemplate(song);
        $('.center').append(cardMaker);
		});
});
