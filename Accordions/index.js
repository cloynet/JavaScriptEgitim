const allHeaders = document.querySelectorAll('.header');

const toggleOpen = (e) => {
        const { currentTarget } = e;
        const accordion = currentTarget.parentElement;
        const isOpen = accordion.classList.contains('open');

        document.querySelectorAll('.accordion').forEach(acc =>{
            acc.classList.remove('open');
        })

        if(!isOpen){
            accordion.classList.add('open');
        }
}

const blindClickEvent = (header) => {
    header.addEventListener('click', toggleOpen);
}

allHeaders.forEach(blindClickEvent);