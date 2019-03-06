
var myLoader;

function imitationLoader() {
    myLoader = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("informationBlock").style.display = "block";
}