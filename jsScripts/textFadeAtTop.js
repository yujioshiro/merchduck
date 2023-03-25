
// const navbar = document.getElementsByTagName("NAVBAR")[0];
// const textToFade = document.getElementsByClassName("text-to-fade");

// window.onscroll = function() {
//     // console.log(" Y-axis : " + pageYOffset) //shows Y Offset in console
  
//     // Fading text as it reaches top of viewportHeight
  
//     for (let i = 0; i < textToFade.length; i++) {
//       if (textToFade[i].getBoundingClientRect().top < (navbar.scrollHeight / 2)) {
//         textToFade[i].style.opacity = "0";
//       } else if (textToFade[i].getBoundingClientRect().top > (navbar.scrollHeight + 10)) {
//         textToFade[i].style.opacity = "1";
//       } else {
//         textToFade[i].style.opacity = (textToFade[i].getBoundingClientRect().top - (navbar.scrollHeight / 2)) / ((navbar.scrollHeight + 10) - (navbar.scrollHeight / 2));
//       }
//     }
//   }