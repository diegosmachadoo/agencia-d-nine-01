AOS.init({ duration: 1000, once: true });

// Dados dos 8 Reviews (6 originais + 2 novos)
const depoimentos = [
    { nome: "Studio Essence", local: "São Paulo, SP", texto: "A Dnine trouxe clareza estratégica e um padrão de execução muito acima do que já tínhamos visto." },
    { nome: "Belle Prime", local: "Campinas, SP", texto: "O posicionamento mudou completamente. O site e a estratégia passaram a transmitir valor real." },
    { nome: "Maison Luxe", local: "Curitiba, PR", texto: "Antes investíamos sem controle. Com a Dnine, tudo passou a ser mensurado e escalável." },
    { nome: "Studio Noir", local: "Rio de Janeiro, RJ", texto: "O nível de organização é outro. Hoje temos decisões baseadas em dados e presença profissional." },
    { nome: "Concept Beauty", local: "São Paulo, SP", texto: "Elevou nosso padrão de marca. Comunicação e anúncios alinhados com o posicionamento premium." },
    { nome: "Aura Exclusive", local: "Porto Belo, SC", texto: "Não é só tráfego, é método. Finalmente sentimos segurança em escalar o faturamento." },
    { nome: "Royal Care", local: "Curitiba, PR", texto: "A melhor decisão para o crescimento da rede. Suporte impecável e foco total em lucro bruto." },
    { nome: "Iluminar Studio", local: "Goiânia, GO", texto: "Saímos do amadorismo digital para uma operação profissional em 45 dias. Resultados nítidos." }
];

const depoTrack = document.getElementById('depo-track');
const listaDuplicada = [...depoimentos, ...depoimentos];

depoTrack.innerHTML = listaDuplicada.map(d => `
    <div class="depo-card">
        <div class="depo-header">
            <h4 style="color: #2563eb; font-weight: 900;">${d.nome}</h4>
            <small style="color: #94a3b8; display: block; margin-bottom: 10px;">${d.local}</small>
        </div>
        <p style="font-style: italic; font-size: 0.9rem; margin-bottom: 15px;">“${d.texto}”</p>
        <div style="color:#fbbf24; font-size:0.7rem">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
    </div>
`).join('');

// Função do Botão WhatsApp
document.querySelector('.btn-whatsapp').addEventListener('click', () => {
    window.open('https://wa.me/55SEUNUMERO', '_blank'); // Troque pelo seu número
});
