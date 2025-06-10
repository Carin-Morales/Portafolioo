// ========================================
//MODAL DE IMÁGENES para ampliar imagenes
// ========================================
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close-modal');

// se abre modal al hacer clic 
document.querySelectorAll('.zoomable-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Cierra modal 
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// Cierra modal fuera de el
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// ========================================
//  menu responsive para movil
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cierra el menu al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});


// ========================================
// efecto scroll para subir
// ========================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const backToTop = document.querySelector('.back-to-top');

  // Añade fondo 
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Muestra botón para volver arriba
  if (window.scrollY > 300) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});


// ========================================
// texto animado para home 
// ========================================
const element = document.querySelector('.typed-text');
if (element) {
  element.textContent = ''; 
  const typed = new Typed('.typed-text', {
    strings: ['UI/UX Designer', 'Front-end Developer'],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
  });
}


// ========================================
// carusel de imagenes
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slider-container').forEach(initSlider);

  function initSlider(container) {
    const track = container.querySelector('.slider-track');
    const slides = container.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    const indicatorsContainer = container.querySelector('.slider-indicators');
    let currentIndex = 0;

    // 
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });

    const indicators = container.querySelectorAll('.indicator');

    // 
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
  }
});


// ========================================
// animacion de scroller
// ========================================
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


// ========================================
// 🏅 modal para certificados y diplomas
// ========================================
document.querySelectorAll('.certificate-image img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});


// ========================================
// scroll para los enlaces 
// ========================================
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


// ========================================
// formulario de formspree
// ========================================
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Evita la redirección

  const form = e.target;
  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/xblyjjop", {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: formData
  });

  const statusDiv = document.getElementById("formStatus");

  if (response.ok) {
    statusDiv.textContent = "✅ Message sent successfully. Thank you for contacting me.";
    form.reset();
  } else {
    statusDiv.style.color = "red";
    statusDiv.textContent = "An error occurred. Please try again.";
  }

  setTimeout(() => {
    statusDiv.textContent = "";
  }, 4000);
});

// ========================================
// pestañas de contenido
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

    
      tabButtons.forEach(btn => btn.classList.remove("active"));
     
      button.classList.add("active");

      // Ocultar todos los contenidos
      tabContents.forEach(content => {
        content.classList.remove("active");
      });

      // Mostrar el contenido seleccionado
      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});


  // Selección de todos los elementos img dentro de .letter-image
  document.querySelectorAll('.letter-image img').forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });

  // Cerrar modal al hacer clic en la X
  document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('imageModal').style.display = 'none';
  });

  // También cerrar si se hace clic fuera de la imagen
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


 


