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
// CONFIGURAÇÃO DOS DEPOIMENTOS REAIS
const depoimentos = [
    { nome: "Studio Essence", local: "São Paulo, SP", texto: "A Dnine trouxe clareza estratégica e um padrão de execução muito acima do que já tínhamos visto. Hoje o marketing é previsível e orientado a dados." },
    { nome: "Belle Prime", local: "Campinas, SP", texto: "O posicionamento mudou completamente. O site, os anúncios e a estratégia passaram a transmitir valor real, e isso refletiu direto no faturamento." },
    { nome: "Maison Luxe", local: "Curitiba, PR", texto: "Antes investíamos sem controle. Com a Dnine, tudo passou a ser mensurado, otimizado e escalável. Resultado consistente mês após mês." },
    { nome: "Studio Noir", local: "Rio de Janeiro, RJ", texto: "O nível de organização e estratégia é outro. Hoje temos decisões baseadas em dados e uma presença digital muito mais profissional." },
    { nome: "Concept Beauty", local: "São Paulo, SP", texto: "A Dnine elevou nosso padrão de marca. Comunicação, anúncios e estrutura digital alinhados com o posicionamento premium que buscávamos." },
    { nome: "Aura Exclusive", local: "Porto Belo, SC", texto: "Não é só tráfego, é método. Existe estratégia, acompanhamento e evolução contínua. Finalmente sentimos segurança em escalar." }
];

const depoTrack = document.getElementById('depo-track');

// Função para criar o HTML dos cards
function renderDepoimentos() {
    // Duplicamos a lista para o efeito de scroll infinito não ter "buracos"
    const listaDuplicada = [...depoimentos, ...depoimentos];
    
    depoTrack.innerHTML = listaDuplicada.map(depo => `
        <div class="depo-card">
            <div class="depo-header">
                <h4 class="blue">${depo.nome}</h4>
                <small>${depo.local}</small>
            </div>
            <p class="depo-text">“${depo.texto}”</p>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
        </div>
    `).join('');
}

renderDepoimentos();
`;
depoTrack.innerHTML = depoContent.repeat(10);

// WHATSAPP REDIRECT
document.querySelector('.smaller-btn').addEventListener('click', () => {
    window.open('https://wa.me/5500000000000', '_blank'); // Troque pelo seu número

});
