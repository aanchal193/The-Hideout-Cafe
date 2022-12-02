var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};

function myFunction() {
  var x = document.getElementById("mainListDiv");
  if (x.className === "main_list") {
    x.className += " responsive";
  } else {
    x.className = "main_list";
  }
}