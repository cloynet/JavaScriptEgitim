const accordionHeaders = document.querySelectorAll('.accordion-header');
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0');
        menu.classList.add('max-h-96');
    }else {
        menu.classList.remove('max-h-96');
        menu.classList.add('max-h-0');
    }
})


accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionBody = header.nextElementSibling;
        const chevron = header.querySelector('.chevron');

        accordionHeaders.forEach(h => {
            const body = h.nextElementSibling;
            const icon = h.querySelector('.chevron');

            if (body !== accordionBody) {
                body.classList.remove('max-h-96', 'p-4');
                body.classList.add('max-h-0', 'p-0');
                icon.style.transform = 'rotate(0deg)';
            }
        });

        const isOpen = !accordionBody.classList.contains('max-h-0');

        if (isOpen) {
            accordionBody.classList.remove('max-h-96', 'p-4');
            accordionBody.classList.add('max-h-0', 'p-0');
            chevron.style.transform = 'rotate(0deg)';
        }else {
            accordionBody.classList.remove('max-h-0', 'p-0');
            accordionBody.classList.add('max-h-96', 'p-4');
            chevron.style.transform = 'rotate(180deg)';
        }

        });
});

setInterval(updateClock, 1000);
updateClock();