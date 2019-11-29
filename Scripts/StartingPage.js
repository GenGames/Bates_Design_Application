var logo = document.getElementById("logo");
var loadingImageSource = "Images/loader.gif";

function StartUpFunction(){
  logo.classList.add('final');
}

function LoadPortfolio(){
  logo.classList.remove('final');
  setTimeout(function(){
    logo.style.display = 'none';
    insertLoadingPage();
  },900)
}

function insertLoadingPage(){
  var loadingImage = document.createElement("img");
  loadingImage.src = loadingImageSource;
  loadingImage.alt = "loading Image";
  loadingImage.classList.add("Loading-screen");
  document.body.appendChild(loadingImage);
  setTimeout(function(){
    window.open("index.html");
    window.close(this);
  },2000);
}
