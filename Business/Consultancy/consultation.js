document.getElementById('consultation-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demo
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate successful form submission
    alert(`Thank you, ${name}! We have received your message.`);
    document.getElementById('consultation-form').reset(); // Clear form
  });
  