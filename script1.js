 const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dots button');
    let current = 0;
    const total = slides.length;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.setAttribute('aria-selected', i === index);
        dot.tabIndex = i === index ? 0 : -1;
      });
      current = index;
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        resetTimer();
      });
      dot.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') {
          showSlide((current + 1) % total);
          dots[(current + 1) % total].focus();
          resetTimer();
        } else if (e.key === 'ArrowLeft') {
          showSlide((current - 1 + total) % total);
          dots[(current - 1 + total) % total].focus();
          resetTimer();
        }
      });
    });

    let timer = setInterval(() => {
      showSlide((current + 1) % total);
    }, 7000);

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        showSlide((current + 1) % total);
      }, 7000);
    }




document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navlinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


// Close navbar if clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

const shopLink = document.getElementById("shop-link");
    const shopDropdown = document.getElementById("shopDropdown");

    shopLink.addEventListener("click", function(e) {
      e.preventDefault();
      shopDropdown.style.display = shopDropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function(e) {
      if (!e.target.closest(".dropdown")) {
        shopDropdown.style.display = "none";
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
