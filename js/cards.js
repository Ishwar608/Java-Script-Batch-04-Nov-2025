// Static JSON data for 5 cards
const cardsData = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    description: 'A calm sunrise over misty mountains — perfect for early risers.',
    image: 'https://picsum.photos/seed/mountain/800/450',
  },
  {
    id: 2,
    title: 'City Nightlife',
    description: 'Vibrant city lights and the pulse of urban evenings.',
    image: 'https://picsum.photos/seed/city/800/450',
  },
  {
    id: 3,
    title: 'Forest Trail',
    description: 'A quiet trail through an evergreen forest — a short escape.',
    image: 'https://picsum.photos/seed/forest/800/450',
  },
  {
    id: 4,
    title: 'Cozy Cabin',
    description: 'Warm lights in a cabin by the lake — a cozy retreat.',
    image: 'https://picsum.photos/seed/cabin/800/450',
  },
  {
    id: 5,
    title: 'Desert Dunes',
    description: 'Gentle dunes under a wide, open sky — serenity and scale.',
    image: 'https://picsum.photos/seed/desert/800/450',
  },
];

function createCard(card) {
  const el = document.createElement('article');
  el.className = 'card';
  el.tabIndex = 0;

  const media = document.createElement('div');
  media.className = 'media';
  media.style.backgroundImage = `url(${card.image})`;

  const content = document.createElement('div');
  content.className = 'content';

  const h3 = document.createElement('h3');
  h3.className = 'title';
  h3.textContent = card.title;

  const p = document.createElement('p');
  p.className = 'desc';
  p.textContent = card.description;

  const extra = document.createElement('div');
  extra.className = 'extra';
  extra.textContent = 'This is extra information you can toggle. It demonstrates a small interaction on the card and keeps the UI compact.';

  const meta = document.createElement('div');
  meta.className = 'meta';

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.type = 'button';
  btn.textContent = 'Learn more';

  btn.addEventListener('click', () => {
    extra.classList.toggle('open');
    btn.textContent = extra.classList.contains('open') ? 'Show less' : 'Learn more';
  });

  meta.appendChild(btn);

  content.appendChild(h3);
  content.appendChild(p);
  content.appendChild(extra);
  content.appendChild(meta);

  el.appendChild(media);
  el.appendChild(content);

  return el;
}

function renderCards() {
  const container = document.getElementById('cards-container');
  if (!container) return;
  container.innerHTML = '';

  cardsData.forEach((card) => {
    const node = createCard(card);
    container.appendChild(node);
  });
}

document.addEventListener('DOMContentLoaded', renderCards);
