const firstName = 'Pranav';

//GIVES ERROR
//And so the reason for that again, is that by the time that this script here is executed, this other.js, script.js has not yet been loaded. And so therefore it doesn't find this month variable anywhere in global scope.
// console.log(months);

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