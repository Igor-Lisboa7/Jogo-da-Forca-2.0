
let attempts = 6;
let playAgain = true;
let dynamicList = [];
let secretWord;
let category;
let secretTip;
let ruleBook;

assembleRandomWords ();
function assembleRandomWords () { 
    const indexPalavra = parseInt(Math.random() * palavras.length); 
    secretWord = palavras[indexPalavra].nome;
    category = palavras[indexPalavra].categoria;
    Clue = palavras[indexPalavra].dica;
};
//console.log(assembleRandomWords ());

assembleWords ();
function assembleWords () { 


    secretWord = palavras[indexPalavra].nome;
    category = palavras[indexPalavra].categoria;
    Clue = palavras[indexPalavra].dica;
};
//console.log(assembleWords ());