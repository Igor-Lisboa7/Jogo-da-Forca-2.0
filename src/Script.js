
let attempts = 6;
let playAgain = true;
let dynamicList = [];
let secretWord;
let category;
let secretTip;
let ruleBook;

assembleWords ();
function assembleWords (){ 

    const indexPalavra = parseInt(Math.random() * palavras.length) 

    secretWord = palavras[indexPalavra].nome 

    category = palavras[indexPalavra].categoria 

    Clue = palavras[indexPalavra].dica 

    }; 
    console.log(assembleWords ());