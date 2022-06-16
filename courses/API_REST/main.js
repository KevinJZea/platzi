const API_URL = "https://api.thecatapi.com/v1/images/search?limit=6";
const imagesContainer = document.getElementById("images-container");
const button = [...document.getElementsByTagName("button")][0];

const getCat = (url) => async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (imagesContainer.children.length > 0) {
      data.forEach((img, index) => {
        imagesContainer.children[index].src = img.url;
      });
      return;
    }

    data.forEach((img) => {
      const newImg = createElement("img", {
        src: img.url,
        alt: "Foto aleatoria de gatos",
        width: "300",
      });

      imagesContainer.append(newImg);
    });
  } catch (error) {
    console.error(error);
  }
};

const createElement = (type, properties = {}) => {
  const newElement = document.createElement(type);
  const propertiesArray = Object.entries(properties);
  propertiesArray.forEach(([propertyName, value]) => {
    newElement[propertyName] = value;
  });
  return newElement;
};

button.addEventListener("click", getCat(API_URL));
document.addEventListener("DOMContentLoaded", getCat(API_URL));
