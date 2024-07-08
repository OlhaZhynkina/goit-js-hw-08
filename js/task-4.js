const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const enteredEmail = event.target.elements.email.value.trim();
  const enteredPassword = event.target.elements.password.value.trim();

  if (enteredEmail === '' || enteredPassword === '') {
    return alert('All form fields must be filled in');
  }

  const dataClient = {
    email: enteredEmail,
    password: enteredPassword,
  };

  console.log(dataClient);
  event.target.reset();
}
