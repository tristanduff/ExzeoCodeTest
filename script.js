$.getJSON("https://itunes.apple.com/us/rss/topalbums/limit=100/json", { get_param: "value" }, function(data) { //bracket 1/1		//Grabs data from iTunes
	console.log(data.feed.entry);																									//Puts each array entry into the console
    	($.each(data.feed.entry, function(index, element) {	//bracket 2/1															//Array for populating the iTunes data
    		
    		var divContainer = $('<div>');																							//Generates the <div> tags in the array
    		
    		var name = $('<span>', { //bracket 3/1																					//Generates the "Name" element
    	    text: element["im:name"].label																							//the .label element connects to the name in the JSON feed
    	}); //bracket 3/1
    		
    		var artist = $('<span>', {	//bracket 3/2																				//Generates the "Artist" element
    	    text: element["im:artist"].label																						//the .label element connects to the artist in the JSON feed
    	}); //bracket 3/2
    	
    	divContainer.addClass("Container col-md-2")																					//Container label for CSS interaction
        artist.addClass("Artist")																									//Artist label for CSS interaction
        name.addClass("Name")																										//Name label for CSS interaction
       divContainer.append(name, artist);  																							//Places the name and artist inside the container <div>
       $('body').append(divContainer);                                    															//Places the container in the <body> of the page
       })); //bracket 2/1
}); //bracket 1/1
