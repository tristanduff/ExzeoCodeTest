var express = require("express");
var axios = require("axios");
var path = require("path");
var app = express();

//opens port 3000 if no port is already open
var port = process.env.PORT || 3000;

//takes request from server and sends response
app.get("/butt", function (req, res){
  res.status(200).json("morebutts");
});

//Grabs the Apple JSON feed
app.get("/albums", function (req, res){
  axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(error => {
    console.log(error)
  })
});

app.get("/albums-1", function (req, res){
  axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
  .then(response => {
    var data = response.data.feed.entry.map(album => {
      return {
        name: album["im:name"].label
      }
    })
    res.status(200).json(data)
  })
  .catch(error => {
    console.log(error)
  })
});

app.get("/songs", function (req, res){
  axios.get("https://itunes.apple.com/lookup?id=1107244888&entity=song")
  .then(response => {
    res.status(200).json(response.data)
    })
});

app.get("/songs/:id", function (req, res){
  var id = req.params.id
  axios.get("https://itunes.apple.com/lookup?id="+id+"&entity=song")
  .then(response => {
    res.status(200).json(response.data)
    })
});

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(port, function (){
  console.log("I'm listening");
});
