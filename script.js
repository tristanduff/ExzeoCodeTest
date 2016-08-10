$.getJSON("https://itunes.apple.com/us/rss/topalbums/limit=100/json", { get_param: "value" }, function(data) { //bracket lvl 1, jsonget		//Grabs data from iTunes
	
	console.log(data.feed.entry); //Runs through the JSON feed in console
	
	var topDiv = $('<div class="flexContainerTop"></div>');
	//use topDiv.appendTo
	
    	($.each(data.feed.entry, function(index, element) {	//bracket lvl 2, datafeed														//Array for populating the iTunes data
    		
    		var divContainer = $('<div align="center">').appendTo(topDiv); //should put the divContainer in the top div
    		var linebreak1 = $('<br></br>');
    		var linebreak2 = $('<br></br>');
    		var linebreak3 = $('<br></br>');    	
    			
			//var albumart = $('<span>', { //bracket lvl 3, albumart																			//Generates the "AlbumArt" element
			//text: element["im:image"][2].label 																								//fetches album art .jpg link
			//}); //bracket lvl 3, albumart

    		var name = $('<span>', { //bracket lvl 3, name																					//Generates the "Name" element
    	    text: element["im:name"].label																									//fetches name label
    		}); //bracket lvl 3, name					
    		
    		var artist = $('<span>', {	//bracket lvl 3, artist																				//Generates the "Artist" element
    	    text: element["im:artist"].label																								//fetches artist label
    		}); //bracket lvl 3, artist
    	
    		var releasedate = $('<span>', {
    		text:element["im:releaseDate"].attributes.label
    		});
    	
    	divContainer.addClass("flexItemTop")
        linebreak1.addClass("LineBreak")
        linebreak2.addClass("LineBreak")
        linebreak3.addClass("LineBreak")
        //albumart.addClass("AlbumArt")																										
        artist.addClass("Artist")																											
        name.addClass("Name")
        releasedate.addClass("ReleaseDate")		
        																							
       	divContainer.append(name, linebreak2, artist, linebreak3, releasedate);  																	
       	divContainer.appendTo(topDiv);                                    																
       	})); //bracket lvl 2, datafeed
       	
       	
       	$('body').append(topDiv); //This'll be what puts the data into the page, hopefully
       	
}); //bracket lvl 1, jsonget
