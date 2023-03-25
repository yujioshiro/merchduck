"use strict";


const params = new URLSearchParams({
//   param1: 'B00760033'
});

// fetch('/.netlify/functions/myTokenHider?')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

fetch('../.netlify/functions/token-hider?' + params.toString())
  .then((response) => response.json())
  .then((data) => {
    // Use the data in your JavaScript code
    console.log(data[0]["sku"]);
    // ...other uses of the data obtained using Netlify token-hider
  })
  .catch((error) => {
    console.error('**********Error********** ' + error);
  });





let calculate = () => {
  let blankQuantity = parseInt(document.getElementById("quantity").value);
  let frontPrintCount = parseInt(document.getElementById("front-print-count").value);
  let backPrintCount = parseInt(document.getElementById("back-print-count").value);
  let rSleevePrintCount = parseInt(document.getElementById("rsleeve-print-count").value);
  let lSleevePrintCount = parseInt(document.getElementById("lsleeve-print-count").value);
  let otherPrintCount = parseInt(document.getElementById("other-print-count").value);


  let frontPrintCountHours, backPrintCountHours, rSleevePrintCountHours, lSleevePrintCountHours, otherPrintCountHours;

  frontPrintCount ? (frontPrintCountHours = 1 + (frontPrintCount - 1) * 0.3) : (frontPrintCountHours = 0);
  backPrintCount ? (backPrintCountHours = 1 + (backPrintCount - 1) * 0.3) : (backPrintCountHours = 0);
  rSleevePrintCount ? (rSleevePrintCountHours = 1 + (rSleevePrintCount - 1) * 0.3) : (rSleevePrintCountHours = 0);
  lSleevePrintCount ? (lSleevePrintCountHours = 1 + (lSleevePrintCount - 1) * 0.3) : (lSleevePrintCountHours = 0);
  otherPrintCount ? (otherPrintCountHours = 1 + (otherPrintCount - 1) * 0.3) : (otherPrintCountHours = 0);

  let setupCount = frontPrintCount + backPrintCount + rSleevePrintCount + lSleevePrintCount + otherPrintCount;

  let setupHours = setupCount * 0.5;
  let setupCost = setupCount * 30 + blankQuantity * (setupCount * 0.35);

  let totalHoursMultiplier = frontPrintCountHours + backPrintCountHours + rSleevePrintCountHours + lSleevePrintCountHours + otherPrintCountHours;

  let totalHours = blankQuantity / (30 / totalHoursMultiplier) + setupHours;
  let totalPrintingCost = setupCost + totalHours * 153;

  document.getElementById("total-cost").innerHTML = "$" + Math.round(totalPrintingCost * 100) / 100;
}

