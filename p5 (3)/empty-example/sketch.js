

var gauguin;


function setup() {
  //print(url);
  gauguin = loadJSON("https://commons.wikimedia.org/w/api.php?action=query&prop=images&imlimit=500&redirects=1&titles=gauguin&format=json&callback=GOT_DATA",'jsonp');
}

function GOT_DATA(data) {
  println(data);
  background(200);
  //var image = query.pages[0].images[0].title;

}
