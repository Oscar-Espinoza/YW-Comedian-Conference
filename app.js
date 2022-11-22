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
]

const comediansListElement = document.getElementById('comedians-list')

comediansList.forEach(comedian => {
  const comedianElement = document.createElement('li')
  comedianElement.classList.add('comedian')
  comedianElement.innerHTML = "<div class='photo'><img src='media/" + comedian.photoUrl + "' ></div>" +
  "<div class='information'>" + 
    "<h3 class='name'>" + comedian.name + "</h3>" +
    "<p class='description'>" + comedian.description + "</p>" +
    "<hr>" +
    "<p class='background'>" + comedian.background + "</p>" +
  "</div>"

  comediansListElement.appendChild(comedianElement)
});