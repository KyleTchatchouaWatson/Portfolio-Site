document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Software Engineer", "Full-Stack Developer","Gamer","Content Creator","Uncle","Entrepreneur"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const textElement = document.querySelector(".dynamic-text");

    function typeEffect() {
        const currentRole = roles[roleIndex];
        const displayText = currentRole.substring(0, charIndex);

        textElement.textContent = displayText;

        if (!isDeleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                roleIndex = (roleIndex + 1) % roles.length;
            }
            setTimeout(typeEffect, 200);
        }
    }

    typeEffect();
});
