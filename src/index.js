import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import footer from './footer.js';
import nav from './nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



const body = document.getElementsByTagName('body')[0];
body.prepend(nav());

const content = document.createElement('div');
content.id = 'content';
body.append(content);
content.append(home());
const breakLine = document.createElement('hr');
content.appendChild(breakLine);
content.append(menu());
content.appendChild(breakLine);
content.append(contact());
content.append(footer());
