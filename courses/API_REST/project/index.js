const API_KEY = '4e82d29e-0132-46e1-b89a-fc019e471a8a';
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites';

const randomMichis = document.getElementById('random-michis');
const favouriteMichis = document.getElementById('favourite-michis');
const newMichisButton = document.getElementById('new-michis-button');
const errorSpan = document.getElementById('error-span');

const createElement = (type, properties = {}) => {
  const newElement = document.createElement(type);
  const propertiesArray = Object.entries(properties);
  propertiesArray.forEach(([propertyName, value]) => {
    if (propertyName === 'children') {
      value.forEach((child) => {
        newElement.append(child);
      });
      return;
    }
    newElement[propertyName] = value;
  });
  return newElement;
};

const createNewImgContainer = (containerId, imageUrl, imageId) => {
  return createElement('article', {
    className: 'image-container',
    children: [
      createElement('img', {
        src: imageUrl,
        alt: 'Random cat pic',
        width: '250',
      }),
      containerId === 'random-michis'
        ? createElement('button', {
            type: 'button',
            onclick: () =>
              addToFavourites(imageId, API_URL_FAVOURITES, API_KEY),
            innerText: 'Add To Favorites',
          })
        : containerId === 'favourite-michis' &&
          createElement('button', {
            type: 'button',
            onclick: () =>
              removeFromFavourites(imageId, API_URL_FAVOURITES, API_KEY),
            innerText: 'Remove From Favorites',
          }),
    ],
  });
};

const getCat = async (container, url, api_key) => {
  try {
    const response = await fetch(
      `${url}${api_key ? `?api_key=${api_key}` : ''}`
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

    container.innerHTML = '';

    data.forEach((img) => {
      // When getting with api_key, it returns an object with more properties than img.url, img.id, etc.
      const newImgContainer = createNewImgContainer(
        container.id,
        img.image?.url ?? img.url,
        container.id === 'favourite-michis' ? img.id : img.image?.id ?? img.id
      );
      container.append(newImgContainer);
    });
  } catch (error) {
    errorSpan.innerText = `Hubo un error ${error}`;
  }
};

const removeFromFavourites = async (imageId, url, api_key) => {
  const response = await fetch(
    `${url}/${imageId}${api_key ? `?api_key=${api_key}` : ''}`,
    {
      method: 'DELETE',
    }
  );

  const data = await response.json();

  if (response.status !== 200) {
    errorSpan.innerHTML = 'Hubo un error: ' + response.status + data.message;
  }

  getCat(favouriteMichis, API_URL_FAVOURITES, API_KEY);
};

const addToFavourites = async (imageId, url, api_key) => {
  const response = await fetch(
    `${url}${api_key ? `?api_key=${api_key}` : ''}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_id: imageId,
      }),
    }
  );

  const data = await response.json();

  if (response.status !== 200) {
    errorSpan.innerHTML = 'Hubo un error: ' + response.status + data.message;
  }

  getCat(favouriteMichis, API_URL_FAVOURITES, API_KEY);
};

newMichisButton.addEventListener('click', () =>
  getCat(randomMichis, API_URL_RANDOM)
);
document.addEventListener('DOMContentLoaded', () =>
  getCat(randomMichis, API_URL_RANDOM)
);
document.addEventListener('DOMContentLoaded', () =>
  getCat(favouriteMichis, API_URL_FAVOURITES, API_KEY)
);
