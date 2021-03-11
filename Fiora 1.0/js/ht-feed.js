
var my = setTimeout(function() {

var feeds;
class Feed {
  constructor(feedName,feedImage,feedInfo){
    this.name = feedName;
    this.image = feedImage;
    this.info = feedInfo;
  }
  showFeed(x){
feeds = document.getElementById("fd");
feeds.innerHTML += "<div>"
+ "<h2>" + this.name + "</h2>"
+ "<img src='"+this.image+"'>"
+ "<p>" + this.price + "</p>"
+ "<button onclick='addToBuy("+x+")'>"
+ "Buy </button>"
+ "</div>";
  }
}
var feed = new Feed("mango", "f1.png", 3000);
feed.showFeed('feed');
var feed1 = new Feed("mango", "tr.png",1700);
feed1.showFeed('feed1');
function addToBuy(x){
  document.getElementById('sList').innerHTML =  '<li>' + x.name + x.price + '</li>';
}
  
}, 10);