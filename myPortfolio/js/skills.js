 document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    const prevButton = document.querySelector(".slider-control.prev");
    const nextButton = document.querySelector(".slider-control.next");

    let currentIndex = 0;

    const skillTitles = document.querySelectorAll(".skill-title");

    function showSkill(index) {
        skills.forEach(skill => {
            skill.classList.remove('active');
        });
        skills[index].classList.add('active');
    }

    const toggleSkillBar = (e) => {
        const clickedTitle = e.currentTarget;
        const parentSkill = clickedTitle.closest('.skill');

        const isOpen = parentSkill.classList.contains('open');

        skills.forEach(skill => skill.classList.remove('open'));

        if (!isOpen) {
            parentSkill.classList.add('open');
        }

    }

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


    showSkill(currentIndex);

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % skills.length;
        showSkill(currentIndex);
    })

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + skills.length) % skills.length;
        showSkill(currentIndex);
    })

    skillTitles.forEach(title => {
        title.addEventListener("click", toggleSkillBar);
    });


     setInterval(updateClock,1000);
     updateClock();

});