document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navlinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('activ
      e');
  });
});


// Close navbar if clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

// Cart button interaction
let cartButtons = document.querySelectorAll('.bxs-cart-add');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    let itemName = button.previousElementSibling.previousElementSibling.textContent;
    let price = button.previousElementSibling.textContent;
    alert(`Added to cart: ${itemName} - ${price}`);
    // Optionally: Add to cart logic here
    // cart.push({ name: itemName, price });
  });
});

// Handle "Add to Cart" button click
document.addEventListener('DOMContentLoaded', () => {
  const cartIcons = document.querySelectorAll('.bxs-cart-add');

  cartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const name = icon.previousElementSibling.previousElementSibling.textContent;
      const price = icon.previousElementSibling.textContent;

      alert(`Added to cart: ${name} - ${price}`);
      
      // Example for later: add to localStorage or cart array
      // cart.push({ name, price });
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      this.reset(); // Clear the form
    } else {
      alert('Please fill in all fields.');
    }
  });
});
