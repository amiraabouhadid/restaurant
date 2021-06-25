
const nav= ()=> {
  const navArr = ['Home', 'Menu', 'Contact'];
  const nav = document.createElement('nav');
  nav.className = 'nav bg-dark d-flex justify-content-around p-3 fixed-top'


  navArr.forEach((l, i) => {
    const a= document.createElement('a');
    a.classList= 'nav-link text-light';
    a.href= `#${l.toLowerCase()}`;
    a.innerHTML = l;
    nav.append(a);

  });
  return nav;

};
export default nav;
