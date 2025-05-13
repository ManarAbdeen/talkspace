document.addEventListener("DOMContentLoaded", () => {
  const hoursInput = document.getElementById("hours");
  const decrementButton = document.querySelector(".decrement");
  const incrementButton = document.querySelector(".increment");
  const totalPriceElement = document.querySelector(".total-price span");

  const pricePerHour = 300; // Price per hour in EGP

  const updateTotalPrice = () => {
    const hours = parseInt(hoursInput.value, 10) || 0;
    totalPriceElement.textContent = ${hours * pricePerHour} EGP;
  };

  decrementButton.addEventListener("click", () => {
    let hours = parseInt(hoursInput.value, 10) || 0;
    if (hours > 1) {
      hours--;
      hoursInput.value = hours;
      updateTotalPrice();
    }
  });

  incrementButton.addEventListener("click", () => {
    let hours = parseInt(hoursInput.value, 10) || 0;
    hours++;
    hoursInput.value = hours;
    updateTotalPrice();
  });

  hoursInput.addEventListener("input", updateTotalPrice);

  // Initialize total price on page load
  updateTotalPrice();
});