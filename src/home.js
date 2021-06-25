const home = () => {
  const homeContainer = document.createElement('div');
  homeContainer.classList ='container-fluid text-center mx-auto'
  homeContainer.id= 'home';

  const homeHeader = document.createElement('h1');
  homeHeader.innerHTML = "Pizzeria d'Amerioo";
  homeHeader.classList = 'p-5';


  const headerImage = document.createElement('img');
  headerImage.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1R4hze9Sou3MQzoXTw8aBgHaFj%26pid%3DApi&f=1';
  headerImage.classList = 'pt-2 w-100';

  const imageContainer = document.createElement('div');

  const introParagraphContainer = document.createElement('div');


  const introParagraph = document.createElement('p');
  introParagraph.innerHTML= "Amerioo's pizzeria offers you authentic napolitanian pizza! Satisfy your carbohydrates cravings now by ordering our speciality: Margareta Pizza!"
  introParagraph.classList = 'pb-1';

  const hoursContainer= document.createElement('div');

  const hours= document.createElement('p');
  hours.innerHTML= 'Monday-Saturday: 11am - 11pm';

  const locationContainer = document.createElement('div');
  const location = document.createElement('p');
  location.innerHTML = 'Buckingham Palace St. 123, Cairo, Egypt';


  imageContainer.appendChild(headerImage);
  homeHeader.appendChild(imageContainer);
  homeContainer.appendChild(homeHeader);
  introParagraphContainer.appendChild(introParagraph);
  homeContainer.appendChild(introParagraphContainer);
  hoursContainer.appendChild(hours);
  homeContainer.appendChild(hoursContainer);
  locationContainer.appendChild(location);
  homeContainer.appendChild(locationContainer);

  return homeContainer;
}
export default home;
