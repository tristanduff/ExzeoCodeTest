/*globals $, Handlebars*/

var srcCards = $('#cardTemplate').html();
var cardsTemplate = Handlebars.compile(srcCards);

$.getJSON("/albums", function(data) {
  console.log(data);
    $.each(data, function (index, album) {
        var cardMaker = cardsTemplate(album);
        $('.center').append(cardMaker);
		});
});
