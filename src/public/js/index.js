const dropdownContainer = document.querySelector('.dropdown-container');
const dropdown = document.querySelector('.dropdown');
// const bookingForm = document.querySelector('.booking-form');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const date = document.querySelector('#date');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const notes = document.querySelector('#notes');
const dialog = document.querySelector('.task-dialog');
const btn = document.querySelector('.btn');
// const submitBtn = document.querySelector('.submit-task-btn');
// const cancelBtn = document.querySelector('.close-task-dialog');

function indexEventListeners() {
    dropdownContainer.addEventListener('mouseover', () => {
        displayDropdown();
    });

    dropdownContainer.addEventListener('mouseleave', () => {
        hideDropdown();
    });

    btn.addEventListener('click', () => {
        dialog.showModal();
    });
}

function displayDropdown() {
    dropdown.classList.add('visible');
}

function hideDropdown() {
    dropdown.classList.remove('visible');
}

function resetContactForm() {
    firstName.value = '';
    lastName.value = '';
    date.value = '';
    email.value = '';
    phoneNumber.value = '';
    notes.value = '';
}

indexEventListeners();