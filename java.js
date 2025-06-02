const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.zoomable-img').forEach(img => {
img.addEventListener('click', () => {
modal.style.display = "block";
modalImg.src = img.src;
});
});


closeModal.addEventListener('click', () => {
modal.style.display = "none";
});

window.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.display = "none";
}
});

//  Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active');
navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
menuToggle.classList.remove('active');
navLinks.classList.remove('active');
});
});


window.addEventListener('scroll', () => {
const header = document.getElementById('header');
if (window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}

// 
const backToTop = document.querySelector('.back-to-top');
if (window.scrollY > 300) {
backToTop.classList.add('active');
} else {
backToTop.classList.remove('active');
}
});

//
const element = document.querySelector('.typed-text');
if (element) {
element.textContent = ''; 
const typed = new Typed('.typed-text', {
strings: ['Diseñador Front-end', 'Diseñador UI/UX'],
typeSpeed: 60,
backSpeed: 60,
loop: true
});
}


document.addEventListener('DOMContentLoaded', function() {

document.querySelectorAll('.slider-container').forEach(initSlider);

function initSlider(container) {
const track = container.querySelector('.slider-track');
const slides = container.querySelectorAll('.slide');
const prevBtn = container.querySelector('.prev-btn');
const nextBtn = container.querySelector('.next-btn');
const indicatorsContainer = container.querySelector('.slider-indicators');
let currentIndex = 0;


slides.forEach((_, index) => {
const indicator = document.createElement('div');
indicator.classList.add('indicator');
if (index === 0) indicator.classList.add('active');
indicator.addEventListener('click', () => goToSlide(index));
indicatorsContainer.appendChild(indicator);
});

const indicators = container.querySelectorAll('.indicator');


function updateSlider() {
track.style.transform = `translateX(-${currentIndex * 100}%)`;


indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
});
}


function goToSlide(index) {
currentIndex = index;
updateSlider();
}


function prevSlide() {
currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
updateSlider();
}


function nextSlide() {
currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
updateSlider();
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);




container.addEventListener('mouseenter', () => {

});

container.addEventListener('mouseleave', () => {

});
}
});




const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, {
threshold: 0.1
});

animateElements.forEach(element => {
observer.observe(element);
});


// Extender el modal de imágenes para los certificados
document.querySelectorAll('.certificate-image img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;

const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
}
});
});


document.getElementById("contactForm").addEventListener("submit", async function (e) {
e.preventDefault(); // Evita la redirección

const form = e.target;
const formData = new FormData(form);

const response = await fetch("https://formspree.io/f/xblyjjop", {
method: "POST",
headers: {
'Accept': 'application/json'
},
body: formData
});

const statusDiv = document.getElementById("formStatus");

if (response.ok) {
statusDiv.textContent = "✅ Gracias por tu mensaje. Te responderé pronto.";
form.reset();
} else {
statusDiv.style.color = "red";
statusDiv.textContent = "❌ Ocurrió un error. Por favor, intenta nuevamente.";
}

 setTimeout(() => {
      statusDiv.textContent = "";
    }, 4000);
    
});