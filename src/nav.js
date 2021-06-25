
const nav = () => {
  const navArr = ['Home', 'Menu', 'Contact'];
  const nav = document.createElement('nav');
  nav.className = 'nav bg-dark d-flex justify-content-around p-3 fixed-top';

  navArr.forEach((l) => {
    const a = document.createElement('a');
    const content = document.getElementById('content');
    a.classList = 'nav-link text-light';
    a.href = `#${l.toLowerCase()}`;
    a.id = `${l.toLowerCase()}Link`;
    a.onclick = function(){
      setTimeout(function(){
          window.location.reload();
      }, 5);



    }
    a.innerHTML = l;
    nav.append(a);
  });


  return nav;
};
export default nav;
