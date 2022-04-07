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
    let templeSite = document.createElement('a');
    let templeLogo = document.createElement('img');

    templeName.textContent = `${temple.name}`; 
    templeAddress.textContent = ` ${temple.address}`;
    templePhone.textContent = ` ${temple.phone}`;
    templeSite.textContent = ` ${temple.site}`;
 
  

    templeLogo.setAttribute('src', temple.imageurl);
    templeLogo.setAttribute('alt', `Logo of ${temple.name}`);
    templeLogo.setAttribute('loading', 'lazy');
    templeSite.setAttribute('href', temple.site);
    templeSite.setAttribute('target', 'blank');

    card.appendChild(templeLogo);
    card.appendChild(templeAddress);
    card.appendChild(templePhone);
    card.appendChild(templeSite);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    
    

  }


