document.addEventListener("DOMContentLoaded", () => {
  const uploadButtons = document.querySelectorAll(".upload-btn");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const goBackButton = document.querySelector(".go-back-btn");

  // Handle upload button clicks
  uploadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Upload functionality is not implemented yet.");
    });
  });

  // Handle pagination buttons
  prevButton.addEventListener("click", () => {
    alert("Previous page functionality is not implemented yet.");
  });

  nextButton.addEventListener("click", () => {
    alert("Next page functionality is not implemented yet.");
  });

  // Handle go back button
  goBackButton.addEventListener("click", () => {
    window.history.back();
  });
});