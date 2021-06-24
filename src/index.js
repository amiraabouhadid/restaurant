import home from './home.js';
import nav from './nav.js';
import menu from './menu.js';
import contact from './contact.js';





const body = document.getElementsByTagName('body')[0];
body.prepend(nav());
body.append(home());
body.append(menu());
body.append(contact());
