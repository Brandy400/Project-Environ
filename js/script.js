document.addEventListener("DOMContentLoaded", () => {
    let progressValue = { progress: 0 };
    
    gsap.to(progressValue, {
        progress: 100,
        duration: 0,
        ease: "linear",
        onUpdate: () => {
            document.getElementById("progress").textContent = `${Math.round(progressValue.progress)}%`;
            let blurValue = 20 - (progressValue.progress / 5);
            let opacityValue = progressValue.progress / 100;
            document.getElementById("main-content").style.filter = `blur(${blurValue}px)`;
            document.getElementById("main-content").style.opacity = opacityValue;
        },
        onComplete: () => {
            gsap.to(".preloader", {
                duration: 0.5,
                opacity: 0,
                onComplete: () => {
                    document.querySelector(".preloader").style.display = "none";
                }
            });
        }
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

document.getElementById('before-after-slider').addEventListener('input', function(e) {
    const value = e.target.value;
    document.querySelector('.img-after').style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    document.querySelector('.img-before').style.clipPath = `inset(0 0 0 ${value}%)`;
});

document.getElementById('amazon-slider').addEventListener('input', function(e) {
    const value = e.target.value;
    document.querySelector('.img-after').style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});
