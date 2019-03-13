//1.zadatak
"use strict";
var sortArray = [
  { type: "Black", count: "(1014)" },
  { type: "White", count: "(1014)" },
  { type: "Navy", count: "(1014)" },
  { type: "Grey", count: "(1014)" },
  { type: "Green", count: "(1014)" },
  { type: "Red", count: "(1014)" },
  { type: "Multi", count: "(1014)" },
  { type: "Blue", count: "(1014)" },
  { type: "Pink", count: "(1014)" },
  { type: "Beige", count: "(1014)" },
  { type: "Purple", count: "(1014)" },
  { type: "Yellow", count: "(1014)" }
];
var productTypeArray = [
  { type: "Black", count: "(1014)" },
  { type: "White", count: "(1014)" },
  { type: "Navy", count: "(1014)" },
  { type: "Grey", count: "(1014)" },
  { type: "Green", count: "(1014)" },
  { type: "Red", count: "(1014)" }
];
var sleeevLenghtArray = [
  { type: "While", count: "(1014)" },
  { type: "Black", count: "(1014)" },
  { type: "Blue", count: "(1014)" },
  { type: "Rose", count: "(1014)" },
  { type: "Gold", count: "(1014)" },
  { type: "Silver", count: "(1014)" },
  { type: "Space-Gray", count: "(1014)" }
];

function createLiElements(ul, array) {
  array.forEach(function(item) {
    let li = document.createElement("li");
    li.innerHTML = `<span> ${item.type} </span>
    <span class=list__item__count> ${item.count} </span>`;
    li.classList.add("dropdown__list__item");
    ul.appendChild(li);
  });
}
var sortFilterUlElement = document.getElementById("sortFilter");
var productTypeFilterUlElement = document.getElementById("productTypeFilter");
var sleeveLenghtUlElement = document.getElementById("sleeveLenghtFilter");

createLiElements(sortFilterUlElement, sortArray);
createLiElements(productTypeFilterUlElement, productTypeArray);
createLiElements(sleeveLenghtUlElement, sleeevLenghtArray);
