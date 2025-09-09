// Recupera o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const lista = document.getElementById("lista-carrinho");
const totalEl = document.getElementById("total");

let total = 0;

if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio 😢</p>";
} else {
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.sabor} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
        total += item.preco;
    });

    totalEl.textContent = `💰 Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    alert("🎉 Compra finalizada com sucesso!");
    localStorage.removeItem("carrinho");
    window.location.href = "index.html";
}

function voltar() {
    window.location.href = "index.html";
}
