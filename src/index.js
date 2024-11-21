import './index.css' 
import JS_IMAGE from '../assets/javascript.png';
const container = document.createElement('div'); 
container.className = 'container'; 


const heading = document.createElement('h1');
const headingText = document.createTextNode('I love JavaScript');
heading.appendChild(headingText);


const image = document.createElement('img');
image.src = JS_IMAGE;
image.alt = 'JavaScript Image';


container.appendChild(heading); 
container.appendChild(image); 


document.body.appendChild(container); 
