'use strict';

const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

// PART 1
// const song = fetch('https://restcountries.com/v3.1/all')
//   .then(json => json)
//   .then(json => console.log(json));

const getCountryDataXML = country => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  // request.open('GET', `https://restcountries.com/v2/name/india?fullText=true`);
  request.send();

  console.log(request.responseText);
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    const [language] = Object.values(data.languages);
    const [currency] = Object.values(data.currencies);
    // console.log(currency);

    const html = ` <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
  <p class="country__row"><span>💰</span>${currency.name} (${
      currency.symbol
    })</p>
  </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

// btn.addEventListener('click', () => getCountryDataXML('india'));

// getCountryDataXML('india');
// getCountryDataXML('South Korea');
// getCountryDataXML('vietnam');
// getCountryDataXML('germany');

// const req = new XMLHttpRequest();
// req.open('GET', 'https://picsum.photos/1920/1080/');
// req.send();
// console.log(req.responseURL);

// req.addEventListener('load', function () {
//   console.log(this);

//   const img = document.createElement('img');
//   img.src = req.responseURL;

//   console.log(img);

//   img.addEventListener('load', function () {
//     document.body.appendChild(img);
//   });
//   // document.body.appendChild(img);
// });

// // PART 2
// const renderCountry = function (country, className = '') {
//   const [language] = Object.values(country.languages);
//   const { name: currency, symbol } = Object.values(country.currencies)[0];

//   const html = `
//   <article class="country ${className}" >
//     <img class="country__img" src="${country.flags.png}" />
//     <div class="country__data">
//     <h3 class="country__name">${country.name.common}</h3>
//     <h4 class="country__region">${country.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +country.population / 1000000
//     ).toFixed(1)}M people</p>
//       <p class="country__row"><span>🗣️</span>${language}</p>
//       <p class="country__row"><span>💰</span>${currency} (${symbol})</p>
//   </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbourXML = country => {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.com/v3.1/name/${country}?fullText=true`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     renderCountry(data);

//     const neighbor =
//       data.borders[Math.floor(Math.random() * data.borders.length)];

//     console.log(neighbor);

//     if (!neighbor || neighbor === 'PAK') return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       renderCountry(data, 'neighbor');
//     });
//   });
// };

// getCountryAndNeighbourXML('india');
// getCountryAndNeighbourXML('bhutan');
// getCountryAndNeighbourXML('South Korea');
// getCountryAndNeighbourXML('vietnam');
// getCountryAndNeighbourXML('germany');

// PART 3
let timer;

const renderCountry = function (country, className = '') {
  const [language] = Object.values(country.languages);
  const { name: currency, symbol } = Object.values(country.currencies)[0];

  const html = `
  <article class="country ${className}" >
    <img class="country__img" src="${country.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${country.name.common}</h3>
    <h4 class="country__region">${country.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +country.population / 1000000
    ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency} (${symbol})</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  // countriesContainer.innerHTML = '';
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.color = 'white';
  // countriesContainer.style.opacity = 1;
};

const getCountryJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    // console.log(response);
    // !response.ok &&
    //   fetch(`https://http.cat/${response.status}`)
    //     .then(res => res.url)
    //     .then(url => (countriesContainer.innerHTML = `<img src = ${url} />`));

    if (!response.ok)
      throw new Error(`${errorMsg} (${response.status})`, 'Country not found');

    return response.json();
  });
};

const getCountryDataFetch = country => {
  getCountryJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found'
  )
    .then(data => {
      country = data[0];
      renderCountry(country);

      console.log(country);
      const neighbor =
        country.borders &&
        country.borders[Math.floor(Math.random() * country.borders.length)];

      console.log(neighbor);
      if (!neighbor) throw new Error(`No neighbor found`);

      //  Country 2
      return getCountryJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(...data, 'neighbor'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      console.dir(err);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      // console.log(timer);
      // timer && clearTimeout(timer);
      countriesContainer.style.opacity = 1;
      // timer = setTimeout(() => {
      //   countriesContainer.innerHTML = '';
      // }, 10000);
    });
};

// btn.addEventListener('click', function () {
//   getCountryDataFetch('australia');
// });

// console.log(
//   '%c %s %s %s',
//   'color: yellow; background-color: black',
//   '-',
//   err,
//   '-'
//  )

// PART 4

const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(
        `%c You are in ${data.city} city in the state ${data.state} of country ${data.country}`,
        'color:ghostwhite; background-color: mediumslateblue'
      );

      getCountryDataFetch(data.country);
    })
    .catch(err => console.error(err));
};
// whereAmI('19.3436', '72.8006');
// whereAmI(34.4167553, 127.4934203);
// whereAmI(35.116197, 129.126999);

//##################################
//##################################
//##################################
// PART 5 - THE CALLBACK QUEUE
//# https://www.youtube.com/watch?v=8aGhZQkoFbQ
console.log('Hi');

fetch(`https://restcountries.com/v3.1/name/india`)
  .then(res => res.json())
  .then(data => console.log(data));

setTimeout(() => console.log('there'), 0);

console.log('JS Config');
console.log('JS Config');
let x = 900000000;
while (x > 0) {
  if (x % 900000 === 0) console.log(x);
  x--;
}
console.log(6 * 99);
console.log(6 * 99);
console.log(3226 * 32523523);
console.log(6 * 99);
console.log(6 * 99);
console.log(6 * 99);
console.log(6 * 99);
console.log('JS Config');
console.log('JS Config');
console.log(Math.PI * 55);
console.log('JS Config');
console.log('JS Config');
console.log('JS Config');

//##################################
//##################################
//##################################
