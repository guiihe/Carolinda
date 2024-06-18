document.addEventListener('DOMContentLoaded', () => {
    // Quando o documento é totalmente carregado, essa função é executada
    console.log('O site Carolinda está pronto!');
    
    // Seleciona os botões de navegação do carrossel
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    // Seleciona o contêiner do carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    // Índice inicial do carrossel
    let index = 0;

    // Adiciona um evento de clique ao botão "next"
    nextBtn.addEventListener('click', () => {
        // Incrementa o índice e usa o módulo para garantir que ele não exceda o número de slides
        index = (index + 1) % carouselContainer.children.length;
        // Atualiza o carrossel para mostrar o slide correspondente
        updateCarousel();
    });

    // Adiciona um evento de clique ao botão "prev"
    prevBtn.addEventListener('click', () => {
        // Decrementa o índice e usa o módulo para garantir que ele não seja negativo
        index = (index - 1 + carouselContainer.children.length) % carouselContainer.children.length;
        // Atualiza o carrossel para mostrar o slide correspondente
        updateCarousel();
    });

    // Função para atualizar o carrossel
    function updateCarousel() {
        // Obtém a largura do slide (supõe-se que todos os slides têm a mesma largura)
        const slideWidth = carouselContainer.children[0].clientWidth;
        // Move o contêiner do carrossel para a esquerda com base no índice do slide atual
        carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
    }
    
    // Seleciona o botão de voltar ao topo
    var botaoVoltarTopo = document.getElementById("botao");

    // Quando o usuário rola a página, chama a função funcaoRolagem
    window.onscroll = function () { funcaoRolagem() };

    // Função que mostra ou esconde o botão de voltar ao topo com base na posição de rolagem
    function funcaoRolagem() {
        if (document.documentElement.scrollTop > 40) {
            // Se a rolagem vertical for maior que 40px, mostra o botão
            botaoVoltarTopo.style.display = "block";
        } else {
            // Caso contrário, esconde o botão
            botaoVoltarTopo.style.display = "none";
        }
    }

    // Quando o botão de voltar ao topo é clicado
    botaoVoltarTopo.onclick = function () {
        // Rola a página de volta ao topo
        document.documentElement.scrollTop = 0;
    }
});
