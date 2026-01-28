// AOS - Animações de Scroll
AOS.init({ duration: 1000, once: true });

// HEADER INTELIGENTE (SUMIR/APARECER)
let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 150) {
        header.classList.add('navbar--hidden');
    } else {
        header.classList.remove('navbar--hidden');
    }
    lastScrollY = window.scrollY;
});

// FRAMEWORK D9
const d9Data = ["Diagnóstico", "Direcionamento", "Design", "Desenvolvimento", "Distribuição", "Domínio", "Decisão", "Dobrar Resultados", "Diferenciação"];
const d9Container = document.getElementById('d9-container');
d9Data.forEach((d, i) => {
    d9Container.innerHTML += `<div class="item-d9" data-aos="zoom-in"><strong>D${i+1}</strong><br>${d}</div>`;
});

// SLIDER DE DEPOIMENTOS
const depoTrack = document.getElementById('depo-track');
const depoContent = `
    <div class="depo-card">
        <h4 class="blue">Salão de Beleza Luxe</h4>
        <small>São Paulo, SP</small>
        <p>"A DNINE mudou o sistema de marketing da minha empresa. Conseguimos em menos de 3 meses quase dobrar meu faturamento."</p>
    </div>
`;
depoTrack.innerHTML = depoContent.repeat(10);

// WHATSAPP REDIRECT
document.querySelector('.smaller-btn').addEventListener('click', () => {
    window.open('https://wa.me/5500000000000', '_blank'); // Troque pelo seu número
});