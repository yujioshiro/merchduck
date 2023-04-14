(() => {
    let footer = document.getElementsByTagName("footer")[0];
    let navBar = document.getElementsByTagName("nav")[0];
    let gallerySection = document.getElementById("more-work-gallery");
    
    footer.style.height = navBar.offsetHeight;
    gallerySection.style.height = window.innerHeight - footer.offsetHeight - footer.offsetHeight + "px";

})()

// var mouse = {'x': 0, 'y': 0};

// homex = 0;
// homey = 0;
// forcex = 0;
// forcey = 0;
// magnet = 10;

// let objectsToJiggle = document.getElementsByClassName("jiggle");

// for (let i = 0; i < 2; i++) { 
//     objectsToJiggle[i].setAttribute('homex', objectsToJiggle[i].getBoundingClientRect().left);
//     objectsToJiggle[i].setAttribute('homey', objectsToJiggle[i].getBoundingClientRect().top);
//     console.log("homex: " + objectsToJiggle[i].getAttribute('homex'));
//     console.log("homey: " + objectsToJiggle[i].getAttribute('homey'));

// }

// document.addEventListener('mousemove', function(e) {
//     mouse = {'x': e.pageX, 'y': e.pageY};
// });

// setInterval(() => {
//     for (let i = 0; i < 2; i++) {
//         position = objectsToJiggle[i].position;
//         x0 = objectsToJiggle[i].offsetLeft;
//         y0 = objectsToJiggle[i].offsetTop;
//         x1 = mouse.x - (objectsToJiggle[i].style.width / 2);
//         y1 = mouse.y - (objectsToJiggle[i].style.width / 2);
//         distancex = x1 - x0;
//         distancey = y1 - y0;

//         distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
//         magnet = distance / 1000; // this changes the strength of the magnet relative to distance
                    
//         powerx = x0 - (distancex / distance) * magnet / distance;
//         powery = y0 - (distancey / distance) * magnet / distance;
        
//         forcex = (forcex + (objectsToJiggle[i].getAttribute('homex') - x0) / 2) / 2;
//         forcey = (forcey + (objectsToJiggle[i].getAttribute('homey') - y0) / 2) / 2;

//         objectsToJiggle[i].style.left = powerx + forcex + "px";
//         objectsToJiggle[i].style.top = powery + forcey + "px";
//     }
//     console.log(objectsToJiggle[0].getAttribute('homex'));
// }, 3000);
