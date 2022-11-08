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
const footer = document.getElementsByTagName("FOOTER")[0];
const tagline = document.getElementsByClassName("tagline")[0];
const firstQuickInfo = document.getElementsByClassName("about-info")[0];
const secondQuickInfo = document.getElementsByClassName("about-info")[1];
const merchduckButton = document.getElementById("main-name");
const body = document.getElementsByTagName("BODY")[0];
const contentContainer = document.getElementsByClassName("content-container")[0];
const faqContainer = document.getElementsByClassName("faq-container")[0];
const navbar = document.getElementsByTagName("NAVBAR")[0];
const wordsOnMainPage = document.getElementsByClassName("word-on-main-page");

document.onscroll = function() {
  // console.log(" Y-axis : " + pageYOffset) //shows Y Offset in console

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

  // // tagline fade
  // if ((viewportHeight / pageYOffset > 4.5) || (pageYOffset <= 0)) {
  //   tagline.style.opacity = "100%";
  // } else if (viewportHeight / pageYOffset < 3.7) {
  //   tagline.style.opacity = "0%";
  // } else {
  //   tagline.style.opacity = ((viewportHeight / pageYOffset) - 3.7) * 1.25
  // }
  //
  // // first info fade
  // if (viewportHeight / pageYOffset > 0.54) {
  //   firstQuickInfo.style.opacity = "100%";
  // } else if (viewportHeight / pageYOffset < 0.52) {
  //   firstQuickInfo.style.opacity = "0%";
  // } else {
  //   firstQuickInfo.style.opacity = ((viewportHeight / pageYOffset) - 0.52) * 50
  // }
  //
  // // second info fade
  // if (viewportHeight / pageYOffset > 0.222) {
  //   secondQuickInfo.style.opacity = "100%";
  // } else if (viewportHeight / pageYOffset < 0.220) {
  //   secondQuickInfo.style.opacity = "0%";
  // } else {
  //   secondQuickInfo.style.opacity = ((viewportHeight / pageYOffset) - 0.220) * 500
  // }

  for (let i = 0; i < wordsOnMainPage.length; i++) {
    if (wordsOnMainPage[i].getBoundingClientRect().top < navbar.scrollHeight) {
      wordsOnMainPage[i].style.opacity = "0";
    } else if (wordsOnMainPage[i].getBoundingClientRect().top > (navbar.scrollHeight + 10)) {
      wordsOnMainPage[i].style.opacity = "1";
    } else {
      wordsOnMainPage[i].style.opacity = (wordsOnMainPage[i].getBoundingClientRect().top - navbar.scrollHeight) / 10;
    }
  }
}

merchduckButton.onclick = async () => {
  await scrollToTop();
  await fadeOutContent();
  await togglePageContent("", "none", "scroll");
}

const switchToFaq = async () => {
  await scrollToTop();
  await fadeOutContent();
  await togglePageContent("none", "", "hidden");
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const fadeOutContent = () => {
  setTimeout(function() {
    contentContainer.classList.add("fade-out")
    contentContainer.classList.remove("fade-out")
  }, 2000);

}

const togglePageContent = (contentContainerValue, faqContainerValue, bodyValue) => {
  body.style.overflow = bodyValue;
  contentContainer.style.display = contentContainerValue;
  faqContainer.style.display = faqContainerValue;
}

window.onresize = () => {
  console.log(navbar.scrollHeight)

}
