const formulario = document.querySelector(".contact-form");
const mensagem = document.getElementById("mensagem-sucesso");

if (formulario && mensagem) {
    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        mensagem.style.display = "block";

        formulario.reset();

        setTimeout(() => {
            mensagem.style.display = "none";
        }, 7000);
    });
}

// ===========================
// MENU LATERAL
// ===========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const fecharMenu = document.getElementById("fecharMenu");

fecharMenu.addEventListener("click", () => {
    menu.classList.remove("ativo");
});

// ===========================
// pesquisa
// ===========================

const campoPesquisa = document.getElementById('pesquisa');
const listaOpcoes = document.getElementById('lista-opcoes');

// 1. Abre a lista assim que o usuário clica/foca no campo
campoPesquisa.addEventListener('focus', () => {
    listaOpcoes.classList.remove('escondida');
});

// 2. Fecha a lista se o usuário clicar em qualquer outro lugar da tela
document.addEventListener('click', (evento) => {
    if (!campoPesquisa.contains(evento.target) && !listaOpcoes.contains(evento.target)) {
        listaOpcoes.classList.add('escondida');
    }
});

// 3. Quando clicar em um curso, joga o texto dele para o input e fecha a lista
listaOpcoes.querySelectorAll('li').forEach(opcao => {
    opcao.addEventListener('click', () => {
        campoPesquisa.value = opcao.textContent;
        listaOpcoes.classList.add('escondida');
    });
});

// ===========================
// sidebar
// ===========================


  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    // Adiciona ou remove a classe "active" toda vez que o botão é clicado
    sidebar.classList.toggle('active');
  }
  
// ===========================
// carrosel
// ===========================

const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isTransitioning = false;

// Função para avançar 1 item de forma infinita
function slideNext() {
  if (isTransitioning) return;
  isTransitioning = true;

  track.style.transition = 'transform 0.4s ease-in-out';
  const cardWidth = track.firstElementChild.getBoundingClientRect().width;
  track.style.transform = `translateX(-${cardWidth}px)`;

  track.addEventListener('transitionend', () => {
    track.style.transition = 'none';
    // Move o primeiro elemento para o final do carrossel
    track.appendChild(track.firstElementChild);
    track.style.transform = 'translateX(0)';
    isTransitioning = false;
  }, { once: true });
}

// Função para voltar 1 item de forma infinita
function slidePrev() {
  if (isTransitioning) return;
  isTransitioning = true;

  const cardWidth = track.firstElementChild.getBoundingClientRect().width;
  
  // Move o último elemento para o início antes de animar
  track.style.transition = 'none';
  track.insertBefore(track.lastElementChild, track.firstElementChild);
  track.style.transform = `translateX(-${cardWidth}px)`;

  // Força o navegador a reconhecer a posição inicial antes de deslizar
  setTimeout(() => {
    track.style.transition = 'transform 0.4s ease-in-out';
    track.style.transform = 'translateX(0)';
  }, 10);

  track.addEventListener('transitionend', () => {
    isTransitioning = false;
  }, { once: true });
}

// Clique nos botões
nextBtn.addEventListener('click', () => {
  slideNext();
  resetAutoplay();
});

prevBtn.addEventListener('click', () => {
  slidePrev();
  resetAutoplay();
});

// Autoplay contínuo (passa a cada 3 segundos)
let autoplay = setInterval(slideNext, 3000);

function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(slideNext, 3000);
}

// Pausa o autoplay se o usuário passar o mouse por cima do carrossel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
carouselContainer.addEventListener('mouseleave', () => resetAutoplay());

// ===========================
// pesquisa
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  const campoPesquisa = document.getElementById('pesquisa');
  const btnPesquisar = document.getElementById('btn-pesquisar');

  // Mapeamento dos cursos e suas respectivas páginas HTML
  const paginasCursos = {
    'psicologia': 'psicologia.html',
    'engenharia civil': 'engenharia.html',       // Altere para o nome real do seu arquivo
    'arq. & urbanismo': 'arquiteturaeurbanismo.html',     // Altere para o nome real do seu arquivo
    'direito': 'direito.html',                   // Altere para o nome real do seu arquivo
    'design gráfico': 'designgrafico.html',             // Altere para o nome real do seu arquivo
    'medicina': 'medicina.html',                 // Altere para o nome real do seu arquivo
    'marketing': 'marketing.html',               // Altere para o nome real do seu arquivo
    'enfermagem': 'enfermagem.html',             // Altere para o nome real do seu arquivo
    'tecnologia da informação': 'tecnologiadainformacao.html',       // Altere para o nome real do seu arquivo
    'ciências contábeis': 'cienciascontabeis.html'       // Altere para o nome real do seu arquivo
  };

  if (btnPesquisar && campoPesquisa) {
    btnPesquisar.addEventListener('click', (event) => {
      event.preventDefault();

      const termo = campoPesquisa.value.trim().toLowerCase();

      // 1. Se o campo estiver em branco
      if (termo === '') {
        alert('Por favor, digite o nome de um curso.');
        return;
      }

      // 2. Verifica se o curso digitado existe no mapeamento
      if (paginasCursos[termo]) {
        window.location.href = paginasCursos[termo];
      } else {
        // 3. Se o curso não estiver na lista cadastrada
        alert('Curso não encontrado. Verifique a grafia ou escolha uma opção da lista.');
      }
    });
  }
});

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que a página recarregue

    alert("Matrícula enviada com sucesso!");

});