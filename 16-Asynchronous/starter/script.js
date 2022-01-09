'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

// 246. Asynchronous JavaScript, AJAX and APIs
//>> Coordinating behavior of a program over a period of time
//>> Asynchronous means not occurring at the same time
//-> Asynchronous code is executed after a task that runs in the "background" finishes.
//-> Asynchronous code is  'non-blocking'
//-> Execution doesn't wait for an asynchronous task to finish its work.

//Example of asynchronous code in js
//* 1. Asynchronous image loading with event and callback
//img.src -> loading of image happens asynchronously
//we provide the callback function to the load event to call the function once the image is loaded and not right away
//* 2. Geolocation API or AJAX calls, etc
//? Callback functions alone do NOT make code asynchronous

//////////////////////////////////////////////////
//-> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//->> AJAX
//>> Stands for Asynchronous Javascript And XML.
//-> Allows us to communicate with remote web servers in an asynchronous way.
//-> With AJAX calls, we can REQUEST DATA from web servers dynamically

//?HOW AJAX WORKS ?
//? Client <====Request/Response====> Webserver

//? AJAX is a term which got popular back and so we still use it. But most apis don't use XML data format these days
//-> Most popular API data format now is JSON

//////////////////////////////////////////////////
//-> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//->> API
//>> Stands for Application Programming Interface.
//-> A piece of software that can be used by another piece of software, in order to allow applications to talk to each other
//Example - DOM API, Geolocation API, etc.

//? "Online" API - Application running on a server, that receives requests for data, and sends data back to response.
//? We simply call these APIs or WebAPIs

//There are APIs about everything. Example ->
// For travelling app you can get an api for
//* Weather data
//* Data about countries
//* Flights Data
//* Currency conversion data
//* APIs for sending email or SMS
//* Google Maps
//There are millions of possibilities

// 247. IMPORTANT: API URL Change
//-> USE THIS
// https://restcountries.com/v2/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// 248. Our First AJAX Call: XMLHttpRequest
//?There are multiple ways to do AJAX calls
//>> We will use XMLHttpRequest in this lecture
//CORS - Cross Origin Resource Sharing
const request = new XMLHttpRequest();

request.open('GET', '');
