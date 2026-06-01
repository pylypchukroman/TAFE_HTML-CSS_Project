const wrapper = document.querySelector('.slider-track-wrapper');
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn-prev');
const nextBtn = document.querySelector('.slider-btn-next');

if (wrapper && track && prevBtn && nextBtn) {
    const original = Array.from(track.children);

    // Prepend clone of last card
    track.insertBefore(original[3].cloneNode(true), track.firstChild);

    // Append clones of first 3 cards
    track.appendChild(original[0].cloneNode(true));
    track.appendChild(original[1].cloneNode(true));
    track.appendChild(original[2].cloneNode(true));

    // DOM: [clone4, card1, card2, card3, card4, clone1, clone2, clone3]
    // idx:    0       1      2      3      4      5       6       7

    let current = 1;
    let animating = false;

    function cardWidth() {
        return (wrapper.offsetWidth - 20) / 3;
    }

    function updateWidths() {
        const w = cardWidth();
        Array.from(track.children).forEach(card => {
            card.style.width = w + 'px';
        });
    }

    function goTo(index, animate) {
        track.style.transition = animate ? 'transform 400ms ease' : 'none';
        current = index;
        track.style.transform = `translateX(${-current * (cardWidth() + 10)}px)`;
    }

    updateWidths();
    goTo(current, false);

    track.addEventListener('transitionend', () => {
        animating = false;
        if (current === 0) goTo(4, false);
        if (current === 5) goTo(1, false);
    });

    nextBtn.addEventListener('click', () => {
        if (animating) return;
        animating = true;
        goTo(current + 1, true);
    });

    prevBtn.addEventListener('click', () => {
        if (animating) return;
        animating = true;
        goTo(current - 1, true);
    });

    window.addEventListener('resize', () => {
        updateWidths();
        goTo(current, false);
    });
}
