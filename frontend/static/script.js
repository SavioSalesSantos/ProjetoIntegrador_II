let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Função para adicionar ao carrinho
function adicionarAoCarrinho(sabor) {
    // Define preços fictícios
    const precos = {
        "Chocolate": 7.5,
        "Morango": 6.0,
        "Baunilha": 5.5
    };

    const item = { sabor: sabor, preco: precos[sabor] };
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();
    mostrarMensagem(sabor);
}

// Atualiza o contador de itens no carrinho
function atualizarCarrinho() {
    const carrinhoEl = document.getElementById("carrinho");
    carrinhoEl.innerHTML = `<a href="carrinho.html">🛒 Carrinho: ${carrinho.length} ${carrinho.length === 1 ? "item" : "itens"}</a>`;
}

// Inicializa contador quando abrir a página
window.onload = atualizarCarrinho;

// Função para mostrar mensagem de compra
function mostrarMensagem(sabor) {
    const mensagens = [
        `😋 Você escolheu ${sabor}! Uma ótima pedida.`,
        `🧁 ${sabor} fresquinho saindo do forno só pra você!`,
        `✨ ${sabor} é o sabor da felicidade!`,
        `🍰 Pedido de ${sabor} confirmado!`,
        `😍 ${sabor} é simplesmente irresistível!`
    ];

    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    const caixa = document.createElement("div");
    caixa.classList.add("alerta");
    caixa.textContent = aleatoria;
    document.body.appendChild(caixa);

    setTimeout(() => {
        caixa.remove();
    }, 3000);
}

// Estilos da caixinha de alerta
const estilo = document.createElement("style");
estilo.innerHTML = `
    header {
        text-align: center;
        margin-bottom: 20px;
    }

    #carrinho {
        font-size: 1.2rem;
        color: #ff5f7e;
        font-weight: bold;
    }

    .alerta {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #ff5f7e;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        font-size: 1rem;
        animation: aparecer 0.3s ease;
    }

    @keyframes aparecer {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(estilo);
