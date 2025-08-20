// Lista de participantes e sorteio
let participantes = [];
let sorteioRealizado = false;
let listaSorteio = [];

// Função -> Adicionar participante
function adicionarAmigo() {
    if (sorteioRealizado) {
        alert('O sorteio já foi realizado! Reinicie para adicionar mais participantes.');
        return;
    }
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome!');
        return;
    }
    
    if (participantes.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    participantes.push(nome);
    input.value = '';
    
    atualizarLista();
}

// Função -> Atualizar a lista de participantes na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    participantes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função -> Sortear amigo de forma aleatória
function sortearAmigo() {
    if (participantes.length < 2) {
        alert('É necessário pelo menos 2 participantes para realizar o sorteio!');
        return;
    }
    
    // Sorteia um índice aleatório da lista de participantes
    const indiceAleatorio = Math.floor(Math.random() * participantes.length);
    
    // Pega o nome sorteado
    const sorteado = participantes[indiceAleatorio];
    
    // Exibe o resultado
    exibirResultado(sorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(sorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li class="titulo-resultado" style="color: #05DF05; font-weight: bold; font-size: 24px; margin-bottom: 15px;">
            Nome sorteado:
        </li>
        <li style="color: #05DF05; margin-bottom: 10px; font-size: 20px;">
            ${sorteado}
        </li>
    `;
    
    resultado.style.display = 'block';
}

// Função para reiniciar o sorteio
function reiniciar() {
    participantes = [];
    listaSorteio = [];
    sorteioRealizado = false;
    atualizarLista();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.style.display = 'none';
    document.getElementById('amigo').value = '';
}

// Permite adicionar participante pressionando Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});
