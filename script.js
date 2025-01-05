let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

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
}
