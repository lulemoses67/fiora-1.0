function $hulTech(){
  var x = document.getElementById('log_in'). value;
  if (x == "lastking") {
    document.getElementById('welcome').style.display = "none";
  }
}

function toogleMenu(){
  var x = document.getElementById('sideMenu');
  if (x.style.display == "none") {
    x.style.display = "block";
  } else{
    x.style.display = "none";
  }
}
//Begin with declaring the variable to work .
//h is the array and from a to g are the objects
var a,b,c,d,e,f,g,h;
//Create the function for default home page
var welCome = setTimeout(() => {
  //Here am getting values of a,b,c,and more
  a = document.getElementById("feeds");
  b = document.getElementById("profile");
  c = document.getElementById("bells");
  d = document.getElementById("settings");
  e = document.getElementById("categories");
  f = document.getElementById("sBox");
  g = document.getElementById("shopLi");
  j = document.getElementById("favorite");
  //Creating an array h to help me access the divs and set them to display none expect categories or home page 
 h = [a,b,c,d,f,g,j];
  for(let t of h){
    t.style.display = "none";
  }
},10);
myFunc = (x) => {
  // Creating the array 
  h = [a,b,c,d,e,f,g,j];
  // loop the array values to display none
  for (let i = 0; i < h.length; i++) {
    h[i].style.display = "none";
  }
  h[x].style.display = "block";
}

