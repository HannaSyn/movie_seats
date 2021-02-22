const bookingForm = document.querySelector("#booking-form");
const bookingButton = document.querySelector("#booking-button");

function getChosenSeats () {
  let checkedSeats = document.querySelectorAll('.seats__input:checked');
  for (seat of checkedSeats) {
    let checkedSeat = seat.value;
    const [ rowNum, seatNum ] = checkedSeat.split('-');
    console.log(rowNum, seatNum);
  }
}

function getChosenDate () {
  let checkedDate = document.querySelector('.schedule__date > .schedule__item > .schedule__input:checked').value;
  console.log(checkedDate);
}

function getChosenTime () {
  let checkedTime = document.querySelector('.schedule__time > .schedule__item > .schedule__input:checked').value;
  console.log(checkedTime);
}

function sendForm (e) {
  e.preventDefault();
  getChosenSeats();
  getChosenDate ();
  getChosenTime ();
}

bookingButton.addEventListener('click',  sendForm);
