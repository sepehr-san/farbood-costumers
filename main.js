const hamraheAval = document.getElementById("hamrahe-aval-button");
const body = document.getElementById("icon-container");
const detailsContainer = document.getElementById("details-container");
const closeButton = document.getElementById("close-button");


hamraheAval.addEventListener("click", function(){
  body.style.filter = "blur(5px)";
  detailsContainer.style.visibility = "visible";
  detailsContainer.style.filter = "opacity(1)";
});
closeButton.addEventListener("click", function(){
  body.style.filter = "blur(0px)";
  detailsContainer.style.visibility = "hidden";
  detailsContainer.style.filter = "opacity(0)";
})

