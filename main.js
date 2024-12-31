document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
});

// Função para abrir o modal
function abrirModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = 'flex';
  }
  
  // Função para fechar o modal
  function fecharModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = 'none';
  }
  