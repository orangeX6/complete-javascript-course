'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// 231. How to Plan a Web Project
// 232. Using the Geolocation API
// 233. Displaying a Map Using Leaflet Library
// 234. Displaying a Map Marker
// 235. Rendering Workout Input Form
// 236. Project Architecture
// 237. Refactoring for Project Architecture
// 238. Managing Workout Data: Creating Classes
// 239. Creating a New Workout
// 240. Rendering Workouts
// 241. Move to Marker On Click
// 242. Working with localStorage
// 243. Final Considerations

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 231. How to Plan a Web Project

//>> Stage 1 -  PROJECT PLANNING  -
//-> 1. User Stories
// Description of the applications functionality from the user's perspective. All user stories put together describes the entire application
//-> 2. Features
//-> 3. FlowChart
// WHAT we will build
//-> 4. Architecture
// HOW we will build it
//>> Stage 2 - DEVELOPMENT
//Implementation of the code

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//L is leaflets namespace
//L is a global variable in leaflets script and so we can access it from here.
//! It is important that this script is included after the leaflets script in html
//? So script.js has access to variables in leaflets script and other.js but leaflets and other.js script won't have access to variables in script.js
//DECLARED IN other.js
//console.log(firstName);

//>>setView method of leaflet -
//setView([latitude,longitude], zoomLevel)
//>>TitleLayer ->
//titleLayer specifies which map you want to use- openstreet, googlemaps,etc. and the themes(appearance)
//default - 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//>> Documentation -
//-> https://leafletjs.com/reference.html

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      // console.log(position);
      console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);

      const coords = [latitude, longitude];

      //('map') is the id of html element
      map = L.map('map').setView(coords, 13);
      console.log(map);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //Handling Clicks on Map
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //Clear Input Fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  //Display Marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
      // .setContent('Workout')
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
