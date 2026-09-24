// =========================
// LINKS DAS MÚSICAS
// =========================

const linksSpotify = [
    // 1 - Bloco dos Apaixonados
    "https://open.spotify.com/album/56wCjkQK8O6x2V25skPFsB",

    // 2 - SEM PAUSA
    "https://open.spotify.com/track/0b9NPo02oQxZF1hsFgfl2L",

    // 3 - Sinceramente
    "https://open.spotify.com/track/01dNJ795LjHNFLtScNmjln",

    // 4 - Foi assim
    "https://open.spotify.com/track/6fPALIGFkjmlHKuiiZLRl6",

    // 5 - 3AM (PXT4 RASA) - Remix
    "https://open.spotify.com/track/0niFRLaq6SNmy6PThNORj0",

    // 6 - Cura
    "https://open.spotify.com/album/56wCjkQK8O6x2V25skPFsB"
];


// =========================
// BOTÕES "OUVIR"
// =========================

const botoesOuvir = document.querySelectorAll(".botao-ouvir");

botoesOuvir.forEach((botao, index) => {

    botao.addEventListener("click", () => {

        window.open(linksSpotify[index], "_blank");

    });

});


// =========================
// REDES SOCIAIS
// =========================

const linksRedes = {

    Instagram: "https://www.instagram.com/afrosotam/",

    YouTube: "https://www.youtube.com/@sotam",

    Spotify: "https://open.spotify.com/artist/0xKbHuoAoxvPu5uGax4d9l",

    TikTok: "https://www.tiktok.com/@sotamzinho"

};


// =========================
// BOTÕES DAS REDES
// =========================

const redesSociais = document.querySelectorAll(".redes-sociais a");

redesSociais.forEach((rede) => {

    const nomeRede = rede.textContent.trim();

    if (linksRedes[nomeRede]) {

        rede.href = linksRedes[nomeRede];

        rede.target = "_blank";

    }

});