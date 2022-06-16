const API_KEY = "4e82d29e-0132-46e1-b89a-fc019e471a8a";
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2";
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites";

const randomMichis = document.getElementById("random-michis");
const favoriteMichis = document.getElementById("favorite-michis");
const newMichisButton = document.getElementById("new-michis-button");
const errorSpan = document.getElementById("error-span");

const createElement = (type, properties = {}) => {
  const newElement = document.createElement(type);
  const propertiesArray = Object.entries(properties);
  propertiesArray.forEach(([propertyName, value]) => {
    if (propertyName === "children") {
      value.forEach((child) => {
        newElement.append(child);
      });
      return;
    }
    newElement[propertyName] = value;
  });
  return newElement;
};

const getCat = (container, url, api_key) => async () => {
  try {
    const response = await fetch(
      `${url}${api_key ? `?api_key=${api_key}` : ""}`
    );
    const data = await response.json();

    if (response.status !== 200) {
      errorSpan.innerText = `Hubo un error ${response.status}`;
      return;
    }
    if (data.length === 0) {
      errorSpan.innerText = `No hay michis que mostrar. :(`;
      return;
    }

    if (container.children.length > 0) {
      data.forEach((img, index) => {
        [...container.getElementsByTagName("img")][index].src = img.url;
      });
      return;
    }

    data.forEach((img) => {
      const newImgContainer = createElement("article", {
        className: "image-container",
        children: [
          createElement("img", {
            src: img.url,
            alt: "Random cat pic",
            width: "250",
          }),
          createElement("button", {
            type: "button",
            onclick: addToFavorites,
            innerText: "Add To Favorites",
          }),
        ],
      });

      container.append(newImgContainer);
    });
  } catch (error) {
    errorSpan.innerText = `Hubo un error ${error}`;
  }
};

const addToFavorites = () => {
  console.log("Added to favorites");
};

newMichisButton.addEventListener("click", getCat(randomMichis, API_URL_RANDOM));
document.addEventListener(
  "DOMContentLoaded",
  getCat(randomMichis, API_URL_RANDOM)
);
document.addEventListener(
  "DOMContentLoaded",
  getCat(favoriteMichis, API_URL_FAVORITES, API_KEY)
);
