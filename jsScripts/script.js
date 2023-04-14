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
 const toggleHamburgerMenu = () => {

  let topBar = document.getElementById('hamburger-top-bar');
  let middleBar = document.getElementById('hamburger-middle-bar');
  let bottomBar = document.getElementById('hamburger-bottom-bar');
  let navButtons = document.getElementsByClassName("navbar-right")[0];
  let hiddenNavBarItems = document.getElementsByClassName('hidden-navbar-items');
  // let sectionHeadings = document.getElementsByClassName('section-heading-container');
  let inputs = document.getElementsByTagName("input");

  if (middleBar.classList.contains("rot-45deg")) {
    topBar.classList.remove("rot45deg");
    middleBar.classList.remove("rot-45deg");
    bottomBar.classList.remove("hidden");
    navButtons.style.maxHeight = null;

    for (i in hiddenNavBarItems) {
      hiddenNavBarItems.item(i).setAttribute('tabindex', '-1');
    }
    
    // if (sectionHeadings.length > 0) {
    //   for (i in sectionHeadings) {
    //     sectionHeadings[i].setAttribute('tabindex', '0');
    //   }
    // }

    if (inputs.length > 0) {
      for (i in inputs) {
        if (typeof(inputs[i]) === Object) {
          inputs[i].setAttribute('tabindex', '0');
        }
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

    // if (sectionHeadings.length > 0) {
    //   for (i in sectionHeadings) {
    //     sectionHeadings[i].setAttribute('tabindex', '-1');
    //   }
    // }

    if (inputs.length > 0) {
      for (i in inputs) {
        if (typeof(inputs[i]) === Object) {
          inputs[i].setAttribute('tabindex', '-1');
        }
        document.getElementById('message-box').setAttribute('tabindex', '-1');
        document.getElementById('order-submit-button').setAttribute('tabindex', '-1');
      }
    }
  }
};
