var express = require("express");
var axios = require("axios");
var path = require("path");
var app = express();

//opens port 3000 if no port is already open
var port = process.env.PORT || 3000;

//Grabs top 100 albums
app.get("/albums", function (req, res){
  axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
  .then(response => {
    var data = response.data.feed.entry.map((album, index) => {
      return {
        ranking: index+1,
        idCode: album['id'].attributes['im:id'],
        iTunesLink: album['link'].attributes.href,
        albumArt: album['im:image'][2].label,
        name: album['im:name'].label,
        artist: album['im:artist'].label,
        releaseDate: album['im:releaseDate'].attributes.label,
        songCount: album['im:itemCount'].label,
        genre: album['category'].attributes.label,
        moreOfGenre: album['category'].attributes.scheme,
        rights: album['rights'].label
      }
    })

    res.status(200).json(data)
  })
  .catch(error => {
    console.log(error)
  })
});

//Grabs top 100 songs
app.get("/songs", function (req, res){
  axios.get("https://itunes.apple.com/us/rss/topsongs/limit=100/json")
  .then(response => {
    var data = response.data.feed.entry.map((song, index) => {
      return {
        ranking: index+1,
        idCode: song['id'].attributes['im:id'],
        iTunesAlbumLink: song['im:collection'].link.attributes.href,
        songName: song['im:name'].label,
        albumName: song['im:collection']['im:name'].label,
        previewLink: song['link'][1].attributes.href,
        albumArt: song['im:image'][2].label,
        artist: song['im:artist'].label,
        releaseDate: song['im:releaseDate'].attributes.label,
        genre: song['category'].attributes.label,
        moreOfGenre: song['category'].attributes.scheme,
        rights: song['rights'].label
      }
    })
    res.status(200).json(data)
  })
  .catch(error => {
    console.log(error)
  })
});

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(port, function (){
  console.log("I'm listening");
});
