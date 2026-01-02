// Navigasi Smooth Scroll (Opsional karena CSS sudah menghandle)
// Tapi kita tambahkan efek sticky header yang berubah warna saat scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%';
        nav.style.background = '#ffffff';
    } else {
        nav.style.padding = '20px 10%';
    }
});

// Animasi Fade In sederhana saat scroll
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
    });
}, options);

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
});