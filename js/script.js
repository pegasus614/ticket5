// ---------- SCREEN 3, 4, 5 FUNCTIONALITY ----------
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');

const selectedCount = screen3.querySelector('#selected-count'); // screen3 counter

// Seat selection for screen 3
const seats = screen3.querySelectorAll('.seat-card');
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    const count = screen3.querySelectorAll('.seat-card.selected').length;
    selectedCount.textContent = `${count} Selected`;
  });
});

// Show screen 3
document.querySelectorAll('.transfer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    screen3.classList.add('show');
  });
});

// Navigate from screen 3 -> 4
const transferLink = screen3.querySelector('.transfer-link');
transferLink.addEventListener('click', (e) => {
  e.preventDefault();
  screen3.classList.remove('show');
  screen4.classList.add('show');

  // ✅ Update screen 4 with selected count from screen 3
  const selectedSeats = screen3.querySelectorAll('.seat-card.selected').length;
  const ticketDetails = screen4.querySelector('.ticket-details');
  ticketDetails.innerHTML = `<br />${selectedSeats} Tickets Selected<br />`;
});

// Navigate back from screen 4 -> 3
screen4.querySelector('.back-btn').addEventListener('click', (e) => {
  e.preventDefault();
  screen4.classList.remove('show');
  screen3.classList.add('show');
});

// Show screen 5
document.querySelectorAll('.view-ticket').forEach(btn => {
  btn.addEventListener('click', () => {
    screen5.classList.add('show');
  });
});

// Close screens
screen3.querySelector('.fa-times')?.addEventListener('click', () => {
  screen3.classList.remove('show');
});

screen5.querySelector('.fa-times').addEventListener('click', () => {
  screen5.classList.remove('show');
});
