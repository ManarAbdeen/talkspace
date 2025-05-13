// Handle cancel buttons
document.querySelectorAll('.cancel-btn').forEach(button => {
    button.addEventListener('click', function () {
      const confirmed = confirm("Are you sure you want to cancel this appointment?");
      if (confirmed) {
        this.parentElement.remove(); // Remove the appointment block
      }
    });
  });
  
  // Pagination logic (placeholder)
  document.getElementById('prevPage').addEventListener('click', () => {
    alert('Previous page logic goes here');
  });
  
  document.getElementById('nextPage').addEventListener('click', () => {
    alert('Next page logic goes here');
  });
  
  // Go back button
  document.getElementById('goBack').addEventListener('click', () => {
    history.back(); // Takes user to previous page
  });
  
  