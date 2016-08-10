$.getJSON("https://itunes.apple.com/us/rss/topalbums/limit=100/json", { get_param: "value" }, function(data) { //bracket lvl 1, jsonget		//Grabs data from iTunes
	
	console.log(data.feed.entry); 																											//Runs through the JSON feed in console
	
	var topDiv = $('<div class="flexContainerAlbumList"></div>');
	//Can "Top 100 iTunes Songs" text be placed up here?
    var ranking = 1;
    	
    	($.each(data.feed.entry, function(index, element) {	//bracket lvl 2, datafeed														//Array for populating the iTunes data
    		var divContainer = $('<div align="center">').appendTo(topDiv); 																	//puts the divContainer at end of topDiv
    		var linebreak1 = $('<br></br>');
    		var linebreak2 = $('<br></br>');
    		var linebreak3 = $('<br></br>'); 
    		var linebreak4 = $('<br></br>');   	
			var img = $("<img />").attr('src', element["im:image"][0].label);
	
    		var name = $('<span>', { //bracket lvl 3, name																					
    	    text: element["im:name"].label																									//fetches name label
    		}); //bracket lvl 3, name					
    		
    		var artist = $('<span>', {	//bracket lvl 3, artist																				
    	    text: element["im:artist"].label																								//fetches artist label
    		}); //bracket lvl 3, artist
    	
    		var releasedate = $('<span>', { //bracket lvl 3, releasedate
    		text:element["im:releaseDate"].attributes.label
    		}); //bracket lvl 3, releasedate
    	
    	divContainer.addClass("flexItemAlbumEntry")
        linebreak1.addClass("LineBreak")
        linebreak2.addClass("LineBreak")
        linebreak3.addClass("LineBreak")
        linebreak4.addClass("LineBreak")																							
        name.addClass("Name")        
        artist.addClass("Artist")																											
        releasedate.addClass("ReleaseDate")																				
       	divContainer.append(ranking, linebreak1, img, linebreak2, name, linebreak3, artist, linebreak4, releasedate);  																	
       	divContainer.appendTo(topDiv);    
       	ranking = ranking+1;                                																
       	})); //bracket lvl 2, datafeed
       	  	
	$('body').append(topDiv);
       	
}); //bracket lvl 1, jsonget
