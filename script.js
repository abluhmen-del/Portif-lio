document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      status.textContent = 'Preencha todos os campos antes de enviar sua mensagem.';
      status.classList.add('error');
      status.classList.remove('success');
      return;
    }

    if (!emailRegex.test(email)) {
      status.textContent = 'Informe um e-mail válido para continuar.';
      status.classList.add('error');
      status.classList.remove('success');
      return;
    }

    status.textContent = 'Mensagem enviada com sucesso! Nossa equipe retornará em breve.';
    status.classList.add('success');
    status.classList.remove('error');
    form.reset();
  });
});
