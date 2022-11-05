// let slideIndex = 0;
// showSlides();
//
// function getRand() {
//   return (Math.floor(Math.random() * (3) ) + 5) * 1000;
// }
//
// function showSlides() {
//   let i;
//   let randomInterval = getRand();
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, getRand());
// }

const merchduckButton = document.getElementById("main-name");
merchduckButton.onclick = function() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

const landingPageContainer = document.getElementsByClassName("landing-page-container")[0];

document.onscroll = function() {
  
  console.log(" Y-axis : " + pageYOffset)
}
