const footer = () => {
  const footerContainer = document.createElement('div');
  footerContainer.classList = 'd-flex justify-content-between  bg-dark text-light p-3 fixed-bottom';

  const footerLinksContainer = document.createElement('div');
  const footerLinks = ['GitHub', 'LinkedIn', 'amiraabouhadid@gmail.com'];

  footerLinks.forEach((item, i) => {
    const a = document.createElement('a');
    a.classList = 'text-light px-4';
    if (item == 'GitHub'){
      a.href = `https://github.com/amiraabouhadid`;
    }
    else if (item == 'LinkedIn') {
      a.href = `https://www.linkedin.com/in/amira-abouhadid/`;
    }
    else {
      a.href = '';
    }

    a.innerHTML = item;
    footerLinksContainer.append(a);
  });

const copyrights = document.createElement('a');
copyrights.href = 'https://creativecommons.org/licenses/by-nc/4.0/';
copyrights.innerHTML = 'creative commons';

  footerContainer.appendChild(footerLinksContainer);
  footerContainer.appendChild(copyrights);
  return footerContainer;
};
export default footer;
