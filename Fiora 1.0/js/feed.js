var my = setTimeout(function() {
var feeds;
var t = 0;
function addToBuy(k){
   document.getElementById('sList').innerHTML += '<li>' + k.name + '</li>';
}
class Feed {
  constructor(feedName, feedimage,feedPrice) {
      this.name = feedName;
      this.image = feedimage;
      this.price = feedPrice;
      }
      showInfo(x) {
feeds = document.getElementById("fd");
feeds.innerHTML += "<div>"
+ "<h2>" + this.name + "</h2>"
+ "<img src='"+this.image+"'>"
+ "<p>" + this.price + "</p>"
+ "<button onclick='addToBuy("+x+")'>"
+ "Buy </button>"
+ "</div>";
         }
      totalPrice(price){
        t += price;
        document.getElementById('$total').innerHTML = t;
      }
      }
var feed = new Feed("mango", "f1.png", 3000);
var feed1 = new Feed("mango", "tr.png",1700);
feed.showInfo("feed");
feed1.showInfo("feed1");
feed.totalPrice(3000);
feed1.totalPrice(1700);

}, 10);