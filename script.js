const bookingForm = document.querySelector("#booking-form");
const bookingButton = document.querySelector("#booking-button");
const hall = document.querySelector(".hall");
const bookedField = document.querySelector('.booked');

const price = '$10';

function setBookedField ( {target} ) {
  if (!target.classList.contains('seats__input')) {
    return;
  }
  const [ rowNum, seatNum ] = target.value.split('-');
  const chosenDate = document.querySelector('.input-date:checked').value;
  const chosenTime = document.querySelector('.input-time:checked').value;

  const chosenTicket = `
  <div class="booked__item">
      <p class="booked__seat-row">Row: <span class="highlight-text">${rowNum}</span></p>
      <p class="booked__seat">Seat: <span class="highlight-text">${seatNum}</span></p>
      <p class="booked__price">Price: <span class="highlight-text">${price}</span></p>
    </div>`;

  const bookedTemplate = `<div class="booked__container">
    <h4 class="booked__title">Your booking:</h4>
    <p class="booked__date">
      Date: <span class="highlight-text">${chosenDate}</span>
    </p>
    <p class="booked__time">
      Time: <span class="highlight-text">${chosenTime}</span>
    </p>
    ${chosenTicket}
  </div>`;

  if (!bookedField.hasChildNodes()) {
    bookedField.innerHTML = bookedTemplate;
  } else {
    const bookedContainer =  document.querySelector('.booked__container');
    bookedContainer.insertAdjacentHTML('beforeend', chosenTicket);
  }
}

function sendForm (e) {
  e.preventDefault();
}

hall.addEventListener('click', setBookedField);
bookingButton.addEventListener('click',  sendForm);
