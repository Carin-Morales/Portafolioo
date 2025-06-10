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
    strings: [' UI/UX', ' Front-end'],
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
    statusDiv.textContent = " Mensaje enviado con éxito. Gracias por contactarme.";
    form.reset();
  } else {
    statusDiv.style.color = "red";
    statusDiv.textContent = " Ocurrió un error. Por favor, intenta nuevamente.";
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

  // Traducciones al inglés
const translations = {
  // Navegación
  "Inicio": "Home",
  "Acerca de mí": "About Me",
  "Formación": "Education",
  "Proyectos": "Projects",
  "Contacto": "Contact",
  
  // Hero Section
  "Hola, soy": "Hello, I'm",
  "Contactame": "Contact Me",
  "Ver Proyecto": "View Projects",
  
  // About Section
  "Acerca de mí": "About Me",
  "Soy Carin, estudiante con interés en el Diseño UX/UI y Desarrollo Front-end. Me apasiona la forma en que la creatividad y la funcionalidad se combinan para crear experiencias únicas y memorables para los usuarios.": 
  "I'm Carin, a student with interest in UX/UI Design and Front-end Development. I'm passionate about how creativity and functionality combine to create unique and memorable user experiences.",
  "Mi enfoque se centra en diseñar interfaces intuitivas y atractivas, combinando principios de diseño con las mejores prácticas de desarrollo web. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.":
  "My focus is on designing intuitive and attractive interfaces, combining design principles with best web development practices. I'm always looking to learn new technologies and improve my skills.",
  "Descargar CV": "Download CV",
  "Habilidades": "Skills",
  
  // Education Section
  "Formación Académica": "Academic Education",
  "Diplomas": "Diplomas",
  "Certificados": "Certificates",
  "Testimonios": "Testimonials",
  "Mis Diplomas y reconocimientos": "My Diplomas and Awards",
  "Mis Certificados": "My Certificates",
  "Tercer Lugar": "Third Place",
  "Investigacion de Catedra": "Chair Research",
  "Diseño Web Profesional: Curso Completo, Práctico y desde 0": "Professional Web Design: Complete, Practical Course from Scratch",
  "Certificado en principios de diseño web e interfaces.": "Certificate in web design principles and interfaces.",
  "Fundamentos del Diseño Grafico": "Fundamentals of Graphic Design",
  "Certificación en fundamentos del diseño, incluyendo elementos, principios, tipografía, teoría del color.":
  "Certification in design fundamentals, including elements, principles, typography, color theory.",
  "Productividad Personal": "Personal Productivity",
  "Certificado para gestionar eficazmente el tiempo y recursos con el fin de alcanzar los objetivos y metas individuales.":
  "Certificate to effectively manage time and resources to achieve individual goals and objectives.",
  "Ver Credencial": "View Credential",
  
  // Projects Section
  "Mis Proyectos": "My Projects",
  "Proyecto Académico": "Academic Project",
  "Diseñador y desarrollador front-end": "Front-end Designer and Developer",
  "Una plataforma web que permite visualizar todos los estacionamientos disponibles en el municipio de Usulután, junto con información detallada y su ubicación geográfica.":
  "A web platform that allows viewing all available parking spaces in the municipality of Usulután, along with detailed information and their geographic location.",
  "Desarrollador front-end y backend":
  "Front-end and backend developer",
  "Aplicación móvil está diseñada para facilitar la administración eficiente de inventarios y la gestión de ventas de zapatos deportivos de marca, todo en una plataforma intuitiva y fácil de usar.":
  "Mobile application designed to facilitate efficient inventory management and sales of brand sports shoes, all in an intuitive and easy-to-use platform.",
  "Plataforma web para la gestión de asistencia de empleados. La plataforma permitía a los empleados registrarse con su usuario y contraseña para marcar su hora de entrada y salida":
  "Web platform for employee attendance management. The platform allowed employees to register with their username and password to clock in and out.",
  "Ver Proyecto": "View Project",
  
  // Contact Section
  "Contacto": "Contact",
  "¿Tiene alguna pregunta? No dude en contactarme. Será un placer ayudarle.":
  "Do you have any questions? Feel free to contact me. I'll be happy to help you.",
  "Nombre": "Name",
  "Email": "Email",
  "Asunto": "Subject",
  "Mensaje": "Message",
  "Enviar": "Send",
  
  // Testimonials
  "Docente Universidad Gerardo Barrios": "Professor Gerardo Barrios University",
  "Docente Universidad Gerardo Barrios": "Professor Gerardo Barrios University",
   "Docente ": "Professor",
  
  // Footer
  "CV en Español": "CV in Spanish",
"CV en Inglés": "CV in English",

  "Formandome Hoy Para Diseñar el Mañana.": "Training Today to Design Tomorrow.",
  "© 2025 Carin Morales. Todos los derechos reservados.": "© 2025 Carin Morales. All rights reserved.",
  
  // Botón de idioma
  "English": "Español"

  
};

// Función para cambiar el idioma
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'es' ? 'en' : 'es';
  
  document.documentElement.lang = newLang;
  
  if (newLang === 'en') {
    // Traducir a inglés
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[key]) {
        element.textContent = translations[key];
      }
    });

    // Traducir placeholders
document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
  const original = element.getAttribute('placeholder');
  if (translations[original]) {
    element.setAttribute('placeholder', translations[original]);
  }
});

    
    // Cambiar texto del botón
    document.getElementById('lang-text').textContent = 'Español';
    document.getElementById('lang-flag').textContent = '🇪🇸';
  } else {
    // Volver a español (recargar la página)
    location.reload();
  }
}

// Asignar evento al botón
document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

  const toggleBtn = document.getElementById('toggleCvBtn');
  const cvOptions = document.getElementById('cvOptions');

  toggleBtn.addEventListener('click', () => {
    cvOptions.classList.toggle('show');
  });