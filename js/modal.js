document.querySelectorAll('[data-modal-open]').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var id = btn.getAttribute('data-modal-open');
        var modal = document.querySelector('[data-modal="' + id + '"]');
        if (modal) modal.classList.remove('is-hidden');
    });
});

document.querySelectorAll('[data-modal-close]').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var id = btn.getAttribute('data-modal-close');
        var modal = document.querySelector('[data-modal="' + id + '"]');
        if (modal) {
            modal.classList.add('is-hidden');
            modal.querySelectorAll('.field-error').forEach(function(el) { el.remove(); });
            modal.querySelectorAll('.input-error').forEach(function(el) { el.classList.remove('input-error'); });
        }
    });
});
