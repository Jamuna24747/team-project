<script>
  const stars = document.querySelectorAll('.stars i');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = star.getAttribute('data-rating');
      stars.forEach(s => s.classList.remove('active'));
      for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add('active');
      }
    });
  });

  document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message || selectedRating === 0) {
      alert("Please fill in all fields and rate us.");
      return;
    }

    alert(`Thank you, ${name}! Your feedback was submitted successfully.`);
    this.reset();
    stars.forEach(s => s.classList.remove('active'));
    selectedRating = 0;
  });
</script>
