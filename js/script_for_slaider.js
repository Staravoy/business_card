document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});
