const contact = () => {
  const contactContainer = document.createElement('div');
  contactContainer.id = 'contact';
  contactContainer.classList = 'p-5 container-fluid text-center mx-auto';

  const contactTitle = document.createElement('h3');
  contactTitle.innerHTML = 'CONTACT';
  contactTitle.classList = 'pb-5';

  const form = document.createElement('form');
  form.actionon = '#';
  form.classList ='px-5';
  form.innerHTML = `  <p> We would like to hear from you, feel free to send us a message! </p>
  <div class="form-group py-4">
    <label for="inputEmail1">Email address</label>
    <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
     <label for="message">Message</label>
     <textarea class="form-control " id="message" rows="3"></textarea>
   </div>
   <div class= 'py-4'>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  `;

  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(form);
  return contactContainer;

}
export default contact;
