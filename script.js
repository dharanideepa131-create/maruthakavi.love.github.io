/* ========================================
   LOVE WEBSITE JAVASCRIPT
======================================== */


/* ----------------------------------------
   LOVE SURPRISE
---------------------------------------- */

const loveButton = document.getElementById("loveButton");
const surprise = document.getElementById("surprise");

loveButton.addEventListener("click", function () {

  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    loveButton.textContent = "I love you too ♡";
    createHeartBurst();
  } else {
    loveButton.textContent = "Click for a little surprise 💕";
  }

});


/* ----------------------------------------
   FLOATING HEARTS
---------------------------------------- */

const heartsContainer = document.getElementById("hearts");

function createHeart() {

  const heart = document.createElement("span");

  heart.className = "floating-heart";

  heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize =
    (12 + Math.random() * 18) + "px";

  heart.style.animationDuration =
    (7 + Math.random() * 7) + "s";

  heart.style.animationDelay =
    Math.random() * 2 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}


/* Create hearts slowly */

setInterval(createHeart, 1200);


/* ----------------------------------------
   HEART BURST
---------------------------------------- */

function createHeartBurst() {

  for (let i = 0; i < 18; i++) {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.innerHTML = "♥";

    heart.style.left =
      (35 + Math.random() * 30) + "%";

    heart.style.bottom =
      (30 + Math.random() * 20) + "%";

    heart.style.fontSize =
      (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
}


/* ----------------------------------------
   IMAGE ERROR HANDLING
   Shows a nice placeholder if an image
   doesn't exist.
---------------------------------------- */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

  image.addEventListener("error", function () {

    this.style.background =
      "linear-gradient(135deg, #ffe7e5, #f8e9ef)";

    this.style.objectFit = "contain";

    this.alt = "Add your photo here ♡";

  });

});


/* ----------------------------------------
   SCROLL REVEAL
---------------------------------------- */

const sections = document.querySelectorAll(
  ".story-content, .story-image, .memory-card, .letter"
);

const observer = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.style.animation =
          "fadeUp 0.8s ease forwards";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);

sections.forEach(function (section) {
  section.style.opacity = "0";
  observer.observe(section);
});
