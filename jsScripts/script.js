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

const landingImageContainer = document.getElementsByClassName("landing-image-container")[0];
const footer = document.getElementsByTagName("FOOTER")[0];
const tagline = document.getElementsByClassName("tagline")[0];
const firstQuickInfo = document.getElementsByClassName("about-info")[0];
const secondQuickInfo = document.getElementsByClassName("about-info")[1];


document.onscroll = function() {
  console.log(" Y-axis : " + pageYOffset) //shows Y Offset in console

  // Sets the proper footer Y offset based on the Page Y Offset
  if (pageYOffset > 100) {
    footerPosition = 0
  } else {
    footerPosition = 100 - pageYOffset;
  }
  footer.style.transform = "translateY(" + (footerPosition) + "%)";

  // Sets the proper landing image Y offset based on the Page Y Offset
  landingImageContainer.style.transform = "translateY(" + (-pageYOffset / 25) + "%)";

  if (pageYOffset > 1000) {
    landingImageContainer.style.opacity = "0%";
  } else {
    landingImageContainer.style.opacity = "100%";
  }

  // Fading text as it reaches top of viewportHeight
  let viewportHeight = window.innerHeight

  // tagline fade
  if (viewportHeight / pageYOffset > 4.5) {
    tagline.style.opacity = "100%";
  } else if (viewportHeight / pageYOffset < 3.7) {
    tagline.style.opacity = "0%";
  } else {
    tagline.style.opacity = ((viewportHeight / pageYOffset) - 3.7) * 1.25
  }

  // first info fade
  if (viewportHeight / pageYOffset > 0.57) {
    firstQuickInfo.style.opacity = "100%";
  } else if (viewportHeight / pageYOffset < 0.53) {
    firstQuickInfo.style.opacity = "0%";
  } else {
    firstQuickInfo.style.opacity = ((viewportHeight / pageYOffset) - 0.53) * 25
  }

  // second info fade
  if (viewportHeight / pageYOffset > 0.226) {
    secondQuickInfo.style.opacity = "100%";
  } else if (viewportHeight / pageYOffset < 0.222) {
    secondQuickInfo.style.opacity = "0%";
  } else {
    secondQuickInfo.style.opacity = ((viewportHeight / pageYOffset) - 0.222) * 250
  }

}
