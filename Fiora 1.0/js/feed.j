
var li;
var fdTitle = ["Rose", "Pine", "Oranges"];
var fdPrice = [1000,100000,1000];
var fdimg= [["f1.png","tr.png","id.png"]];
var len = fdTitle.length;
var i = 0;
var feeds = "";
var totalPrice ;
var p = [];
function addToBuy(k){
 li = fdTitle[k] + " " + "Price : " + fdPrice[k];
   document.getElementById('sList').innerHTML += '<li>' + li + '</li>';
}
for (var z = 0; z < fdimg.length; z++) {
  console.log(fdimg[z[0]]);
}
var my = setTimeout(function() {
while(i < len) {
feeds += '<div class="'+ fdTitle[i] +'">'
    + '<h2>' + fdTitle[i]  + '</h2>' 
    + '<img src="'+fdimg[i]+'"/>'
    + '<p> Price:'+  fdPrice[i] + '.shs<p>'
    + '<button onclick="addToBuy('+i+')"> add to list </button>'
    + '</div>';
 i++;
}
document.getElementById("fd").innerHTML = feeds;
}, 10);
