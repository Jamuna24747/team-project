document.addEventListener('DOMContentLoaded', () => {
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


//  hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navlinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdown in navigation (Shop)
const shopLink = document.getElementById('shop-link');
const shopDropdown = document.getElementById('shopDropdown');

shopLink.addEventListener('click', (e) => {
  e.preventDefault();
  shopDropdown.classList.toggle('show');
});

// Optional: Alert when cart icon is clicked
const cartIcons = document.querySelectorAll('.bxs-cart-add');

cartIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    alert("Item added to cart! 🛒");
  });
});
