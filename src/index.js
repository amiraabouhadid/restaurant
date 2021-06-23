import home from './home';
import nav from './nav';
import menu from './menu';
import contact from './contact';
import './style.css';



const body = document.getElementsByTagName('body')[0];
body.prepend(nav());


const content = document.getElementById('content');
content.className = 'container-fluid';
content.append(home());
content.append(menu());
content.append(contact());
