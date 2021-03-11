

//so far using this to create my posts but i will write simply way later
function addToBuy(k){
 var li = feedArray[k].addToList();
 var liPrice = feedArray[k].$getPrice();
 var totalPrice = 0 + liPrice;
 var tt =  document.getElementById('$total').innerHTML = 0;
 tt = totalPrice;
   document.getElementById('sList').innerHTML += li;
 
}
function feed(a,b,c,d,e){
  this.feedTitle = a;
  this.imgSrc = b;
  this.price = c;
  this.category = d;
  this.postTym = e;
  this.showFeed = function (){
    return '<div class="'+this.category+'">'
    + '<h2>' + this.feedTitle  + '</h2>' 
    + '<img src="'+this.imgSrc+'"/>'
    + '<p> Price:'+ this.price + '.shs<p>'
    + '<b> Category:' + this.category+ '</b>'
    + '<br>'
    + '<button> Buy </button>'
    + '<button onclick="addToBuy('+this.postTym+')"> add to list </button>'
    + '</div>'
    + '<br>';
  };
  this.addToList = function (){
    return '<li>' + this.feedTitle + '<span> Price :' + this.price + '</span> </li>';
  };
  this.$getPrice = function (){
    return  this.price;
  };
}
var feedArray, fd1,fd2,fd3,fd4,fd5,fd6,items_Onsale;
items_Onsale = "";
var objects = setTimeout(function() {
    fd1 = new feed('Roses','f1.png',2000,'flower',0);
    fd2 = new feed('Bamboo','F2.png',2000,'flower',1);
    fd3 = new feed('Apple','ot.png',2000,'flower',2);
    fd4 = new feed('Ashoka','soil.png',2000,'flower',3);
    fd5 = new feed('Mangoes','tr.png',2000,'flower',4);
    fd6 = new feed('Pine','tr.png',2000,'tree',5);
    feedArray = [fd4,fd2,fd3,fd1,fd5,fd6];
console.log(feedArray[0].$getPrice());
for (var i = 0; i < feedArray.length; i++) {
  items_Onsale = document.getElementById('fd');
  items_Onsale.innerHTML += feedArray[i].showFeed();
}
}, 10);