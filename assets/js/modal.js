document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-img");  // Wybierz wszystkie zdjêcia
    const modal = document.getElementById("imageModal");  // Wybierz modal
    const modalImg = document.getElementById("modalImg");  // Wybierz obrazek w modalu
    const closeModal = document.getElementById("closeModal");  // Wybierz przycisk zamkniêcia modala

    // Upewnij siê, ¿e modal jest ukryty na pocz¹tku
    modal.style.display = "none";

    images.forEach(image => {
        image.addEventListener("click", function () {
            modalImg.src = this.src;  // Ustawienie zdjêcia w modalu
            modal.style.display = "flex";  // Pokazanie modala
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";  // Ukrycie modala po klikniêciu w 'X'
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";  // Ukrycie modala po klikniêciu w t³o
        }
    });
});
