AOS.init({ duration: 1000, once: true });

// Header Inteligente
let lastScrollY = window.scrollY;
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    window.scrollY > lastScrollY ? header.classList.add('navbar--hidden') : header.classList.remove('navbar--hidden');
    lastScrollY = window.scrollY;
});

// Render Depoimentos Reais
const depoimentos = [
    { nome: "Studio Essence", local: "São Paulo, SP", texto: "A Dnine trouxe clareza estratégica e um padrão de execução muito acima do que já tínhamos visto. Hoje o marketing é previsível e orientado a dados." },
    { nome: "Belle Prime", local: "Campinas, SP", texto: "O posicionamento mudou completamente. O site, os anúncios e a estratégia passaram a transmitir valor real, e isso refletiu direto no faturamento." },
    { nome: "Maison Luxe", local: "Curitiba, PR", texto: "Antes investíamos sem controle. Com a Dnine, tudo passou a ser mensurado, otimizado e escalável. Resultado consistente mês após mês." },
    { nome: "Studio Noir", local: "Rio de Janeiro, RJ", texto: "O nível de organização e estratégia é outro. Hoje temos decisões baseadas em dados e uma presença digital muito mais profissional." },
    { nome: "Concept Beauty", local: "São Paulo, SP", texto: "A Dnine elevou nosso padrão de marca. Comunicação, anúncios e estrutura digital alinhados com o posicionamento premium que buscávamos." },
    { nome: "Aura Exclusive", local: "Porto Belo, SC", texto: "Não é só tráfego, é método. Existe estratégia, acompanhamento e evolução contínua. Finalmente sentimos segurança em escalar." }
];

const depoTrack = document.getElementById('depo-track');
const listaDuplicada = [...depoimentos, ...depoimentos];
depoTrack.innerHTML = listaDuplicada.map(d => `
    <div class="depo-card">
        <div class="depo-header">
            <h4>${d.nome}</h4>
            <small>${d.local}</small>
        </div>
        <p class="depo-text">“${d.texto}”</p>
        <div style="color:#fbbf24; font-size:0.8rem">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
    </div>
`).join('');

// WhatsApp
document.querySelector('.btn-whatsapp').addEventListener('click', () => {
    window.open('https://wa.me/55SEUNUMERO', '_blank');
});
