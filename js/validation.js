function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.classList.add('input-error');
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = message;
    const formField = input.closest('.form-field');
    if (formField) formField.appendChild(error);
}

function showCheckboxError(modalSelector, message) {
    const checkboxField = document.querySelector(modalSelector + ' .checkbox-field');
    if (!checkboxField) return;
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = message;
    checkboxField.appendChild(error);
}

function clearErrors(form) {
    form.querySelectorAll('.field-error').forEach(el => el.remove());
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}

function toast(message, isSuccess) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        close: true,
        style: {
            background: isSuccess ? '#4caf50' : '#e53935',
            borderRadius: '8px',
            padding: '18px 28px',
            fontSize: '16px',
            minWidth: '300px',
        },
    }).showToast();
}

const subscribeForm = document.querySelector('[name="signup_form"]');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = subscribeForm.querySelector('input[type="email"]').value.trim();
        if (!isValidEmail(email)) {
            toast('Please enter a valid email address.', false);
            return;
        }
        toast('Thank you for subscribing!', true);
        subscribeForm.reset();
    });
}

const managerForm = document.querySelector('[data-modal="manager"] form');
if (managerForm) {
    managerForm.addEventListener('submit', e => {
        e.preventDefault();
        clearErrors(managerForm);

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('tel').value.trim();
        const email = document.getElementById('mail').value.trim();
        const agreed = document.getElementById('check').checked;
        let valid = true;

        if (name === '') {
            showError('name', 'Please enter your name.');
            valid = false;
        }
        if (phone === '') {
            showError('tel', 'Please enter your phone number.');
            valid = false;
        }
        if (!isValidEmail(email)) {
            showError('mail', 'Please enter a valid email address.');
            valid = false;
        }
        if (!agreed) {
            showCheckboxError('[data-modal="manager"]', 'Please accept the terms to continue.');
            valid = false;
        }

        if (valid) {
            toast('Thank you! We will call you back soon.', true);
            document.querySelector('[data-modal="manager"]').classList.add('is-hidden');
            managerForm.reset();
        }
    });
}

const loginForm = document.querySelector('[data-modal="login"] form');
if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        clearErrors(loginForm);

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        let valid = true;

        if (!isValidEmail(email)) {
            showError('login-email', 'Please enter a valid email address.');
            valid = false;
        }
        if (password.length < 10) {
            showError('login-password', 'Password must be at least 10 characters.');
            valid = false;
        }

        if (valid) {
            toast('You have successfully logged in!', true);
            document.querySelector('[data-modal="login"]').classList.add('is-hidden');
            loginForm.reset();
        }
    });
}

const registerForm = document.querySelector('[data-modal="register"] form');
if (registerForm) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        clearErrors(registerForm);

        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value;
        let valid = true;

        if (name === '') {
            showError('register-name', 'Please enter your name.');
            valid = false;
        }
        if (!isValidEmail(email)) {
            showError('register-email', 'Please enter a valid email address.');
            valid = false;
        }
        if (password.length < 10) {
            showError('register-password', 'Password must be at least 10 characters.');
            valid = false;
        }

        if (valid) {
            toast('You have successfully registered!', true);
            document.querySelector('[data-modal="register"]').classList.add('is-hidden');
            registerForm.reset();
        }
    });
}
