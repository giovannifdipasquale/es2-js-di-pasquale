// ESERCIZIO 1
let v1 = 12;
let v2 = 42;
let v3 = 666;
let v4 = 2000;
let v5 = 221;

console.log(`La somma delle 5 variabili è ${v1 + v2 + v3 + v4 + v5}. La media aritmetica è ${(v1 + v2 + v3 + v4 + v5) / 2}`)

// ESERCIZIO 2
const annoCorrente = 2024;
let annoNascita = Number(prompt(`In che anno sei nato?`));
if (isNaN(annoNascita)) {
  console.log(`il valore inserito non è un numero, riprova`);
}
else {
  let età = annoCorrente - annoNascita;
  console.log(`hai ${età} anni brother`);
  console.log(`ti servono ${100-età} anni per arrivare a 100 anni`);
}

// ESERCIZIO 3
let nGatti = 44;
let gattiFila = 6
let numeroFile = Math.floor(44/6);
let restoGatti = 44 % 6;
console.log(`Ci sono ${numeroFile} file di gatti con resto di ${restoGatti} e servono ${gattiFila-restoGatti} per formare un'altra fila`);