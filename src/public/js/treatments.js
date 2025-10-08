const dropdownContainer = document.querySelector('.dropdown-container');
const dropdown = document.querySelector('.dropdown');
const bookingForm = document.querySelector('.booking-form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const date = document.querySelector('#date');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const notes = document.querySelector('#notes');
const dialog = document.querySelector('.task-dialog');
const btn = document.querySelector('.btn');
// const submitBtn = document.querySelector('.submit-task-btn');
const cancelBtn = document.querySelector('.close-task-dialog');

function treatmentEventListeners() {
    dropdownContainer.addEventListener('mouseover', () => {
        displayDropdown();
    });

    dropdownContainer.addEventListener('mouseleave', () => {
        hideDropdown();
    });

    btn.addEventListener('click', () => {
        dialog.showModal();
    });

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(bookingForm);

        await fetch(bookingForm.action, {
            method: 'POST',
            body: new URLSearchParams(formData),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        dialog.close();
        resetBookingForm();
    });

    // submitBtn.addEventListener('click', () => {
    //     dialog.close();
    //     resetForm();
    // });

    cancelBtn.addEventListener('click', () => {
        dialog.close();
        resetForm();
    });
}

function displayDropdown() {
    dropdown.classList.add('visible');
}

function hideDropdown() {
    dropdown.classList.remove('visible');
}

function resetBookingForm() {
    firstName.value = '';
    lastName.value = '';
    date.value = '';
    email.value = '';
    phoneNumber.value = '';
    notes.value = '';
}

treatmentEventListeners();