//->> 290
// Why worry about architecture?
// Structure
// Maintainability
// Expandability

// We ll use MVC
// We can use framework like React, Angular, Vue, Svelte

//-> Components of any architecture
//>>    Business Logic
//>>    State
//>>    HTTP Library
//>>    Application Logic (ROUTER)
//>>    Presentation Logic (UI LAYER)

//-> Model-View-Controller (MVC) Architecture
//>> MODEL
//* Business Logic
//* State
//* HTTP Library

//>> CONTROLLER
//* Application Logic
// Bridge between model and views
// Handles UI events and dispatches tasks to model and view

//>> VIEW
//* Presentation logic

//->> 292
//>> config.js
//* This file is used to store the constant variables/properties that we might require at multiple places in the code.
//* Storing it at one place helps us to change them at one place and not need to update it everywhere in the code

//>> helper.js
//* Contains a couple of functions we use over and over in our module, so we dont have to declare them multiple times

//->> 293
//->> PUBLISHER - SUBSCRIBER DESIGN PATTERN
//->> Design patterns in programming are basically just standard solutions to some problems
//>> In publisher - subscriber pattern,
//>> a publisher is some code that knows when to react.
//>> A subscriber is a code that wants to react. The code which should be executed when the event happens
//in forkify it will be addHandlerRender() function because it will contain the event listener method
