document.querySelectorAll('[data-modal-open]').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const id = btn.getAttribute('data-modal-open');
        const modal = document.querySelector('[data-modal="' + id + '"]');
        if (modal) modal.classList.remove('is-hidden');
    });
});

document.querySelectorAll('[data-modal-close]').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const id = btn.getAttribute('data-modal-close');
        const modal = document.querySelector('[data-modal="' + id + '"]');
        if (modal) {
            modal.classList.add('is-hidden');
            modal.querySelectorAll('.field-error').forEach(function(el) { el.remove(); });
            modal.querySelectorAll('.input-error').forEach(function(el) { el.classList.remove('input-error'); });
        }
    });
});
