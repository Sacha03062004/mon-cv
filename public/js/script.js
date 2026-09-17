// ===== TOGGLE MODE JOUR / NUIT =====
const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('mode-jour');
    body.classList.toggle('mode-nuit');

    // Changer l'icône selon le mode
    const icon = toggleTheme.querySelector('i');
    if (body.classList.contains('mode-jour')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ===== AFFICHAGE NUMERO DE TELEPHONE =====
const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');

phoneIcon.addEventListener('click', () => {
    phoneNumber.classList.toggle('visible');
});

// Fermer le popup si on clique ailleurs
document.addEventListener('click', (e) => {
    if (!e.target.closest('.phone-container')) {
        phoneNumber.classList.remove('visible');
    }
});