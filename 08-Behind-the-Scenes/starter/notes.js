/*


//HOW JAVASCRIPT WORKS _ 
JS is a high level, object oriented, multi paradigm programming language



High Level  

What is a Javascript engine? 
A computer program that simply executes js code.
Every browser has its own JS engine. 
Chrome uses the V8 engine. It also powers nodeJS.
Every JS engine contains 
1 . Callstack 
2. Heap

1. Callstack - 
where our code is executed 
2. Heap - 
Unstructured memory pool where objects are stored.


Compilation vs Interpretation
Compilation - entire code is converted into machine code at once, and written to a binary file that can be executed by a computer, way later than its compilation.

Source code --Compilation-- > Portable File: Machine code-- Execution--> Program running. 

Interpretation - Interpreter runs through the source code line by line. code is written and executed all at the same time.
Source code ------Execution line by line----> Program running.

Previously JS used to be a fully interpreted language, but interpreted languages are slow.

Now JS uses a combination of both compilation and interpretation, i.e., Just in time compilation (JIT).

Entire code is converted into machine code at once, then executed immediately. 
Source code --Compilation-- >  Machine code-- Execution--> Program running.
This is lot faster than executing code line by line

JIT compilation 
Parsing 
(Abstract Syntax Tree)
|
V
Compilation
|	
V
Execution
(Happens in call stack)

APIs are functionality provided to the engine but are not actually a part of Javascript itself.
Javascript simply gets access to these APIs through the global window object.
But it still makes sense that the APIs are still part of the runtime, because a runtime is just like a box that contains all the javascript related stuff that we need.
A typical javascript runtime also includes a so called javascript callback queue.
Its a data structure that contain all the callback functions that are ready to be executed. 
For eg - click, timer, data ... 
APIs eg - web apis, (c++ threads,binding in nodeJS)



Garbage Collected

Interpreted or just-in-time compiled

Multi-Paradigm - 
1. Procedural programming
2. Object oriented programming
3. Functional Programming


Prototype-based Object-oriented
1. Almost everything in js is an object. 


First Class Functions
In a language with first class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions.

Dynamic
Dynamically-typed Language: 
No data type definitions. Types becomes known at runtime. Data type of variable is automatically changed.

If you want to use javascript as a strongly type languagge then you should learn about Typescript

Single Threaded


Non-blocking event loop concurrency model - 
Concurrency model : How the javascript engine handles multiple tasks happening at the same time.

Why we need it ? - coz js runs in one single thread, so it can only do one thing at a time.

So what about long running task?
Sounds like it would block the single thread. However, we want non blocking behavior!

How do we achieve that ? 
By using an event loop : takes long running tasks, executed them in the background, and puts them in the main thread once they are finished.


*/
