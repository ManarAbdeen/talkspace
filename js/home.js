// When user clicks the "Book Now" button
function bookNow() {
  // Show a simple pop-up message
  alert('Thank you for choosing us! 🎉 A therapist will contact you shortly.');

  // Optionally, you can redirect them to a "Booking" page
  // window.location.href = 'booking.html'; 
}

// Optional: Add smooth scroll behavior for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link jump
    const href = link.getAttribute('href');
    if (href.startsWith("#") && document.querySelector(href)) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Change navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#ffffff';
    navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  } else {
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  }
});

