const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;

  if (!name || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Validate the email address
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form data to the Node.js server
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  if (response.status === 200) {
    alert('User created successfully!');
    window.location.href = '/login';
  } else {
    alert('Something went wrong. Please try again.');
  }
});