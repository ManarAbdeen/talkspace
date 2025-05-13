// Add future interactivity here
document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`You clicked: ${button.innerText}`);
    });
  });
  