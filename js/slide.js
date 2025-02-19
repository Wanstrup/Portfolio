let currentIndex = 0;

function changeActive(direction) {
    const boxes = document.querySelectorAll(".box");

    // Opdater index
    currentIndex += direction;

    // Sikrer, at vi holder os indenfor grænserne
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= boxes.length) currentIndex = boxes.length - 1;

    // Fjern "active" fra alle kasser
    boxes.forEach(box => box.classList.remove("active"));

    // Tilføj "active" til den valgte kasse
    boxes[currentIndex].classList.add("active");

    // Opdater pile synlighed
    document.querySelector(".left-arrow").classList.toggle("hidden", currentIndex === 0);
    document.querySelector(".right-arrow").classList.toggle("hidden", currentIndex === boxes.length - 1);
}

// Skjul venstre pil fra start
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".left-arrow").classList.add("hidden");
});


