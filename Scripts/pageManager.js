var pages = [["Cover Letter","Bates_CoverLetter"],
["Resume","Bates_Resume"],
["Independent Projects","Ind_Projects"],
["Group Projects","Group_Proj"],
["Levels Developed","Lvl_Dev"],
["Character Sheet","Character_Sheet"]];
var currentPage = 0;
var currentImage = document.getElementById("display-image");
var coverPage = document.getElementById("portfolio-cover");
var isPortfolioOpen = false;
var sideNavElements = document.getElementById("sidenav-list").children;
var portfolioContent = document.getElementById("Portfolio-content");


function StartUpFunction() {
  for (var i = 0; i < sideNavElements.length; i++) {
    if (pages[i] != null) {
      sideNavElements[i].innerHTML = pages[i][0];
    }else {
      sideNavElements[i].style.display = 'none';
    }
  }
  currentImage.src= "Portfolio_Items/" + pages[currentPage][1] + ".png";
  UpdatePDFButton();
}

function RemoveFolder(){
  if(!isPortfolioOpen){
    isPortfolioOpen = !isPortfolioOpen;
    CoverPageFlipAnimation()
    document.getElementById("tutorialText").style.display = "none";
    UpdateSideNav();
  }
}

function NextPage() {
  if (isPortfolioOpen) {
    ++currentPage
    if (currentPage > pages.length - 1) {
      currentPage = 0;
    }
    PageSwipeAwayAnimation(currentImage);
    currentImage.src= "Portfolio_Items/" + pages[currentPage][1] + ".png";
    UpdatePDFButton();
    UpdateSideNav();
  }
  else {
    RemoveFolder();
  }
}

function PreviousPage() {
  if (isPortfolioOpen) {
  --currentPage;
  if (currentPage < 0) {
    currentPage = pages.length -1;
  }
  PagePullBackAnimation(currentPage);
  setTimeout(function(){
    currentImage.src= "Portfolio_Items/" + pages[currentPage][1] + ".png";
  },1250);
  UpdatePDFButton();
  UpdateSideNav();
  }
  else {
    RemoveFolder();
  }
}

function setPage(pagefile, pagenumber) {
  if (isPortfolioOpen) {
    currentImage.src= "Portfolio_Items/" +pagefile + ".png";
  }
  else {
    RemoveFolder();
    setPage(pagefile);
    UpdateSideNav();
  }
  currentPage = pagenumber;
  UpdatePDFButton();
  UpdateSideNav();
}

function PageSwipeAwayAnimation(target){
  console.log("Playing Swipe Away Animation");

  //Create a new object with the previous page content overtop the current page
  var oldPage = document.createElement("img");
  oldPage.src = target.src;
  oldPage.classList.add("page-animate-away-start");
  portfolioContent.appendChild(oldPage);

  //destroy the old page object
  setTimeout(function(){
    oldPage.remove();
  },1350);
}

function PagePullBackAnimation(target){
  console.log("Playing Pull Back Animation");

  //Create a new object with the previous page content Offscreen
  var oldPage = document.createElement("img");
  oldPage.src = "Portfolio_Items/" + pages[target][1] + ".png";
  oldPage.classList.add("page-animate-towards-start");
  portfolioContent.appendChild(oldPage);

  //Animate the old page to move on the screen overtop the current page

  //Set the new page to the target page and destroy the animated page

}

function CoverPageFlipAnimation(){
  console.log("Playing Cover Flip Animation");
  //add class to the coverpage to fold over
  coverPage.classList.add("openned");
}

function SetDisplayNone(object){
  object.style.display = 'none';
}

function UpdatePDFButton(){
  var link = document.getElementById("pdfLink");
  link.href = "Portfolio_PDFs/" + pages[currentPage][1] +".pdf";
}

function UpdateSideNav(){
  var updatedSideNavElementsList = document.getElementById("sidenav-list").children;

  console.log(updatedSideNavElementsList);
  for (var i = 0; i < updatedSideNavElementsList.length; i++) {
    if (updatedSideNavElementsList[i].innerHTML == pages[currentPage][0]) {
      updatedSideNavElementsList[i].id = 'selected';
    } else{
      updatedSideNavElementsList[i].id = '';
    }
  }
}
