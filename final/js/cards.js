const requestURL = 'https://jjhosuepinoza.github.io/wdd230/final/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['Temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    let card = document.createElement('section');
    let templeName = document.createElement('h2');
    let templeAddress = document.createElement('p');
    let templePhone = document.createElement('p');
    let templeService = document.createElement('p');
    let templeHistory = document.createElement('p');
    let templeEmail = document.createElement('a');
    let templePic = document.createElement('img');

    templeName.textContent = `${temple.name}`; 
    templeAddress.textContent = ` ${"Address: "+ temple.address}`;
    templePhone.textContent = ` ${"Phone: " + temple.phone}`;
    templeEmail.textContent = ` ${temple.site}`;
    templeService.textContent = ` ${"Services //n" + temple.services}`;


    templePic.setAttribute('src', temple.imageurl,);
    templePic.setAttribute('alt', `Logo of ${temple.name}`);
    templePic.setAttribute('loading', 'lazy');
    templeEmail.setAttribute('href', temple.site);
    templeEmail.setAttribute('target', 'blank');
    
    templePic.width=500
    templePic.height=350

    card.appendChild(templeName)
    card.appendChild(templePic);
    card.appendChild(templeAddress);
    card.appendChild(templePhone);
    card.appendChild(templeEmail);
    card.appendChild(templeService)
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    
    

  }


