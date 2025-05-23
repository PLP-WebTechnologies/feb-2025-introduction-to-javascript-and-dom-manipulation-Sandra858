// Change heading text dynamically after 3 seconds
setTimeout(() => {
  const heading = document.querySelector('header h1');
  heading.textContent = 'Create Your Account';
  heading.style.color = 'teal';
}, 10000);

// Handle form submission
const form = document.getElementById('signup-form');
const messageSection = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Remove any previous message
  messageSection.textContent = '';

  // Grab input values
  const username = form.username.value.trim();
  const email = form.email.value.trim();

  // Simple validation
  if (username && email) {
    // Show success message
    messageSection.textContent = `Welcome, ${username}! Your account has been created.`;
    messageSection.style.color = 'green';

    // Change form background color dynamically
    form.style.backgroundColor = '#e0ffe0';

    // Add a new element: a "Clear" button to reset the form
    if (!document.getElementById('clear-btn')) {
      const clearBtn = document.createElement('button');
      clearBtn.id = 'clear-btn';
      clearBtn.textContent = 'Clear Form';
      clearBtn.type = 'button';
      form.appendChild(clearBtn);

      clearBtn.addEventListener('click', () => {
        form.reset();
        messageSection.textContent = '';
        form.style.backgroundColor = '';
        clearBtn.remove();
      });
    }
  } else {
    messageSection.textContent = 'Please fill in all fields.';
    messageSection.style.color = 'red';
  }
});
