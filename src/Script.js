const data = require('./database');
const objectWord = data.level01;

let attempts = 6;
let playAgain = true;
let dynamicList = [];
let secretWord;
let category;
let secretTip;
// let ruleBook;
const getFrame = document.querySelector('#box-challenge');
const getFrameExtra = document.querySelector('#sub-container');
objectSelect ();
function objectSelect () { 
    secretWord = objectWord.find((level) => level.word);
    category = objectWord.find((level) => level.category);
    secretTip = objectWord.find((level) => level.tip);
};
console.log(objectSelect ());



// assembleWords ();
// function assembleWords () { 


//     secretWord = palavras[indexPalavra].nome;
//     category = palavras[indexPalavra].categoria;
//     Clue = palavras[indexPalavra].dica;
// };
//console.log(assembleWords ());

// Quadro menu level
// function frame() {
//     for (let index = 0; index < 10; index += 1) {
//       const frame = document.createElement('div');
//       frame.classList.add('frame');
//       getFrame.appendChild(frame);
//     }
//   }
//   frame();
  // Quadro menu level
