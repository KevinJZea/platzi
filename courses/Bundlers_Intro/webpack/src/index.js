const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
  name: 'Kevin J. Zea',
  nickname: 'kevinjzea',
  description: 'My own description.',
  avatar: '...',
  social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/kevinjzea',
      username: 'kevinjzea',
    },
    {
      name: 'instagram',
      url: 'https://instagram.com/kevinjzea',
      username: 'kevinjzea',
    },
  ],

  links: [
    {
      name: 'blog',
      url: 'https://example.com/',
      color: 'red',
      emoji: '📖',
    },
    {
      name: 'podcast',
      url: 'https://example.com/',
      color: 'yellow',
      emoji: '💬',
    },
  ],
  footer: 'Made with Love in Monterrey, México',
};

const main = () => {
  const name = document.createTextNode(data.name);
  const links = data.links
    .map(
      (link) => `
      <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a
          class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}"
          target="_blank"
        >
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`
    )
    .join('');

  const newItem = document.createElement('section');
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
};

main();
