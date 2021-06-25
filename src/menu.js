const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu';

  const menuTitle = document.createElement('h2');
  menuTitle.innerHTML = 'MENU';
  menuTitle.classList = 'text-center mx-auto py-5';

  const pizzas = [
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DJbAT-nfFghs8puWat-YgAHaIs%26pid%3DApi&f=1',
      name: 'margherita',
      price: ' (160le)',
      description:'Italian Tomatoes, Fior di Latte, Fresh Basil, Parmigiano Reggiano DOP* aged 22 Months, Extra Virgin Olive Oil',
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DJbAT-nfFghs8puWat-YgAHaIs%26pid%3DApi&f=1',
      name: 'scarpariello',
      price: ' (160le)',
      description:'Italian Tomatoes, Fior di Latte, Fresh Basil, Parmigiano Reggiano DOP* aged 22 Months, Extra Virgin Olive Oil',
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DJbAT-nfFghs8puWat-YgAHaIs%26pid%3DApi&f=1',
      name: 'marinara',
      price: ' (160le)',
      description:'Italian Tomatoes, Fior di Latte, Fresh Basil, Parmigiano Reggiano DOP* aged 22 Months, Extra Virgin Olive Oil',
    },
    {
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DJbAT-nfFghs8puWat-YgAHaIs%26pid%3DApi&f=1',
      name: 'diavola',
      price: ' (160le)',
      description:'Italian Tomatoes, Fior di Latte, Fresh Basil, Parmigiano Reggiano DOP* aged 22 Months, Extra Virgin Olive Oil',
    },

  ];

  const pizzasContainer = document.createElement('div');
  pizzasContainer.classList = ' container-fluid text-center mx-auto';

  pizzas.forEach((item, i) => {
    const card = document.createElement('div');
    card.classList= 'pb-5';

    const image = document.createElement('img');
    image.src = `${item.image}`;

    const name = document.createElement('h5');
    name.classList = 'font-weight-bolder py-4';
    name.append(item.name);

    const price = document.createElement('b');
    price.append(item.price);
    price.classList = 'py-4 ';

    const description = document.createElement('i');
    description.append(item.description);
    description.classList = 'py-4 w-100';


    pizzasContainer.appendChild(card);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);
  });

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(pizzasContainer);
  return menuContainer;
};
export default menu;
