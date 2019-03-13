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

//2.zadatak
function createOfferElements(array) {
  var mainOffersElement = document.getElementById("offers");
  array.forEach(function(offer) {

    let div = document.createElement("div");
    div.classList.add("offers_item");

    let itemImg=document.createElement("img");
    itemImg.classList.add("item__img");
    itemImg.src="assets/images/offer.jpg";
    itemImg.alt="Offer";

    let heartShapeImg = document.createElement("img");
    heartShapeImg.classList.add("item_heart-shape");
    heartShapeImg.src = "assets/images/offer.jpg";
    heartShapeImg.alt = "Hearth Shape";

    let heartFullImg = document.createElement("img");
    heartFullImg.classList.add("item_heart-full");
    heartFullImg.src = "./assets/images/heart-shape.png";
    heartFullImg.alt = "Hearth Full";

    let descriptionP = document.createElement("p");
    descriptionP.classList.add("item_img-description");
    descriptionP.innerHTML = "TALL";

    let paragraphP = document.createElement("p");
    paragraphP.classList.add("item__paragraph");
    paragraphP.innerHTML = `<span class=item__paragraph__brand> ${
      offer.brand
    } </span>  ${offer.description}`;

    let priceSpan = document.createElement("span");
    priceSpan.classList.add("item__price");
    priceSpan.innerHTML = `${offer.price}`;

    div.appendChild(itemImg);
    div.appendChild(heartShapeImg);
    div.appendChild(heartFullImg);
    div.appendChild(descriptionP);
    div.appendChild(paragraphP);
    div.appendChild(priceSpan);
    mainOffersElement.appendChild(div);

  });
}

var offersArray = [
  {
    brand: "",
    description: "Wrangler small logo crew neck t-shirt in white",
    price: "£16.63"
  },
  {
    brand: "",
    description: "Wrangler logo chest stripe rugby polo in blue/white",
    price: "£50.63"
  },
  {
    brand: "",
    description: "Wrangler kobel retro large logo ringer t-shirt in white",
    price: "£20.97"
  },
  { brand: "", description: "Lyle & Scott polo in burgundy", price: "£44.12" },
  {
    brand: "COLLUSION",
    description: "Unisex long sleeve t-shirt with graphic print in neon green",
    price: "£12.29"
  },
  {
    brand: "ASOS DESIGN",
    description: "Disney oversized t-shirt with rainbow",
    price: "£22.42"
  },
  {
    brand: "COLLUSION",
    description: "Unisex oversized t-shirt with back print",
    price: "£10.12"
  },
  {
    brand: "ASOS DESIGN",
    description: "Mickey reloxed t-shirt with retro print",
    price: "£18.08"
  }
];
createOfferElements(offersArray);
