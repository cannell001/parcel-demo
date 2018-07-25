//import "../css/styles";

//ES6 Modules
// import { square } from './app';
import square from './app';
import $ from 'jquery';

let i = 3;

function setMessageText(msg) {
    $('#message-ES6').html(msg);
}


// ES5
//setMessageText("The ES5 square of " + i + " is " + square(i));
// document.getElementById('message-ES5').innerHTML = "The ES5 square of 2 is " + square(2);

// ES6 Template Literal
setMessageText(`The ES6 square of ${i} is ${square(i)}`);
// document.getElementById('message-ES6').innerHTML = `The ES6 square of 2 is ${square(2)}`;
$('#message-ES6').click( () => {
    i++;
    setMessageText(`The ES6 square of ${i} is ${square(i)}`);
});
