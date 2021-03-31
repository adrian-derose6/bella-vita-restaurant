function loadBookingForm() {
    let bookingForm = document.createElement('div');
    bookingForm.classList.add('booking-form');

    let inputRow1 = document.createElement('div');
    inputRow1.classList.add('input-row');
    let inputRow2 = document.createElement('div');
    inputRow2.classList.add('input-row');

    let inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');


    bookingForm.appendChild(inputRow1);
    bookingForm.appendChild(inputRow2);

    return bookingForm;
}

export default loadBookingForm;