// FOOTER YEAR AUTO
const yearSpan = document.getElementById("year");

if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.15});

fadeElements.forEach((e1) => observer.observe(e1));

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks){
    navToggle.addEventListener("click", () =>{
        const isOpen = navLinks.classList.toggle("open");

        navToggle.setAttribute("aria-expanded", isOpen);
        navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
}