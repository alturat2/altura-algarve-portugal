/*==================================================
 ALTURA BEACH APARTMENT
 script.js
 Versão 2.0
==================================================*/


/*==================================================
ANO AUTOMÁTICO NO RODAPÉ
==================================================*/

const ano = document.getElementById("ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}


/*==================================================
SCROLL SUAVE DOS LINKS
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
HEADER AO FAZER SCROLL
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(255,255,255,.98)";

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.12)";

    }

    else{

        header.style.background="rgba(255,255,255,.95)";

        header.style.boxShadow="none";

    }

});

/*==================================================
LIGHTBOX DA GALERIA
==================================================*/

const imagens = document.querySelectorAll(".galeria img");

imagens.forEach((imagem) => {

    imagem.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        const foto = document.createElement("img");

        foto.src = imagem.src;

        foto.alt = imagem.alt;

        lightbox.appendChild(foto);

        document.body.appendChild(lightbox);

        document.body.style.overflow = "hidden";

        lightbox.addEventListener("click", () => {

            document.body.style.overflow = "";

            lightbox.remove();

        });

    });

});


/*==================================================
FECHAR LIGHTBOX COM A TECLA ESC
==================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        const lightbox = document.querySelector(".lightbox");

        if (lightbox) {

            document.body.style.overflow = "";

            lightbox.remove();

        }

    }

});


/*==================================================
PRECARREGAR IMAGENS DA GALERIA
==================================================*/

window.addEventListener("load", () => {

    imagens.forEach((img) => {

        const preload = new Image();

        preload.src = img.src;

    });

});

/*==================================================
 BOTÃO "VOLTAR AO TOPO"
==================================================*/

const botaoTopo = document.createElement("button");

botaoTopo.className = "topo";

botaoTopo.innerHTML = '<i class="bi bi-arrow-up"></i>';

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("mostrar");

    } else {

        botaoTopo.classList.remove("mostrar");

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
 BOTÃO FLUTUANTE DO WHATSAPP
==================================================*/

const whatsapp = document.createElement("a");

whatsapp.className = "whatsapp-float";

whatsapp.href = "https://wa.me/351962555018?text=Olá%20Paulo.%20Gostaria%20de%20obter%20informações%20sobre%20o%20apartamento.";

whatsapp.target = "_blank";

whatsapp.setAttribute("aria-label", "WhatsApp");

whatsapp.innerHTML = '<i class="bi bi-whatsapp"></i>';

document.body.appendChild(whatsapp);


/*==================================================
 ANIMAÇÕES AO FAZER SCROLL
==================================================*/

const elementos = document.querySelectorAll(
    "section, .card, .comodidade, figure, .info-reserva"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach((elemento) => {

    elemento.classList.add("hidden");

    observador.observe(elemento);

});

/*==================================================
 BOTÃO "VOLTAR AO TOPO"
==================================================*/

const botaoTopo = document.createElement("button");

botaoTopo.className = "topo";

botaoTopo.innerHTML = '<i class="bi bi-arrow-up"></i>';

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("mostrar");

    } else {

        botaoTopo.classList.remove("mostrar");

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
 BOTÃO FLUTUANTE DO WHATSAPP
==================================================*/

const whatsapp = document.createElement("a");

whatsapp.className = "whatsapp-float";

whatsapp.href = "https://wa.me/351962555018?text=Olá%20Paulo.%20Gostaria%20de%20obter%20informações%20sobre%20o%20apartamento.";

whatsapp.target = "_blank";

whatsapp.setAttribute("aria-label", "WhatsApp");

whatsapp.innerHTML = '<i class="bi bi-whatsapp"></i>';

document.body.appendChild(whatsapp);


/*==================================================
 ANIMAÇÕES AO FAZER SCROLL
==================================================*/

const elementos = document.querySelectorAll(
    "section, .card, .comodidade, figure, .info-reserva"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

elementos.forEach((elemento) => {

    elemento.classList.add("hidden");

    observador.observe(elemento);

});

const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

if (botaoMenu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });
}