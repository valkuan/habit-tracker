document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.getElementById('calendar');
  const monthYearElement = document.getElementById('month-year');

  function generateCalendar() {
    // Get the current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Set the month and year in the header
    monthYearElement.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);

    // Create a table for the calendar
    const calendarTable = document.createElement('table');

    // Create the header row with day names
    const dayNamesRow = document.createElement('tr');
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      dayNamesRow.appendChild(th);
    });
    calendarTable.appendChild(dayNamesRow);

    // Get the first day of the month and the number of days in the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    // Calculate the starting day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Create rows for the calendar days
    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (i === 0 && j < startingDayOfWeek) {
          // Empty cells before the first day of the month
          cell.textContent = '';
        } else if (dayCounter > daysInMonth) {
          // Empty cells after the last day of the month
          cell.textContent = '';
        } else {
          // Fill in the calendar day
          cell.textContent = dayCounter;
          if (currentDate.getDate() === dayCounter && currentDate.getMonth() === currentMonth) {
            // Highlight today's date
            cell.classList.add('today');
          }
          dayCounter++;
        }
        row.appendChild(cell);
      }
      calendarTable.appendChild(row);
    }

    // Replace the old calendar with the new one
    calendarContainer.innerHTML = '';
    calendarContainer.appendChild(calendarTable);
  }

  // Initial calendar generation
  generateCalendar();
});


