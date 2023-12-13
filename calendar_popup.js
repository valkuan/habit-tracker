document.addEventListener('DOMContentLoaded', function () {
  const todayCell = document.querySelector('.today');
  const popupContainer = document.getElementById('habit-tracker');
  const overlay = document.querySelector('.overlay');

  // Add a click event listener to the 'today' cell
  todayCell.addEventListener('click', function () {
    // Show the overlay
    overlay.style.display = 'block';

    // Show the modal container
    popupContainer.classList.add('active');
  });

  // Add a click event listener to the overlay (to close the modal if clicked outside it)
  overlay.addEventListener('click', function (event) {
    // Check if the clicked element is within the modal
    if (!popupContainer.contains(event.target)) {
      // Hide the overlay
      overlay.style.display = 'none';

      // Hide the modal container
      popupContainer.classList.remove('active');
    }
  });
});



