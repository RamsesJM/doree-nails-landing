// Menú móvil
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Lightbox de la galería
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('img');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    box.hidden = false;
  });
});
box.addEventListener('click', () => (box.hidden = true));
document.addEventListener('keydown', e => { if (e.key === 'Escape') box.hidden = true; });

// Formulario: validación simple y envío por WhatsApp
const form = document.getElementById('form');
const msg = form.querySelector('.msg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = form.nombre, tel = form.telefono;
  [nombre, tel].forEach(i => i.classList.toggle('error', !i.value.trim()));
  if (!nombre.value.trim() || !tel.value.trim()) {
    msg.textContent = 'Completa tu nombre y teléfono para continuar.';
    return;
  }
  const texto = `Hola, soy ${nombre.value}. Quiero reservar: ${form.servicio.value}` +
    (form.fecha.value ? ` para el ${form.fecha.value}` : '') + `. Mi teléfono: ${tel.value}`;
  window.open('https://wa.me/18090000000?text=' + encodeURIComponent(texto), '_blank');
  msg.textContent = 'Listo, te redirigimos a WhatsApp para confirmar.';
  form.reset();
});
