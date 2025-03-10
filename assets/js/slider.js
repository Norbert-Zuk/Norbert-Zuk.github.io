document.addEventListener("DOMContentLoaded", function () {
    let current = 0;
    const images = document.querySelectorAll(".slider-img");
    const total = images.length;

    function changeImage() {
        images.forEach(img => img.classList.remove("active"));
        current = (current + 1) % total;
        images[current].classList.add("active");
    }

    setInterval(changeImage, 3000);
});
