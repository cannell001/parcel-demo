import "../scss/styles";

//ES6 Modules

// import { square } from './app';

import square from './app';


// ES5
document.getElementById('message-ES5').innerHTML = "The ES5 square of 2 is " + square(2);

// ES6 Template Literal
document.getElementById('message-ES6').innerHTML = `The ES6 square of 2 is ${square(2)}`;
