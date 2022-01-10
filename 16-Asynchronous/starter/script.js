'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const language = Object.values(data.languages)[0];
  const [currency] = Object.values(Object.values(data.currencies)[0]);

  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
      <h3 class="country__name">${data.name.common} </h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people </p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
  </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
//// 246. Asynchronous JavaScript, AJAX and APIs
//// 248. Our First AJAX Call: XMLHttpRequest
//// 249. [OPTIONAL] How the Web Works: Requests and Responses
//// 250. Welcome to Callback Hell
//// 251. Promises and the Fetch API
//// 252. Consuming Promises
//// 253. Chaining Promises
//// 254. Handling Rejected Promises
//// 255. Throwing Errors Manually
//// 256. Coding Challenge #1
//// 257. Asynchronous Behind the Scenes: The Event Loop
//// 258. The Event Loop in Practice
//// 259. Building a Simple Promise
//// 260. Promisifying the Geolocation API
//// 261. Coding Challenge #2
//// 262. Consuming Promises with Async/Await
//// 263. Error Handling With try...catch
//// 264. Returning Values from Async Functions
//// 265. Running Promises in Parallel
//// 266. Other Promise Combinators: race, allSettled and any
//// 267. Coding Challenge #3

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 248. Our First AJAX Call: XMLHttpRequest

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  // request.open('GET', 'https://restcountries.com/v3.1/name/India');
  request.open(
    'GET',
    `https://restcountries.com/v2/name/${country}?fullText=true`
  );
  request.send(); //Will fetch it Asynchronously

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    // Can also do this FYI
    //  console.log(request.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name} </h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people </p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0].name
            } </p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            } </p>
        </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('India');
getCountryData('Korea (Republic of)');
*/

// If you reload it a few times, the data might appear in a different order. Its coz data appears at slightly different times on each load. This shows non blocking behavior.

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 250. Welcome to Callback Hell

/*
const getCountryAndNeighbor = function (country) {
  ////AJAX Call Country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send(); //Will fetch it Asynchronously

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    ////Render Country
    renderCountry(data);

    ////Get Neighbor Country
    const [neighbor] = data.borders;

    if (!neighbor) return;
    ////AJAX Call Country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbor');
    });
  });
};

getCountryAndNeighbor('India');
// getCountryAndNeighbor('uk');
getCountryAndNeighbor('canada');
// getCountryAndNeighbor('Korea (Republic of)');
*/

//-> Call Back Hell -
//>> Call back hell is when we have a lot of nested call backs in order to execute asynchronous tasks in sequence.
// This happens to all asynchronous tasks which are handled by callbacks
//It makes code hard to maintain
//-> Since ES6 there is a way to escape the callback Hell and its promises.
//*EXAMPLE

/*
setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 secs passed');
    setTimeout(() => {
      console.log('3 secs passed');
      setTimeout(() => {
        console.log('4 secs passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 250
//-> Call Back Hell -
//>> Call back hell is when we have a lot of nested call backs in order to execute asynchronous tasks in sequence.
//-> Since ES6 there is a way to escape the callback Hell and its promises.

//251
//251. Promises and the Fetch API
//-> PROMISE: (ES6 2015)
//>>Definition. An Object that is used as a placeholder for the future result of an asynchronous operation
//? Advantages of Using Promises ?
//? 1. We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
//? 2. Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 252. Consuming Promises
// 253. Chaining Promises
// 254. Handling Rejected Promises
// 255. Throwing Errors Manually

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// We create an error using the error constructor function (new Error())
//-> We use the throw keyword which will immediately terminate the execution of current function just like return
//? The effect of creating and throwing error in any of the then method is that the promise will immediately be rejected

// const getCountryData = function (country) {
//   ////Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//     //// Handling rejection - Solution 1.
//     //// .then(
//     ////   response => response.json(),
//     ////   err => alert(err)
//     //// )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];
//       if (!neighbor) return;

//       ////Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbor'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong! 💥💥💥 ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  ////Country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`,
    'Country Not Found'
  )
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
      if (!data[0].borders) throw new Error('No neighbor found!');
      const neighbor = data[0].borders[0];
      ////Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country Not Found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbor'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong! 💥💥💥 ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('India');
//   // getCountryData('canada');
// });

// getCountryData('australia');

//// btn.addEventListener('click', getCountryData.bind('canada'));

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 256. Coding Challenge #1
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=203587146895865211996x1290`
    // `https://geocode.xyz/${lat},${lng}?geoit=json`
  )
    .then(response => {
      //// console.log(response);

      if (!response.ok)
        throw new Error(`Problem with Geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      //// console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.country}?fullText=true`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
*/
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 258. The Event Loop in Practice
//Promise.resolve() basically allows us to build a promise that is immediately resolved, immediately has a success value

//! CAUTION!!!!!!!!!!!! DONT RUN ON SLOW PC
/*
//* THE CODE DISPLAYS THAT PROMISES ARE STORED IN MICRO TASKS QUEUE WHICH TAKES PRIORITY OVER CALL BACK QUEUE AND THE CODE IN CALL BACK QUEUE WHICH IN THIS CASE IS 
//>> setTimeout(() => console.log('0 sec timer'), 0);
//* WILL ONLY BE EXECUTED AFTER THE PROMISES.

console.log(`Test Start`);
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 259. Building a Simple Promise
//>> We create new promise using the promise constructor.
//* Promises are just a special kind of object in JS
//-> Takes one argument i.e executor function
//*  As soon as the promise constructor runs, it will automatically execute the executor function.
//* And as it executes this function, it will do so by passing in two other arguments.
//* And those arguments are the resolve and reject functions.

/*
//Lets say we win in 50% cases, lose 50% cases
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('YOU WIN!!! 💰💸');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//-> PROMISIFYING
//>> Promisifying means to convert callback based asynchronous behavior to promise based.

//Ex. Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec passed');
    return wait(1);
  })
  .then(() => console.log('4 sec passed'));
*/

/*
setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 secs passed');
    setTimeout(() => {
      console.log('3 secs passed');
      setTimeout(() => {
        console.log('4 secs passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

//-> RESOLVING PROMISE IMMEDIATELY
/*
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).then(x => console.error(x));
*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 260. Promisifying the Geolocation API
/*
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

console.log('Getting Position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //   navigator.geolocation.getCurrentPosition(
    //     position => resolve(position),
    //     err => reject(new Error(err))
    //   );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=203587146895865211996x1290`
      );
    })
    .then(response => {
      //// console.log(response);

      if (!response.ok)
        throw new Error(`Problem with Geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      //// console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.country}?fullText=true`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI);

*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 261. Coding Challenge #2
/*
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagePath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Failed to load image'));
    });
  });
};

let currentImage;
createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log(`Image 3 loaded`);
    return wait(2);
  })
  .then(() => (currentImage.style.display = 'none'))
  .catch(err => console.log(err));
// createImage('img/img-2.jpg');
// createImage('img/img-3.jpg');
// createImage('img/img-4.jpg');
*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//// 263. Error Handling With try...catch
//// 264. Returning Values from Async Functions
//// 265. Running Promises in Parallel
//// 266. Other Promise Combinators: race, allSettled and any
//// 267. Coding Challenge #3

// 262. Consuming Promises with Async/Await
//-> Since ES 17 there is an easier way of consuming promises, and that is async/await

//>> Inside a async function we can have one or more await

const whereAmI = async function (country) {
  await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
};
