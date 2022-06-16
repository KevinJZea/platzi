const lista1 = [
  1,
  1,
  2,
  3,
  5,
  3,
  2,
  3,
  2,
  1,
  2,
  2,
  2,
];

const lista1Count = {};

lista1.map(
  function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
  }
)

const lista1Array = Object.entries(lista1Count).sort(
  function (valorAcumulado, nuevoValor) {
    return valorAcumulado[1] - nuevoValor[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];


const myModa = arr => {
  
  let paso = 0;
  const arrLength = arr.length;
  let numeroDeVeces = 0;
  let moda = 0;

  for (let i = 0; i < arrLength; i += 1) {
    
    if (numeroDeVeces > paso) {
      moda = arr[i];
      paso = numeroDeVeces;
    }
  }

};
