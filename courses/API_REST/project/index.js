const API_KEY = '4e82d29e-0132-46e1-b89a-fc019e471a8a';
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites';
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

const randomMichis = document.getElementById('random-michis');
const favouriteMichis = document.getElementById('favourite-michis');
const newMichisButton = document.getElementById('new-michis-button');
const errorSpan = document.getElementById('error-span');

const form = document.getElementById('uploading-form');
const previewContainer = document.getElementById('preview-container');

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

const getCat = async (container, url, apiKey) => {
  try {
    const response = await fetch(
      url,
      apiKey && {
        method: 'GET',
        headers: {
          'x-api-key': apiKey,
        },
      }
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

const removeFromFavourites = async (imageId, url, apiKey) => {
  const response = await fetch(`${url}/${imageId}`, {
    method: 'DELETE',
    headers: {
      'x-api-key': apiKey,
    },
  });

  const data = await response.json();

  if (response.status !== 200) {
    errorSpan.innerHTML = 'Hubo un error: ' + response.status + data.message;
  }

  getCat(favouriteMichis, API_URL_FAVOURITES, API_KEY);
};

const addToFavourites = async (imageId, url, apiKey) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      image_id: imageId,
    }),
  });

  const data = await response.json();

  if (response.status !== 200) {
    errorSpan.innerHTML = 'Hubo un error: ' + response.status + data.message;
  }

  getCat(favouriteMichis, API_URL_FAVOURITES, API_KEY);
};

const uploadMichiPhoto = async () => {
  const response = await fetch(API_URL_UPLOAD, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
    },
    body: formData,
  });

  const data = await response.json();

  if (response.status !== 200) {
    errorSpan.innerHTML = `Hubo un error al subir el michi: ${response.status} ${data.message}`;
    return;
  }

  addToFavourites(data.id, API_URL_FAVOURITES, API_KEY);
};

const showPreview = () => {
  const formData = new FormData(form);
  previewContainer.innerHTML = '';

  if (formData.get('file').type.includes('image')) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const newImg = createElement('img', {
        alt: 'Preview of just uploaded image',
        height: '200',
        src: event.target.result,
      });
      previewContainer.appendChild(newImg);
    };
    reader.readAsDataURL(formData.get('file'));
  }
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
