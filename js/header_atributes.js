window.onscroll = function() {headerSticker()};

var header = document.getElementById("header-container-index");

var sticky = header.offsetTop;

function headerSticker()
{
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
}
}