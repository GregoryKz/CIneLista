// =====================================================
//  CineLista · script.js
//  Hoje você escreve só neste arquivo, uma interação por vez.
//  A ideia da aula: os filmes ficam num VETOR,
//  e a tela é desenhada a partir dele.
// =====================================================

// ---------- PRONTO: funções auxiliares ----------

// estrelas(3)  ->  '★★★☆☆'
function estrelas(nota) {
  let texto = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= nota) {
      texto = texto + '★';
    } else {
      texto = texto + '☆';
    }
  }
  return texto;
}

// mostrarMensagem('Filme adicionado!', 'sucesso')  ou  mostrarMensagem('Digite o título.', 'erro')
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = 'mensagem ' + tipo;
}

// ---------- PRONTO: elementos da página ----------
const form = document.querySelector('#form-filme');
const inputTitulo = document.querySelector('#titulo');
const selectGenero = document.querySelector('#genero');
const inputAno = document.querySelector('#ano');
const selectNota = document.querySelector('#nota');
const mensagem = document.querySelector('#mensagem');

const lista = document.querySelector('#lista-filmes');
const listaVazia = document.querySelector('#lista-vazia');
const contador = document.querySelector('#contador');
const inputBusca = document.querySelector('#busca');
const filtroGenero = document.querySelector('#filtro-genero');
const filtroStatus = document.querySelector('#filtro-status');
const textoAssistidos = document.querySelector('#total-assistidos');
const textoMedia = document.querySelector('#media');
const btnSortear = document.querySelector('#btn-sortear');
const textoSorteado = document.querySelector('#sorteado');


// =====================================================
// INTERAÇÃO 1 · MOSTRAR A LISTA QUANDO A PÁGINA ABRE
//   let filmes = [ ... ];
//   function criarCard(filme) { ... }
//   function renderizar() { ... }
// =====================================================



// =====================================================
// INTERAÇÃO 2 · ADICIONAR UM FILME          (evento: submit)
// INTERAÇÃO 3 · AVISAR QUANDO FALTAR ALGO   (dentro do submit)
// =====================================================



// =====================================================
// INTERAÇÃO 4 · MARCAR COMO ASSISTIDO       (evento: click)
//   function alternarAssistido(id) { ... }
// =====================================================



// =====================================================
// INTERAÇÃO 5 · REMOVER UM FILME            (evento: click)
//   function removerFilme(id) { ... }
// =====================================================



// =====================================================
// INTERAÇÃO 6 · LEMBRAR A LISTA DEPOIS DO F5
//   function salvar() { ... }
//   function carregar() { ... }
// =====================================================



// =====================================================
// INTERAÇÃO 7 · BUSCAR ENQUANTO DIGITA       (evento: input)
// INTERAÇÃO 8 · FILTRAR POR GÊNERO E STATUS  (evento: change)
//   function deveAparecer(filme) { ... }   responde true ou false
// =====================================================



// =====================================================
// EXTENSÃO · RESUMO DA LISTA
// =====================================================



// =====================================================
// DESAFIO · SORTEAR UM FILME PARA HOJE      (evento: click)
// =====================================================



// ---------- QUANDO A PÁGINA ABRE ----------

