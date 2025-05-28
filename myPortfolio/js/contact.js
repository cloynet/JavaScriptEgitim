document.addEventListener('DOMContentLoaded', () => {
    const contactContainer = document.querySelector('.contact-container');
    const contacts = document.querySelectorAll('.contact');
    const contactTitles = document.querySelectorAll('.contact-title');

    function updateClock () {
        const now = new Date();

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;

        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const date = `${day}/${month}/${year}`;

        document.getElementById('clock').innerText = `${date}
    ${time}`;
    }

    const toggleContactBar = (e) => {
        const clickedContact = e.currentTarget;
        const parentContact = clickedContact.closest('.contact');

        const isOpen = parentContact.classList.contains('open');

        contacts.forEach(contact => contact.classList.remove('open'));

        if(!isOpen){
            parentContact.classList.add('open');
        }
    }
    contactTitles.forEach(title => {
        title.addEventListener('click', toggleContactBar);
    });

    setInterval(updateClock,1000);
    updateClock();

});