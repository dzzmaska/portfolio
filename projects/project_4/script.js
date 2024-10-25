function blackMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


 var coll = document.getElementsByClassName("collapsible");
 var i;
 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content =document.getElementById("navbar");
     if (content.style.display === "block") {
       content.style.display = "none";
     } else {
       content.style.display = "block";
     }
   });
 }
/*
 let nav = document.getElementById('navigation');
function toggleMenu() {
  nav.classList.toggle('navigation--visible');
}
*/
