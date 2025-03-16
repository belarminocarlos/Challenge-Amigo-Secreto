let amigos = [];

function adicionarAmigo() {
    let campoInput = document.getElementById("amigo");
    let nome = campoInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    campoInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado"); 
    resultadoLista.innerHTML = "";

    let item = document.createElement("li");
    item.textContent = `🎉 Amigo sorteado: ${amigoSorteado}!`;
    resultadoLista.appendChild(item);
}
