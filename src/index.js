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


if (document.URL.includes('#menu')) {
  content.append(menu());
}
else if (document.URL.includes('contact')) {
  content.append(contact());
} else {
  content.append(home());
}


content.append(footer());
