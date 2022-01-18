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

//->> 301
//// createContextualFragment - converts string to real DOM Node object
//// document.createRange().createContextualFragment(newMarkup)
//// newEl.isEqualNode(el) - a method available on all nodes to compare
//// nodeValue - property of the node interface. returns or sets the value of current node

//->> 309
// Writing documentations in javascript.
//>> GO TO View.js
//>> VISIT jsdoc for more info
//->> jsdoc.app
//>> When you hover over the function for whom the comment is written you can get the information about the function in any file in the program

//->>313 Setting up git
/*
 * git init - create an empty repository
 * git config --global user.name "Your Name" - set your name
 * git config --global user.email "Your Email" - set your email
 * git status
 *
 -> ADD files to staging area
 * git add -A
 *
-> Add commit     
 * git commit -m "Initial commit"
 *
 -> check log
 * git log
 -> Reset to a particular commit
 >> git reset --hard <commit-hash>
 * git reset --hard a53bb5b7e9df4477bdce5d6ab085e4b2fbed3051
 -> check current branch
 * git branch

 -> create new branch
 * git branch <branch-name>

 -> switch to a branch
 * git checkout -b <branch-name>

  -> Merge changes into current branch
 * git merge new-feature

  -> GIT CHEAT SHEET 
  >> https://www.bing.com/search?q=github+git+cheat+sheet&cvid=e8fe724304de4b9aa10cd7cbe093c582&aqs=edge.1.69i57j0l7j69i60.3774j0j1&pglt=931&FORM=ANNTA1&PC=ASTS

  *    https://training.github.com/downloads/github-git-cheat-sheet.pdf

  -> Push branch to github
  *  git push origin master 

  -> Create readme file
  * touch README.md
  >> md stands for mark down, just a typing format that we can use to write down documents
 */
