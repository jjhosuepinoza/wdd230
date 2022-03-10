const requestURL = 'https://jjhosuepinoza.github.io/lesson3/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

  function displayCompanies(company) {
    let card = document.createElement('section');
    let companyName = document.createElement('h2');
    let companyAddress = document.createElement('p');
    let companyPhone = document.createElement('p');
    let companySite = document.createElement('a');
    let logo = document.createElement('img');

    companyName.textContent = `${company.name}`; 
    companyAddress.textContent = ` ${company.address}`;
    companyPhone.textContent = ` ${company.phone}`;
    companySite.textContent = ` ${company.site}`;
   
    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `Logo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
  

    card.appendChild(companyName);
    
    card.appendChild(companyAddress);
    card.appendChild(companyPhone);
    card.appendChild(companySite);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    
  }


