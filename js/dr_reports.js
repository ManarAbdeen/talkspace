document.addEventListener("DOMContentLoaded", () => {
  const viewReportButtons = document.querySelectorAll(".view-report-btn");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const goBackButton = document.querySelector(".go-back-btn");

  // Handle view report button clicks
  viewReportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Viewing report functionality is not implemented yet.");
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