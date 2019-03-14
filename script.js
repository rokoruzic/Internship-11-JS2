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
    div.classList.add("offers__item");

    let itemImg = document.createElement("img");
    itemImg.src = "./assets/images/offer.jpg";
    itemImg.alt = "Offer";
    itemImg.classList.add("item__img");

    let heartShapeImg = document.createElement("img");
    heartShapeImg.src = "./assets/images/heart-shape.png";
    heartShapeImg.alt = "Hearth Shape";
    heartShapeImg.classList.add("item__heart-shape");

    let heartFullImg = document.createElement("img");
    heartFullImg.src = "./assets/images/heart-full.png";
    heartFullImg.alt = "Hearth Full";
    heartFullImg.classList.add("item__heart-full");

    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = "TALL";
    descriptionP.classList.add("item__img-description");

    let paragraphP = document.createElement("p");
    paragraphP.innerHTML = `<span class=item__paragraph__brand> ${
      offer.brand
    } </span>  ${offer.description}`;
    paragraphP.classList.add("item__paragraph");

    let priceSpan = document.createElement("span");
    priceSpan.innerHTML = `${offer.price}`;
    priceSpan.classList.add("item__price");

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
//3.zadatak.
var dropDownTopAllDivElementsCount = document.getElementsByClassName("dropdown__top__all").length;
for (let i = 0; i < dropDownTopAllDivElementsCount; i++) {
  let dropDownTopAllDivElements = document.getElementsByClassName("dropdown__top__all")[i];

  dropDownTopAllDivElements.addEventListener("mouseenter", function () {
    let allImgElements = document.getElementsByClassName("all__img")[i];
    let allTextElements = document.getElementsByClassName("all__text")[i];
    dropDownTopAllDivElements.classList.add("dropdown__top__all__hover");
    allImgElements.classList.add("dropdown__top__all__hover__all__img");
    allTextElements.classList.add("dropdown__top__all__hover__all__text");
  });

  dropDownTopAllDivElements.addEventListener("mouseleave", function () {
    let allImgElements = document.getElementsByClassName("all__img")[i];
    let allTextElements = document.getElementsByClassName("all__text")[i];
    dropDownTopAllDivElements.classList.remove("dropdown__top__all__hover");
    allImgElements.classList.remove("dropdown__top__all__hover__all__img");
    allTextElements.classList.remove("dropdown__top__all__hover__all__text");
  });
}

var containerSearchFilterElementsCount = document.getElementsByClassName("container__search-filter").length;
for (let i = 0; i < containerSearchFilterElementsCount; i++) {

  let containerSearchFilterElements = document.getElementsByClassName("container__search-filter")[i];

  containerSearchFilterElements.addEventListener("mouseenter", function () {
    let searchFilterImgElements = document.getElementsByClassName("search-filter__img")[i];
    let searchFilterTextElements = document.getElementsByClassName("search-filter__text")[i];
    let searchFilterDropdownElements = document.getElementsByClassName("search-filter__dropdown")[i];
    searchFilterImgElements.classList.add("container__search-filter__hover__search-filter__img");
    searchFilterTextElements.classList.add("container__search-filter__hover__search-filter__text");
    containerSearchFilterElements.classList.add("container__search-filter__hover");
    searchFilterDropdownElements.classList.add("container__search-filter__hover__search-filter__dropdown");
  });

  containerSearchFilterElements.addEventListener("mouseleave", function () {
    let searchFilterImgElements = document.getElementsByClassName("search-filter__img")[i];
    let searchFilterTextElements = document.getElementsByClassName("search-filter__text")[i];
    let searchFilterDropdownElements = document.getElementsByClassName("search-filter__dropdown")[i];
    searchFilterImgElements.classList.remove("container__search-filter__hover__search-filter__img");
    searchFilterTextElements.classList.remove("container__search-filter__hover__search-filter__text");
    containerSearchFilterElements.classList.remove("container__search-filter__hover");
    searchFilterDropdownElements.classList.remove("container__search-filter__hover__search-filter__dropdown");
  });
}

var dropdownListItemElementsCount = document.getElementsByClassName("dropdown__list__item").length;
for (let i = 0; i < dropdownListItemElementsCount; i++) {

  let dropdownListItemElements = document.getElementsByClassName("dropdown__list__item")[i];
  dropdownListItemElements.addEventListener("mouseenter", function () {
    let listItemCountElements = document.getElementsByClassName("list__item__count")[i];
    dropdownListItemElements.classList.add("dropdown__list__item__hover");
    listItemCountElements.classList.add("dropdown__list__item__hover__list__item__count");

  });

dropdownListItemElements.addEventListener("mouseleave",function(){
  let listItemCountElements=document.getElementsByClassName("list__item__count")[i];
    dropdownListItemElements.classList.remove("dropdown__list__item__hover");
    listItemCountElements.classList.remove("dropdown__list__item__hover__list__item__count");
  
  });
}
var offersItemElementsCount = document.getElementsByClassName("offers__item").length;
for (let i = 0; i < offersItemElementsCount; i++) {
  let offersItemElements = document.getElementsByClassName("offers__item")[i];
  offersItemElements.addEventListener("mouseenter", function () {
    let itemHeartFullElement = document.getElementsByClassName("item__heart-full")[i];
    let itemImgDescriptionElement = document.getElementsByClassName("item__img-description")[i];
    itemHeartFullElement.classList.add("offers__item__hover__item__heart-full");
    itemImgDescriptionElement.classList.add("offers__item__hover__item__img-description");


  });
  offersItemElements.addEventListener("mouseleave", function () {
    let itemHeartFullElement = document.getElementsByClassName("item__heart-full")[i];
    let itemImgDescriptionElement = document.getElementsByClassName("item__img-description")[i];
    itemHeartFullElement.classList.remove("offers__item__hover__item__heart-full");
    itemImgDescriptionElement.classList.remove("offers__item__hover__item__img-description");

  });

}
// 4.zadatak
var heartFullElementCount = document.getElementsByClassName("item__heart-full").length;
for (let i = 0; i < heartFullElementCount; i++) {
  let heartFullElement = document.getElementsByClassName("item__heart-full")[i];
  var favoriteCount = 0;
  heartFullElement.addEventListener("click", function () {
    if (!heartFullElement.classList.contains("fullHeart"))
      favoriteCount++;
    heartFullElement.classList.add("fullHeart");
    let favoriteDivElement = document.getElementById("favorites");
    favoriteDivElement.innerHTML = `Favorites: ${favoriteCount}`;
  });
}

//5.zadatak


  




