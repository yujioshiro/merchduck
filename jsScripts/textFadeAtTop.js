// const sectionHeadingText = document.getElementsByClassName("section-heading-text");
// const descriptionText = document.getElementsByClassName("description-text");

// for (let i = 0; i < sectionHeadingText.length; i++) {

//   words = sectionHeadingText [i].innerText.split(' ');
//   sectionHeadingText[i].innerText = "";
 
//   for (let j = 0; j < words.length; j++) {

//     console.log(words[j]);
//     let preTag = document.createElement('pre');
//     preTag.innerText = words[j] + " ";
//     preTag.classList.add('text-to-fade');
//     sectionHeadingText[i].appendChild(preTag);
//   }
// }
  
//   for (let i = 0; i < descriptionText.length; i++) {

//     words = descriptionText[i].innerText.split(' ');
//     descriptionText[i].innerText = "";
   
//     for (let j = 0; j < words.length; j++) {
  
//       console.log(words[j]);
//       let preTag = document.createElement('pre');
//       preTag.innerText = words[j] + " ";
//       preTag.classList.add('text-to-fade');
//     descriptionText[i].appendChild(preTag);
//     }
//   }
  


// const tagline = document.getElementsByClassName("tagline")[0];
const navbar = document.getElementsByTagName("NAVBAR")[0];
const textToFade = document.getElementsByClassName("text-to-fade");

window.onscroll = function() {
    console.log(" Y-axis : " + pageYOffset) //shows Y Offset in console
  
    // Fading text as it reaches top of viewportHeight
  
    for (let i = 0; i < textToFade.length; i++) {
      if (textToFade[i].getBoundingClientRect().top < (navbar.scrollHeight / 2)) {
        textToFade[i].style.opacity = "0";
      } else if (textToFade[i].getBoundingClientRect().top > (navbar.scrollHeight + 10)) {
        textToFade[i].style.opacity = "1";
      } else {
        textToFade[i].style.opacity = (textToFade[i].getBoundingClientRect().top - (navbar.scrollHeight / 2)) / ((navbar.scrollHeight + 10) - (navbar.scrollHeight / 2));
      }
    }
  }


// // const tagline = document.getElementsByClassName("tagline")[0];
// const navbar = document.getElementsByTagName("NAVBAR")[0];
// const wordsOnMainPage = document.getElementsByClassName("word-on-main-page");
// const body = document.getElementsByTagName("BODY")[0];
// const contentContainer = document.getElementsByClassName("information-section")[0];
// const everythingElseContainer = document.getElementsByClassName("everything-else-container")[0];

// document.onscroll = function() {
//     console.log(" Y-axis : " + pageYOffset) //shows Y Offset in console
  
//     // Fading text as it reaches top of viewportHeight
  
//     for (let i = 0; i < wordsOnMainPage.length; i++) {
//       if (wordsOnMainPage[i].getBoundingClientRect().top < (navbar.scrollHeight / 2)) {
//         wordsOnMainPage[i].style.opacity = "0";
//       } else if (wordsOnMainPage[i].getBoundingClientRect().top > (navbar.scrollHeight + 10)) {
//         wordsOnMainPage[i].style.opacity = "1";
//       } else {
//         wordsOnMainPage[i].style.opacity = (wordsOnMainPage[i].getBoundingClientRect().top - (navbar.scrollHeight / 2)) / ((navbar.scrollHeight + 10) - (navbar.scrollHeight / 2));
//       }
//     }
//   }