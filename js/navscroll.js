function clickNavBar() {
  var x = document.getElementById("navlinks");
  var ham = document.getElementById("icon2");
  var close = document.getElementById("iconx2");
  if (x.style.width === "220px") {
    x.style.width = "0px";
    x.style.right = "-20px";
    // x.style.display = "none";
    ham.style.display = "block";
    close.style.display = "none";
  } else {
    x.style.right = "0px";
    x.style.display = "block";
    x.style.width = "220px";
    ham.style.display = "none";
    close.style.display = "block";
  }
}

function clickDownBar() {
  var x = document.getElementById("navlinkstab");
  var down = document.getElementById("iconD");
  var up = document.getElementById("iconU");
  if (x.style.display === "block") {
    x.style.display = "none";
    down.style.display = "block";
    up.style.display = "none";
  } else {
    x.style.display = "block";
    down.style.display = "none";
    up.style.display = "block";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

mybutton = document.getElementById("upButtonId");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
