// Contact Form Validation
document.querySelector("#queryForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  
  // Get form elements
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const subjectInput = document.querySelector("#subject");
  const messageInput = document.querySelector("#message");
  const errorDiv = document.querySelector("#registerError");


  // Reset error states
  [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
    input.classList.remove("is-invalid");
  });
  errorDiv.classList.add("d-none");

  // Get values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const subject = subjectInput.value;
  const message = messageInput.value.trim();

  // Validation checks
  let isValid = true;
  let errorMsg = "";

  // Name validation
  if (!name) {
    nameInput.classList.add("is-invalid");
    errorMsg += "Name is required. ";
    isValid = false;
  } else if (name.length < 2) {
    nameInput.classList.add("is-invalid");
    errorMsg += "Name must be at least 2 characters. ";
    isValid = false;
  }

  // Email validation
  if (!email) {
    emailInput.classList.add("is-invalid");
    errorMsg += "Email is required. ";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailInput.classList.add("is-invalid");
    errorMsg += "Invalid email format. ";
    isValid = false;
  }

  // Phone validation
  if (!phone) {
    phoneInput.classList.add("is-invalid");
    errorMsg += "Phone number is required. ";
    isValid = false;
  } else if (!/^[\d\s+()\-]{7,15}$/.test(phone)) {
    phoneInput.classList.add("is-invalid");
    errorMsg += "Phone number must be 7-15 digits. ";
    isValid = false;
  }

  // Subject validation
  if (!subject) {
    subjectInput.classList.add("is-invalid");
    errorMsg += "Please select a subject. ";
    isValid = false;
  }

  // Message validation
  if (!message) {
    messageInput.classList.add("is-invalid");
    errorMsg += "Message is required. ";
    isValid = false;
  } else if (message.length < 10) {
    messageInput.classList.add("is-invalid");
    errorMsg += "Message must be at least 10 characters. ";
    isValid = false;
  }

  if (!isValid) {
    errorDiv.textContent = errorMsg;
    errorDiv.classList.remove("d-none");
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Submit if valid
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, subject, message })
    });

    if (response.ok) {
      window.location.href = '/thank-you.html';
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    errorDiv.textContent = 'Submission failed. Please try again.';
    errorDiv.classList.remove("d-none");
  }
});

// Registration Form Validation
document.querySelector("#registerForm")?.addEventListener("submit", async function(e) {
  e.preventDefault();

  const emailInput = document.querySelector("#regEmail");
  const passwordInput = document.querySelector("#regPassword");
  const errorDiv = document.querySelector("#formError");

  // Reset error states
  [emailInput, passwordInput].forEach(input => {
    input.classList.remove("is-invalid");
  });
  errorDiv.classList.add("d-none");

  // Get values
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Validation checks
  let isValid = true;
  let errorMsg = "";

  // Email validation
  if (!email) {
    emailInput.classList.add("is-invalid");
    errorMsg += "Email is required. ";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailInput.classList.add("is-invalid");
    errorMsg += "Invalid email format. ";
    isValid = false;
  }

  // Password validation
  if (!password) {
    passwordInput.classList.add("is-invalid");
    errorMsg += "Password is required. ";
    isValid = false;
  } else if (password.length < 8) {
    passwordInput.classList.add("is-invalid");
    errorMsg += "Password must be at least 8 characters. ";
    isValid = false;
  }

  if (!isValid) {
    errorDiv.textContent = errorMsg;
    errorDiv.classList.remove("d-none");
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Submit if valid
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.success) {
      showSuccess('Registration successful!');
    } else {
      throw new Error(data.error || 'Registration failed');
    }
  } catch (err) {
    errorDiv.textContent = err.message;
    errorDiv.classList.remove("d-none");
  }
});

// Utility Functions
function showError(message) {
  const errorDiv = document.querySelector("#formError");
  errorDiv.textContent = message;
  errorDiv.classList.remove("d-none");
  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success mt-3';
  successDiv.textContent = message;
  document.querySelector("#registerForm").appendChild(successDiv);
  setTimeout(() => successDiv.remove(), 3000);
}

// Real-time Validation Feedback
document.querySelectorAll("input, textarea, select").forEach(element => {
  element.addEventListener("input", function() {
    if (this.classList.contains("is-invalid")) {
      this.classList.remove("is-invalid");
    }
  });
});

// General Page Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Set last updated date
  document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

  // Add card hover effects
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Time-based greeting
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = "Good morning! Ready for your workout?";
  else if (hour < 18) greeting = "Good afternoon! Need new gear?";
  else greeting = "Good evening! Check out our latest arrivals";
  
  const heroText = document.querySelector('.hero p');
  if (heroText) heroText.textContent = greeting;
});