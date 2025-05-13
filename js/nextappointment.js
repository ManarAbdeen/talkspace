document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cancel-btn').addEventListener('click', function() {
        alert('Appointment cancelled.');
    });

    document.querySelector('.go-back').addEventListener('click', function() {
        window.history.back();
    });
});