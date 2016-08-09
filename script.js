$.getJSON("https://itunes.apple.com/us/rss/topalbums/limit=100/json", { get_param: "value" }, function(data) { //bracket lvl 1, jsonget		//Grabs data from iTunes
	console.log(data.feed.entry);																											//Puts each array entry into the console
    	($.each(data.feed.entry, function(index, element) {	//bracket lvl 2, datafeed														//Array for populating the iTunes data
    		
    		var divContainer = $('<div align="center">');																					//Generates the <div> tags in the array
    		var linebreak1 = $('<br></br>');
    		var linebreak2 = $('<br></br>');
    		var linebreak3 = $('<br></br>');    		
			var albumart = $('<span>', { //bracket lvl 3, albumart																			//Generates the "AlbumArt" element
//The code below needs the third attributes.label in the array, which links to the 170x170 .jpg album art; figure out how to cycle through to the third entry
			//text: element["im:image"].label 																					//fetches album art .jpg link
			}); //bracket lvl 3, albumart

    		var name = $('<span>', { //bracket lvl 3, name																					//Generates the "Name" element
    	    text: element["im:name"].label																									//fetches name label
    		}); //bracket lvl 3, name					
    		
    		var artist = $('<span>', {	//bracket lvl 3, artist																				//Generates the "Artist" element
    	    text: element["im:artist"].label																								//fetches artist label
    		}); //bracket lvl 3, artist
    	
    		var releasedate = $('<span>', {
    		text:element["im:releaseDate"].attributes.label
    		});
    	
    	divContainer.addClass("Container col-md-3")																							//Container label for CSS interaction; col-md-3 is Bootstrap formatting
        linebreak1.addClass("LineBreak")
        linebreak2.addClass("LineBreak")
        linebreak3.addClass("LineBreak")
        albumart.addClass("AlbumArt")																										//AlbumArt label for CSS interaction
        artist.addClass("Artist")																											//Artist label for CSS interaction
        name.addClass("Name")
        releasedate.addClass("ReleaseDate")																									//Name label for CSS interaction
       	divContainer.append(albumart, linebreak1, name, linebreak2, artist, linebreak3, releasedate);  																						//Places inside the container <div>
       	$('body').append(divContainer);                                    																	//Places the container in the <body> of the page
       	})); //bracket lvl 2, datafeed
}); //bracket lvl 1, jsonget
