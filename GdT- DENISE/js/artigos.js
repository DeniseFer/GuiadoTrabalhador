// Função para criar um carrossel dinâmico
function criarCarrossel(titulo, items, indice) {
    const container = document.createElement('div');
    container.classList.add('carrossel-artigos1');

    // Alterna os fundos com base no índice
    if (indice % 2 === 0) {
        container.classList.add('fundo-vermelho');
    } else {
        container.classList.add('fundo-branco');
    }

    // Adiciona o título da seção
    const tituloSecao = document.createElement('h2');
    tituloSecao.classList.add('titulo-secao');
    tituloSecao.textContent = titulo;

    // Define a cor do título com base no fundo
    if (indice % 2 === 0) {
        tituloSecao.style.color = '#ffffff'; // Título branco no fundo vermelho
    } else {
        tituloSecao.style.color = '#000000'; // Título preto no fundo branco
    }

    container.appendChild(tituloSecao);

    // Contêiner do carrossel
    const carrosselContainer = document.createElement('div');
    carrosselContainer.classList.add('carrossel-container');

    // Botão esquerdo
    const setaEsquerda = document.createElement('button');
    setaEsquerda.classList.add('seta-esquerda');
    setaEsquerda.innerHTML = '&#8249;';
    setaEsquerda.style.display = 'none'; // Esconde a seta inicialmente
    carrosselContainer.appendChild(setaEsquerda);

    // Carrossel
    const carrossel = document.createElement('div');
    carrossel.classList.add('carrossel');

    // Adiciona os itens ao carrossel
    items.forEach(item => {
        const carrosselItem = document.createElement('div');
        carrosselItem.classList.add('item');
        carrosselItem.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        `;
        carrossel.appendChild(carrosselItem);
    });
    carrosselContainer.appendChild(carrossel);

    // Botão direito
    const setaDireita = document.createElement('button');
    setaDireita.classList.add('seta-direita');
    setaDireita.innerHTML = '&#8250;';
    carrosselContainer.appendChild(setaDireita);

    // Adiciona o contêiner ao carrossel principal
    container.appendChild(carrosselContainer);

    // Adiciona o carrossel ao DOM
    document.querySelector('#carrossel-secoes').appendChild(container);

    // Inicializa o controle de navegação
    inicializarCarrossel(carrossel, setaEsquerda, setaDireita);
}

// Função para inicializar o controle de um carrossel
function inicializarCarrossel(carrossel, setaEsquerda, setaDireita) {
    const itemWidth = document.querySelector('.item').offsetWidth + 20;
    let currentIndex = 0;
    const initialOffset = (carrossel.parentElement.offsetWidth - 4 * itemWidth) / 2;

    carrossel.style.transform = `translateX(${initialOffset}px)`;

    setaDireita.addEventListener('click', () => {
        currentIndex++;
        const maxIndex = carrossel.children.length - 4;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        carrossel.style.transform = `translateX(calc(-${currentIndex * itemWidth}px + ${initialOffset}px))`;

        setaEsquerda.style.display = currentIndex > 0 ? 'block' : 'none';
        setaDireita.style.display = currentIndex < maxIndex ? 'block' : 'none';
    });

    setaEsquerda.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = 0;

        carrossel.style.transform = `translateX(calc(-${currentIndex * itemWidth}px + ${initialOffset}px))`;

        setaEsquerda.style.display = currentIndex > 0 ? 'block' : 'none';
        setaDireita.style.display = currentIndex < carrossel.children.length - 4 ? 'block' : 'none';
    });

    setaEsquerda.style.display = 'none';
    setaDireita.style.display = carrossel.children.length > 4 ? 'block' : 'none';
}

// Criação dos carrosséis dinâmicos com alternância de fundo
const carrosseis = [
    {
        titulo: 'Política |',
        items: [
            {
                img: '/images/noticia1.png',
                alt: 'Notícia 1',
                titulo: 'A escala 6X1: O que significa a pauta atualmente discutida no congresso?',
                descricao: 'Fique por dentro das mais recentes atualizações sobre a jornada de trabalho brasileira.'
            },
            {
                img: '/images/mapa-brasil.png',
                alt: 'Notícia 2',
                titulo: 'A escala 6X1: A aprovação da mudança da escala em diferentes estados do Brasil.',
                descricao: 'Saiba quais regiões do Brasil apoiam mais a pauta.'
            },
            {
                img: '/images/mapa-brasil.png',
                alt: 'Notícia 2',
                titulo: 'A escala 6X1: A aprovação da mudança da escala em diferentes estados do Brasil.',
                descricao: 'Saiba quais regiões do Brasil apoiam mais a pauta.'
            },
            {
                img: '/images/mapa-brasil.png',
                alt: 'Notícia 2',
                titulo: 'A escala 6X1: A aprovação da mudança da escala em diferentes estados do Brasil.',
                descricao: 'Saiba quais regiões do Brasil apoiam mais a pauta.'
            },
            {
                img: '/images/mapa-brasil.png',
                alt: 'Notícia 2',
                titulo: 'A escala 6X1: A aprovação da mudança da escala em diferentes estados do Brasil.',
                descricao: 'Saiba quais regiões do Brasil apoiam mais a pauta.'
            }
            // Outros itens...
        ]
    },
    {
        titulo: 'Opinião |',
        items: [
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            }
            // Outros itens...
        ]
    },
    {
        titulo: 'Segurança no Trabalho |',
        items: [
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            },
            {
                img: '/images/noticia2.png',
                alt: 'Notícia 1',
                titulo: 'Avanços em IA: O futuro está aqui',
                descricao: 'Descubra como a inteligência artificial está revolucionando o mundo.'
            }
            // Outros itens...
        ]
    }
];

// Cria os carrosséis dinâmicos com base nos dados
carrosseis.forEach((carrossel, index) => {
    criarCarrossel(carrossel.titulo, carrossel.items, index);
});
