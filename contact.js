

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let isValid = true;

  
  [name, email, message].forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add('error');
      isValid = false;
    } else {
      field.classList.remove('error');
    }
  });

  if (!isValid) {
    alert('Please fill out all fields.');
    return;
  }


  alert(`Thank you, ${name.value}! Your message has been sent successfully.`);
  document.getElementById('contactForm').reset();
});