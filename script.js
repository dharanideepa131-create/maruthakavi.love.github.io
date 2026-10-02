/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    // Keep loading screen for 30 seconds
    setTimeout(function () {

        // Fade out
        loader.style.opacity = "0";

        // Remove after fade animation
        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 30000);

});


/* =========================
   NAVBAR
========================= */

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   ENTER STORY
========================= */

function enterStory() {

    document
        .getElementById("photographer")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const links = document.querySelector(".nav-links");

    links.classList.toggle("mobile");

}


/* =========================
   SECRET REVEAL
========================= */

function revealSecret() {

    const secret = document.getElementById("secret");

    const button = document.querySelector(".reveal-btn");

    secret.classList.add("show");

    button.style.display = "none";

    setTimeout(function () {

        secret.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}
