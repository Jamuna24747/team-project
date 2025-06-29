 //  hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navlinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

//*wedding//
  function goToShop() {
      alert("Navigating to wedding collection...");
      // window.location.href = "wedding-collection.html";
    }

  // Get all cart icons inside the shop
  const cartIcons = document.querySelectorAll(".card-fronts .bx");

  cartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      // Navigate to the <h3> (product name) and <h6> (price) elements
      const productCard = icon.parentElement;
      const productName = productCard.querySelector("h3").textContent;
      const productPrice = productCard.querySelector("h6").textContent;

      
      alert(`🛍️ ${productName} (${productPrice}) added to cart!`);
    });
  });


  // Select all cards of members
  const cards = document.querySelectorAll('.card');

  // Add a click event to each card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  
  // Select all partner image links
  const brandLinks = document.querySelectorAll('.partners a');

  // Loop through each link and add a click event listener
  brandLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const brand = this.querySelector('img').alt; // Get brand name from alt tag
      alert(`🔗 You are about to visit ${brand}'s official website.`);
      console.log(`User clicked on: ${brand}`);
    });
  });


//*contact*//
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Your message has been sent. Thank you!");
    this.reset();
  });


