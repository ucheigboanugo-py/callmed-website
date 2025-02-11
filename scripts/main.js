document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is successfully linked and running!");

    // ✅ Click event listener for all buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });

    // ✅ Toggle navigation menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // ✅ Add flip effect to cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-flipped");
        });
    });

    // ✅ Navbar toggler animation
    const toggler = document.querySelector(".navbar-toggler");
    if (toggler) {
        const icon = toggler.querySelector(".navbar-toggler-icon");
        toggler.addEventListener("click", function () {
            toggler.classList.toggle("open");
            icon.style.transform = toggler.classList.contains("open") ? "rotate(45deg)" : "rotate(0deg)";
            icon.classList.toggle("middle-line", toggler.classList.contains("open"));
        });
    }

    // ✅ Dark/Light Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (themeToggle && themeIcon) {
        // Check saved theme preference
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-theme");
            themeIcon.classList.replace("fi-rr-moon", "fi-rr-sun");
        }

        // Toggle Theme on Button Click
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");

            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeIcon.classList.replace(isDark ? "fi-rr-moon" : "fi-rr-sun", isDark ? "fi-rr-sun" : "fi-rr-moon");
        });
    }
});

