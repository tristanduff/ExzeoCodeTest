$.getJSON("https://itunes.apple.com/us/rss/topalbums/limit=100/json", { get_param: "value" }, function(data) { //bracket lvl 1, jsonget		//Grabs data from iTunes
	
	console.log(data.feed.entry); 																											//Runs through the JSON feed in console
	
	//topDiv houses the entire page
	var topDiv = $('<div class="flexContainerHoriz"></div>');
	//var treintaDiv = $('<div class="flexHorizEntry"></div>');
	var ventiDiv = $('<div id="myCarousel" class="carousel slide" data-ride="carousel">');
	var grandeDiv = $('<ol class="carousel-indicators">');
	var midDiv = $('<div class="carousel-inner" role="listbox" id="carItem">')
	var btmDiv = $('<div class="flexContainerVert"></div>');
    var btnMaker = $('<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>');       	  	

	//This gets cycled through to list albums from 1 to 100
    var ranking = 1;
    var entry = 0;	
    
    
 	$('body').append(topDiv);
 		ventiDiv.appendTo(topDiv);
 			//ventiDiv.appendTo(treintaDiv);
 				grandeDiv.appendTo(ventiDiv);  			
    	
    	($.each(data.feed.entry, function(index, element) {	//bracket lvl 2, datafeed														//Array for populating the iTunes data
    		//var divCarousel = $('<div align="center">').appendTo(topDiv);																	//puts the carousel into topDiv
    		var divContainer = $('<div align="center">').appendTo(btmDiv); 																	//puts the divContainer into btmDiv
    		var linebreak1 = $('<br></br>');
    		var linebreak2 = $('<br></br>');
    		var linebreak3 = $('<br></br>'); 
    		var linebreak4 = $('<br></br>');   	
			var imgSmall = $("<img />").attr('src', element["im:image"][0].label); //55px Used in bottom text descriptions
			var imgLarge = $("<img />").attr('src', element["im:image"][2].label); //170px Used in top carousel
			
			var listItem = $("<li data-target='name' data-slide-to='entry'></li>");
    		
    		var carFirst = $('<div class="item first flexHorizEntry" id="'+entry+'">'); //div tag for first entry
    		var carEntry = $('<div class="item flexHorizEntry" id="'+entry+'">'); //div tag for all other entries
    		
    		var albumCaption = $('<div class="carousel-caption" id="HolderCaption">'); //Caption div that goes into the Album entry
    		
    		var subCaptionAlbum = $('<h3>', {
    		text: element["im:name"].label	
    		});
    		
    		var subCaptionArtist = $('<p>', {
    		text: element["im:artist"].label
    		});
    		
    		var endDiv = $('</div>');
    		
    		var name = $('<span>', { //bracket lvl 3, name																					
    	    text: element["im:name"].label																									//fetches name label
    		}); //bracket lvl 3, name					
    		
    		var artist = $('<span>', {	//bracket lvl 3, artist																				
    	    text: element["im:artist"].label																								//fetches artist label
    		}); //bracket lvl 3, artist
    	
    		var releasedate = $('<span>', { //bracket lvl 3, releasedate
    		text:element["im:releaseDate"].attributes.label
    		}); //bracket lvl 3, releasedate
    	
    	//divCarousel.addClass("flexItemCarousel")
    	divContainer.addClass("flexItemAlbumEntry")
        linebreak1.addClass("LineBreak")
        linebreak2.addClass("LineBreak")
        linebreak3.addClass("LineBreak")
        linebreak4.addClass("LineBreak")																							
        name.addClass("Name")        
        artist.addClass("Artist")																											
        releasedate.addClass("ReleaseDate")
        
 
        listItem.appendTo(grandeDiv);
        
        if ((entry)=='0') {
        	midDiv.append(carFirst);
        	carFirst.append(imgLarge);
        	albumCaption.appendTo(carFirst);
    	} else {
        	midDiv.append(carEntry);
        	carEntry.append(imgLarge);
        	albumCaption.appendTo(carEntry);
    	};
        subCaptionAlbum.appendTo(albumCaption);			
        subCaptionArtist.appendTo(albumCaption);	
        				
        //add in left/right controls				
        																			
       	divContainer.append(ranking, linebreak1, imgSmall, linebreak2, name, linebreak3, artist, linebreak4, releasedate);  																	
       	divContainer.appendTo(btmDiv);    
       	ranking = ranking+1;     
       	entry = entry+1;
       	                          																
       	})); //bracket lvl 2, datafeed
    ventiDiv.append(midDiv);
    btnMaker.appendTo(ventiDiv);
    //append the controls to midDiv here


       	
}); //bracket lvl 1, jsonget