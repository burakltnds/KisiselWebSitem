// Sayfada smooth scroll (yumuşak kaydırma) efekti eklemek
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// İletişim butonuna tıklama olayını yakalamak
const contactButton = document.querySelector('.btn');
contactButton.addEventListener('click', function () {
    alert("LinkedIn'e yönlendiriliyorsunuz!");
});

const toggleMode = document.querySelector('.toggle-mode');
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode && savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Sayfa yüklendiğinde loader'ı gizle
window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
};

