const comediansList = [
  {
    name: 'Ali Wong',
    photoUrl: 'Ali_Wong.jpeg',
    description: 'One of the best comedians in the US',
    background: 'Ali Wong was born and raised in the US in the state of Texas',
  },
  {
    name: 'Dave Chapelle',
    photoUrl: 'Dave_Chapelle.jpeg',
    description: 'His fans call him the goat because he is a legend',
    background: 'Born in ohio, Dave is known all over the world for his comedy',
  },
  {
    name: 'Ali Wong',
    photoUrl: 'Ali_Wong.jpeg',
    description: 'One of the best comedians in the US',
    background: 'Ali Wong was born and raised in the US in the state of Texas',
  },
  {
    name: 'Dave Chapelle',
    photoUrl: 'Dave_Chapelle.jpeg',
    description: 'His fans call him the goat because he is a legend',
    background: 'Born in ohio, Dave is known all over the world for his comedy',
  },
  {
    name: 'Ali Wong',
    photoUrl: 'Ali_Wong.jpeg',
    description: 'One of the best comedians in the US',
    background: 'Ali Wong was born and raised in the US in the state of Texas',
  },
  {
    name: 'Dave Chapelle',
    photoUrl: 'Dave_Chapelle.jpeg',
    description: 'His fans call him the goat because he is a legend',
    background: 'Born in ohio, Dave is known all over the world for his comedy',
  },
];

const comediansListElement = document.getElementById('comedians-list');
let comediansDisplayed = 0;

for (let i = 0; i < 2; i += 1) {
  const comedian = comediansList[i];
  const comedianElement = document.createElement('li');
  comedianElement.classList.add('comedian');
  comedianElement.innerHTML = `
    <div class='photo'><img src='media/${comedian.photoUrl}'></div>
    <div class='information'>
      <h3 class='name'>${comedian.name}</h3>
      <p class='description'>${comedian.description}</p>
      <hr>
      <p class='background'>${comedian.background}</p>
    </div>
    `
  comediansListElement.appendChild(comedianElement);
  comediansDisplayed += 1;
}

document.querySelectorAll('.menu-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  });
});

document.getElementById('about-link').addEventListener('click', () => {
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('about-page').classList.add('active');
  if (document.getElementById('menu').classList.contains('active')) {
    document.getElementById('menu').classList.remove('active');
  }
});

document.getElementById('nav-logo').addEventListener('click', () => {
  document.getElementById('about-page').classList.remove('active');
  document.getElementById('home-page').classList.add('active');
  if (document.getElementById('menu').classList.contains('active')) {
    document.getElementById('menu').classList.remove('active');
  }
});

document.getElementById('more-btn').addEventListener('click', () => {
  for (comediansDisplayed; comediansDisplayed < comediansList.length; comediansDisplayed += 1) {
    const comedian = comediansList[comediansDisplayed];
    const comedianElement = document.createElement('li');
    comedianElement.classList.add('comedian');
    comedianElement.innerHTML = `
      <div class='photo'><img src='media/${comedian.photoUrl}'></div>
      <div class='information'>
        <h3 class='name'>${comedian.name}</h3>
        <p class='description'>${comedian.description}</p>
        <hr>
        <p class='background'>${comedian.background}</p>
      </div>
      `
    comediansListElement.appendChild(comedianElement);
  }
  document.getElementById('more-btn').classList.remove('active');
});