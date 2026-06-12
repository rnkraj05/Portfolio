// Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// Typing Animation

const roles = [
    "Java Developer",
    "Cloud Enthusiast",
    "CSE Student",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    const fullText = roles[roleIndex];

    if (!isDeleting) {

        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;

    } else {

        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;

    }

    typingElement.textContent = currentText;

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === fullText.length) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        roleIndex++;

        if (roleIndex === roles.length) {
            roleIndex = 0;
        }

        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Scroll Animation

const cards = document.querySelectorAll(
".skill-card, .project-card, .certificate-card, .contact-card"
);

function revealCards() {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();