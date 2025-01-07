let currentSlide = 0;
let autoplayInterval;

function moveSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    const dots = document.querySelectorAll(".dots button");

    // Update currentSlide index
    currentSlide += direction;

    // Wrap around if the index goes out of bounds
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Move the slider
    const slideWidth = document.querySelector(".slide").offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function createDots() {
    const totalSlides = document.querySelectorAll(".slide").length;
    const dotsContainer = document.querySelector(".dots");

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button");
        dot.addEventListener("click", () => {
            currentSlide = i;
            moveSlide(0);
        });
        dotsContainer.appendChild(dot);
    }

    // Set the first dot as active
    dotsContainer.children[0].classList.add("active");
}

function autoplay() {
    autoplayInterval = setInterval(() => moveSlide(1), 3000);
}

function pauseAutoplay() {
    clearInterval(autoplayInterval);
}

document.addEventListener("DOMContentLoaded", () => {
    createDots();
    autoplay();

    const slider = document.querySelector(".image-slider");
    slider.addEventListener("mouseover", pauseAutoplay);
    slider.addEventListener("mouseout", autoplay);
});
