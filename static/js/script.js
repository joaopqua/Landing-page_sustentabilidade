// JS simples para navegar no carrossel
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carrossel = document.querySelector('.carrossel-viewport');

prev.addEventListener('click', () => {
  carrossel.scrollBy({ left: -425, behavior: 'smooth' });
});

next.addEventListener('click', () => {
  carrossel.scrollBy({ left: 425, behavior: 'smooth' });
});

// ====================================================================

const targets = document.querySelectorAll('#sobre .sobre-esquerda, #sobre .sobre-direita p');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Desconecta o observer para não repetir a animação
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Elemento precisa estar 30% visível
  });

  targets.forEach(el => observer.observe(el));


  document.querySelector('.btn-hero').addEventListener('click', () => {
    document.querySelector('#formulario').scrollIntoView({ behavior: 'smooth' });
  });



  const menuIcon = document.querySelector('.menu-icon');
  const navLista = document.querySelector('.nav-lista');

 menuIcon.addEventListener('click', () => {
  navLista.classList.toggle('active');
  });



   document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.querySelector('.carrossel');
  if (!carrossel) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // EVENTOS DE MOUSE
  carrossel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carrossel.offsetLeft;
    scrollLeft = carrossel.scrollLeft;
  });

  carrossel.addEventListener('mouseleave', () => {
    isDown = false;
  });

  carrossel.addEventListener('mouseup', () => {
    isDown = false;
  });

  carrossel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrossel.offsetLeft;
    const walk = (x - startX) * 2;
    carrossel.scrollLeft = scrollLeft - walk;
  });

  // EVENTOS DE TOQUE (TOUCH)
  carrossel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carrossel.offsetLeft;
    scrollLeft = carrossel.scrollLeft;
  });

  carrossel.addEventListener('touchend', () => {
    isDown = false;
  });

  carrossel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carrossel.offsetLeft;
    const walk = (x - startX) * 2;
    carrossel.scrollLeft = scrollLeft - walk;
  });
});