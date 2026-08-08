// =========================
// PAGE LOADER
// =========================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".about, .competency-card, .skill-card, .project, .learning-item, .engagement-grid > div, .contact"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================
// HERO TEXT ANIMATION
// =========================

const heroTitle = document.querySelector(".hero-title");
const intro = document.querySelector(".intro");
const locationText = document.querySelector(".location");
const heroPhoto = document.querySelector(".hero-photo");
const buttons = document.querySelector(".buttons");

window.addEventListener("load", () => {

    if (intro) {
        setTimeout(() => {
            intro.classList.add("hero-show");
        }, 200);
    }

    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add("hero-show");
        }, 400);
    }

    if (locationText) {
        setTimeout(() => {
            locationText.classList.add("hero-show");
        }, 700);
    }

    if (heroPhoto) {
        setTimeout(() => {
            heroPhoto.classList.add("hero-photo-show");
        }, 600);
    }

    if (buttons) {
        setTimeout(() => {
            buttons.classList.add("hero-show");
        }, 900);
    }
});


// =========================
// MOUSE PARALLAX HERO IMAGE
// =========================

const hero = document.querySelector(".hero");

if (hero && heroPhoto) {

    hero.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5);
        const y = (event.clientY / window.innerHeight - 0.5);

        const moveX = x * 18;
        const moveY = y * 12;

        heroPhoto.style.transform =
            `translateX(calc(-50% + ${moveX}px)) translateY(${moveY}px)`;
    });

    hero.addEventListener("mouseleave", () => {

        heroPhoto.style.transform =
            "translateX(-50%) translateY(0)";
    });
}


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
});


// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

const allButtons = document.querySelectorAll(".btn, .contact-btn, .email-btn");

allButtons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});


// =========================
// PROJECT HOVER CURSOR
// =========================

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mouseenter", () => {
        project.classList.add("project-hover");
    });

    project.addEventListener("mouseleave", () => {
        project.classList.remove("project-hover");
    });
});


// =========================
// YEAR
// =========================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// DOWNLOAD CV
// =========================

const cvButton = document.querySelector(".contact-btn");

if (cvButton) {

    cvButton.addEventListener("click", (event) => {

        const href = cvButton.getAttribute("href");

        if (!href || href === "#") {

            event.preventDefault();

            alert("CV will be available soon.");
        }
    });
}


// =========================
// CONTACT BUTTON
// =========================

const contactButtons = document.querySelectorAll(
    'a[href="#contact"]'
);

contactButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const contact = document.querySelector("#contact");

        if (contact) {
            contact.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =========================
// IMAGE LOAD EFFECT
// =========================

const profileImage = document.querySelector(".hero-photo img");

if (profileImage) {

    profileImage.addEventListener("load", () => {
        profileImage.classList.add("image-loaded");
    });
}


// =========================
// ESC KEY
// =========================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        document.body.classList.remove("menu-open");
    }
});