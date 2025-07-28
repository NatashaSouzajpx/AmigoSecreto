const listaDeNomeSorteados = [];
const listaDeNomes = [];
const limitedeNomes = 100;

function adicionarNome(tag, nome) {
 let campo = document.getElementById(tag);
campo.innerHTML = nome;
}

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  if (listaDeNomes.length >= limitedeNomes) {
    alert("Limite de nomes atingido!");
    return;
  }

  listaDeNomes.push(nome);
  input.value = "";

  const lista = document.getElementById("listaAmigos"); 
  const item = document.createElement("li");
  item.innerText = nome;
  lista.appendChild(item);
}
function sortearAmigo() {
  if (listaDeNomes.length < 2) {
    alert("Adicione pelo menos 2 nomes para sortear.");
    return;
  }

  const embaralhado = embaralharArray([...listaDeNomes]);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 
  for (let i = 0; i < embaralhado.length; i++) {
    const amigo = embaralhado[i];
    const amigoSecreto = i === embaralhado.length - 1 ? embaralhado[0] : embaralhado[i + 1];

    const item = document.createElement("li");
    item.innerText = `${amigo} → ${amigoSecreto}`;
    resultado.appendChild(item);
  }
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function limparNomes() {

  listaDeNomes.length = 0;
  listaDeNomeSorteados.length = 0;

  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  alert("Todos os nomes foram removidos.");
}
