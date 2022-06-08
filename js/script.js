function myFunction(){
  var x = document.getElementById("menuid");
  console.log("Menu ==", menuid);
  if(x.className === "menu"){
    x.className += " responsive";
  } else {
    x.className = "menu";
  }

}
