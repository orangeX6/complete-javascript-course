const firstName = 'Pranav';

//GIVES ERROR
//And so the reason for that again, is that by the time that this script here is executed, this other.js, script.js has not yet been loaded. And so therefore it doesn't find this month variable anywhere in global scope.
// console.log(months);
