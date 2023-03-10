
// This method scrolls the document to the top when a user
// clicks on a page they are already looking at
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Hamburger Animation
 let topBar = document.getElementById('hamburger-top-bar');
 let middleBar = document.getElementById('hamburger-middle-bar');
 let bottomBar = document.getElementById('hamburger-bottom-bar');
 let hamburgerContainer = document.getElementsByClassName('hamburger-container')[0];
 let navButtons = document.getElementsByTagName('navbuttons')[0];
 let navBar = document.getElementsByTagName('navbar')[0];

 let hiddenNavBarItems = document.getElementsByClassName('hidden-navbar-items');
 let sectionHeadings = document.getElementsByClassName('section-heading-container');
 let inputs = document.getElementsByTagName("input");


 const toggleHamburgerMenu = () => {
 if (middleBar.classList.contains("rot-45deg")) {
   topBar.classList.remove("rot45deg");
   middleBar.classList.remove("rot-45deg");
   bottomBar.classList.remove("hidden");
   navButtons.style.maxHeight = null;

  for (i in hiddenNavBarItems) {
    hiddenNavBarItems.item(i).setAttribute('tabindex', '-1');
  }

  if (sectionHeadings.length > 0) {
    for (i in sectionHeadings) {
      sectionHeadings[i].setAttribute('tabindex', '0');
    }
  }

  if (inputs.length > 0) {
    for (i in inputs) {
      inputs[i].setAttribute('tabindex', '0');
      document.getElementById('message-box').setAttribute('tabindex', '0');
      document.getElementById('order-submit-button').setAttribute('tabindex', '0');
    }
  }


 } else {
   bottomBar.classList.add("hidden");
   topBar.classList.add("rot45deg");
   middleBar.classList.add("rot-45deg");
   navButtons.style.maxHeight = navButtons.scrollHeight + 'px';

   for (i in hiddenNavBarItems) {
    hiddenNavBarItems.item(i).setAttribute('tabindex', '0');
   }

   if (sectionHeadings.length > 0) {
    for (i in sectionHeadings) {
      sectionHeadings[i].setAttribute('tabindex', '-1');
    }
   }

   if (inputs.length > 0) {
    for (i in inputs) {
      inputs[i].setAttribute('tabindex', '-1');
      document.getElementById('message-box').setAttribute('tabindex', '-1');
      document.getElementById('order-submit-button').setAttribute('tabindex', '-1');
    }
   }
 }
};


hamburgerContainer.addEventListener("click",toggleHamburgerMenu);
hamburgerContainer.addEventListener("keypress",toggleHamburgerMenu);



// ** Template code for slideslow **
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




// ** Code for faq switching on main page **
// (This code is no longer needed with new pages)
// merchduckButton.onclick = () => {
//   scrollToTop();
//   if (pageSwitchFlag != 0) {
//     fadeOutFaq();
//     pageSwitchFlag = 0;
//   }
// }

// const switchToFaq = () => {
//   pageSwitchFlag = 1;
//   scrollToTop();
//   if (body.getBoundingClientRect().top == 0) {
//     fadeOutContent();
//   }
// }

// const fadeOutContent = () => {

//   // footer.style.transform = "translateY(" + 0 + "%)"
//   // footer.style.height = "60px"

//   contentContainer.classList.add("fade-out-0-5");

//   setTimeout(function() {
//     contentContainer.classList.remove("fade-out-0-5");
//     togglePageContent("hidden", "none", "");
//   }, 400);
// }

// const fadeOutFaq = () => {
//   pageSwitchFlag = 1;

//   faqContainer.classList.add("fade-out-0-5");
//   // footer.classList.add("footer-slide-down");

//   setTimeout(function() {
//     faqContainer.classList.remove("fade-out-0-5");
//     togglePageContent("scroll", "", "none");
//   }, 400);

//   // setTimeout(function() {
//   //   // footer.classList.remove("footer-slide-down");
//   //   // footer.style.transform = "translateY(" + 100 + "%)"
//   //   // footer.style.height = "30vh"
//   // }, 1000)
// }

// const togglePageContent = (bodyValue, contentContainerValue, faqContainerValue) => {
//   body.style.overflow = bodyValue;
//   contentContainer.style.display = contentContainerValue;
//   faqContainer.style.display = faqContainerValue;
// }