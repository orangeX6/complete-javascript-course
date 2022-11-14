'use strict';

const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

//####################################
//####################################
//####################################
//####################################
//####################################
// PART 1
// const song = fetch('https://restcountries.com/v3.1/all')
//   .then(json => json)
//   .then(json => console.log(json));

// console.log('will get location');
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
// getCountryDataXML('india');
// console.log('finished getting location');

// btn.addEventListener('click', () => getCountryDataXML('india'));

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

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 2
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

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 3
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
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  // countriesContainer.innerHTML = '';
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.color = 'white';
  countriesContainer.style.opacity = 1;
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

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 4

// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       console.log(
//         `%c You are in ${data.city} city in the state ${data.state} of country ${data.country}`,
//         'color:ghostwhite; background-color: mediumslateblue'
//       );

//       getCountryDataFetch(data.country);
//     })
//     .catch(err => console.error(err));
// };

// whereAmI('19.3436', '72.8006');
// whereAmI(34.4167553, 127.4934203);
// whereAmI(35.116197, 129.126999);

//##################################
//##################################
//##################################
//####################################
//####################################
//####################################
//####################################
//####################################
//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 5 - THE CALLBACK QUEUE
//# https://www.youtube.com/watch?v=8aGhZQkoFbQ
// console.log('Hi');

// fetch(`https://restcountries.com/v3.1/name/india`)
//   .then(res => res.json())
//   .then(data => console.log(data));

// setTimeout(() => console.log('there'), 0);

// console.log('JS Config');
// console.log('JS Config');
// let x = 900000000;
// while (x > 0) {
//   if (x % 900000 === 0) console.log(x);
//   x--;
// }
// console.log(6 * 99);
// console.log(6 * 99);
// console.log(3226 * 32523523);
// console.log(6 * 99);
// console.log(6 * 99);
// console.log(6 * 99);
// console.log(6 * 99);
// console.log('JS Config');
// console.log('JS Config');
// console.log(Math.PI * 55);
// console.log('JS Config');
// console.log('JS Config');
// console.log('JS Config');

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 5 - CONTINUED
// EVENT Loop in practice

//# 1
// console.log('Hi');
// setTimeout(() => console.log('there'), 0);
// setTimeout(() => console.log('there'), 0);
// setTimeout(() => console.log('there'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// setTimeout(() => console.log('there'), 0);

// console.log('JS Config');
// console.log('JS Config');
// let x = 900000000;
// while (x > 0) {
//   if (x % 900000 === 0) console.log(x);
//   x--;
// }
// console.log(6 * 99);
// console.log(6 * 99);
// console.log(3226 * 32523523);
// console.log(6 * 99);
// console.log(6 * 99);
// console.log(6 * 99);
// console.log(6 * 99);
// console.log('JS Config');
// console.log('JS Config');
// console.log(Math.PI * 55);
// console.log('JS Config');
// console.log('JS Config');

// # 2
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 9999999; i++) {}
//   console.log(res);
// });

// let x = 900000000;
// while (x > 0) {
//   if (x % 90000000 === 0) console.log(x);
//   x--;
// }
// console.log(6 * 99);
// console.log(6 * 99);
// console.log('Test end');

// navigator.geolocation.getCurrentPosition(
//   pos => console.log(pos),
//   res => console.log(res)
// );

//####################################
//####################################
//####################################
//####################################
//####################################
//->  PART 6 - BUILDING PROMISE

// # 1
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve('You win 💰💵');
//     } else {
//       reject(new Error('You lost ☠️'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// # 2
// const wait = seconds =>
//   new Promise(res =>
//     setTimeout(() => res(`Waited for ${seconds} seconds`), seconds * 1000)
//   );

// wait(2)
//   .then(res => {
//     console.log(res);
//     return wait(3);
//   })
//   .then(res => console.log(res));

// wait(1)
//   .then(res => {
//     console.log(res);
//     return wait(1);
//   })
//   .then(res => {
//     console.log(res);
//     return wait(1);
//   })
//   .then(res => {
//     console.log(res);
//     return wait(1);
//   })
//   .then(res => {
//     console.log(res);
//   });

// Promise.resolve('resolved').then(res => console.log(res));
// Promise.reject(new Error('Problem!')).catch(rej => console.error(rej));

//#3 GEOLOCATION

// navigator.geolocation.getCurrentPosition(res => console.log(res));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// const getPosition = () =>
//   new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });

// // getPosition().then(data => console.log(data));

// const whereAmI = () => {
//   getPosition()
//     .then(data => {
//       const { latitude: lat, longitude: lng } = data.coords;
//       console.log(lat, lng);

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=203587146895865211996x1290`
//       );
//     })

//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       console.log(
//         `%c You are in ${data.city} city in the state ${data.state} of country ${data.country}`,
//         'color:ghostwhite; background-color: mediumslateblue'
//       );

//       getCountryDataFetch(data.country);
//     })
//     .catch(err => console.error(err));
// };

// whereAmI();

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 7

// const imageContainer = document.querySelector('.images');
// // const wait = seconds =>
// //   new Promise(res =>
// //     setTimeout(() => res(`Waited for ${seconds} seconds`), seconds * 1000)
// //   );

// const wait = seconds => {
//   return new Promise(res => {
//     setTimeout(res, seconds * 1000);
//   });
// };

// const createImage = path => {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = path;
//     // console.log(img);

//     img.addEventListener('load', () => {
//       imageContainer.appendChild(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => reject(new Error('Image not found')));
//   });
// };

// let image;
// createImage('img/img-1.jpg')
//   .then(img => {
//     image = img;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     image = img;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     image = img;
//     return wait(2);
//   })
//   .then(() => (image.style.display = 'none'))
//   .catch(err => console.error(err));

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 8 - ASYNC AWAIT

const getPosition = () => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

const whereAmI = async function (country) {
  try {
    // const pos = await getPosition();
    // console.log(pos);

    // const { latitude: lat, longitude: lng } = pos.coords;
    // console.log(lat, lng);

    // const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    //         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=203587146895865211996x1290`
    //       );
    // if (!resGeo.ok) throw new Error('Problem getting current location data');

    // const dataGeo = await resGeo.json();

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) throw new Error('Problem getting country');

    const data = await response.json();

    renderCountry(data[0]);
    // console.log(data);

    return `You are in ${data[0].name.common} with the capital ${data[0].capital}`;
  } catch (err) {
    console.error(`${err}💥💥💥💥`);
    renderError(`Something went wrong💥 ${err.message}`);

    throw err;
  }
};

// whereAmI('india');
// whereAmI('india');
// whereAmI('india');

// console.log('1: Will get location');
// whereAmI('indiaa')
//   .then(cap => {
//     console.log(`2: ${cap}`);
//   })
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3:Finished getting location'));

// (async () => {
//   try {
//     console.log('1: Will get location');
//     const cap = await whereAmI('korea');
//     console.log(`2: ${cap}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

const getJSON2 = async (url, errorMsg = 'Something went wrong') => {
  const res = await fetch(url);

  if (!res.ok)
    throw new Error(`${errorMsg} (${res.status})`, 'Country not found');

  return res.json();
};

//####################################
//####################################
//####################################
//####################################
//####################################
//-> PART 8 - PROMISE ALL, RACE, ALLSETTLED , ANY
const get3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON2(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON2(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON2(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON2(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON2(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON2(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    const capitalCities = data.map(data => data[0].capital[0]);

    console.log(capitalCities);
    // renderCountry(data);
  } catch (err) {
    console.error(err);
  }
};

get3Countries('india', 'korea', 'indonesia');
