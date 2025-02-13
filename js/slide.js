let slideIndex = 0;
showSlides(); // Start med at vise den første slide

// Funktion til at vise de slides
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Skjul alle slides
    }

    // Sørg for, at slideIndex ikke går uden for rækkevidde
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Hvis vi er på sidste slide, gå tilbage til første slide
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Hvis vi er før første slide, gå til sidste slide
    }

    // Vis den aktuelle slide
    slides[slideIndex].style.display = "block";
}

// Funktion til at navigere frem og tilbage i slides
function plusSlides(n) {
    slideIndex += n;
    showSlides(); // Vis den opdaterede slide
}