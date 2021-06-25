import home from './home';
import menu from './menu';
import contact from './contact';
import footer from './footer';
import nav from './nav';
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
