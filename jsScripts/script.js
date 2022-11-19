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

const landingImageContainer = document.getElementsByClassName("landing-image-container")[0];
// const footer = document.getElementsByTagName("FOOTER")[0];
const tagline = document.getElementsByClassName("tagline")[0];
const firstQuickInfo = document.getElementsByClassName("about-info")[0];
const secondQuickInfo = document.getElementsByClassName("about-info")[1];
const merchduckButton = document.getElementById("main-name");
const body = document.getElementsByTagName("BODY")[0];
const contentContainer = document.getElementsByClassName("content-container")[0];
const everythingElseContainer = document.getElementsByClassName("everything-else-container")[0];
const faqContainer = document.getElementsByClassName("faq-container")[0];
const navbar = document.getElementsByTagName("NAVBAR")[0];
const wordsOnMainPage = document.getElementsByClassName("word-on-main-page");
let pageSwitchFlag = 0;

document.onscroll = function() {
  // console.log(" Y-axis : " + pageYOffset) //shows Y Offset in console
  // console.log(body.getBoundingClientRect().top);

  // // Sets the proper footer Y offset based on the Page Y Offset
  // if (pageYOffset < (contentContainer.scrollHeight / 0.7)) {
  //   footerPosition = 100
  // } else {
  //   footerPosition = 0;
  // }
  // footer.style.transform = "translateY(" + footerPosition + "%)";

  // Sets the proper landing image Y offset based on the Page Y Offset
  landingImageContainer.style.transform = "translateY(" + (-pageYOffset / 25) + "%)";

  if (pageYOffset > 1000) {
    landingImageContainer.style.opacity = "0%";
  } else {
    landingImageContainer.style.opacity = "100%";
  }

  // Fading text as it reaches top of viewportHeight

  for (let i = 0; i < wordsOnMainPage.length; i++) {
    if (wordsOnMainPage[i].getBoundingClientRect().top < (navbar.scrollHeight / 2)) {
      wordsOnMainPage[i].style.opacity = "0";
    } else if (wordsOnMainPage[i].getBoundingClientRect().top > (navbar.scrollHeight + 10)) {
      wordsOnMainPage[i].style.opacity = "1";
    } else {
      wordsOnMainPage[i].style.opacity = (wordsOnMainPage[i].getBoundingClientRect().top - (navbar.scrollHeight / 2)) / ((navbar.scrollHeight + 10) - (navbar.scrollHeight / 2));
    }
  }

  // Check for switch flag


  if (body.getBoundingClientRect().top == 0) {
    if (pageSwitchFlag == 1) {
      setTimeout(function() {
        fadeOutContent();
        pageSwitchFlag = 0;
      }, 100)
    }
  }
}

merchduckButton.onclick = () => {
  console.log("merchduck button clicked.")
  scrollToTop();
  if (pageSwitchFlag != 0) {
    fadeOutFaq();
    pageSwitchFlag = 0;
  }
}

const switchToFaq = () => {
  pageSwitchFlag = 1;
  scrollToTop();
  if (body.getBoundingClientRect().top == 0) {
    fadeOutContent();
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  console.log("Successfully scrolled to top of page.")
}

const fadeOutContent = () => {

  // footer.style.transform = "translateY(" + 0 + "%)"
  // footer.style.height = "60px"

  contentContainer.classList.add("fade-out-0-5");

  setTimeout(function() {
    contentContainer.classList.remove("fade-out-0-5");
    togglePageContent("hidden", "none", "");
  }, 400);
}

const fadeOutFaq = () => {

  pageSwitchFlag = 1;
  console.log("fadeOutFaq executed.");
  faqContainer.classList.add("fade-out-0-5");
  // footer.classList.add("footer-slide-down");

  setTimeout(function() {
    faqContainer.classList.remove("fade-out-0-5");
    togglePageContent("scroll", "", "none");
  }, 400);

  // setTimeout(function() {
  //   // footer.classList.remove("footer-slide-down");
  //   // footer.style.transform = "translateY(" + 100 + "%)"
  //   // footer.style.height = "30vh"
  // }, 1000)
}

const togglePageContent = (bodyValue, contentContainerValue, faqContainerValue) => {
  body.style.overflow = bodyValue;
  contentContainer.style.display = contentContainerValue;
  faqContainer.style.display = faqContainerValue;
}

window.onresize = () => {
  console.log(navbar.scrollHeight)

}

window.onload = () => {
}


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
