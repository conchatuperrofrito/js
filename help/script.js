// matriz
// Definir el número de filas y columnas de la matriz
// var filas = 3; // Cambia esto al número deseado de filas
// var columnas = 3; // Cambia esto al número deseado de columnas

// // Crear una matriz vacía
// var matriz = new Array(filas);

// // Llenar la matriz con valores iniciales (por ejemplo, todos los elementos son 0)
// for (var i = 0; i < filas; i++) {
//   matriz[i] = new Array(columnas);
//   for (var j = 0; j < columnas; j++) {
//     matriz[i][j] = 0; // Puedes cambiar 0 por el valor que desees
//   }
// }

// // Establecer el valor deseado en una fila y columna específicas (por ejemplo, fila 1, columna 2)
// var filaDeseada = 1;
// var columnaDeseada = 2;
// var valorDeseado = 42; // Cambia esto al valor que quieras

// matriz[filaDeseada][columnaDeseada] = valorDeseado;

// // La matriz ahora contiene el valor deseado en la posición especificada
// console.log(matriz);

////
// let aleatorio = Math.round(Math.random() * (valor2 - valor1) + valor1);
////
//
// const numeros = [3, 23, 12];
// numeros.sort(function (a, b) {
//   return a - b;
// }); // --> 3, 12, 23
// console.log(numeros);
///
///

// var valores = [];
// var valor;

// while (true) {
//   valor = prompt("Ingresa un valor (o presiona 'Cancelar' para detener):");
//   if (valor === null) {
//     break;
//   } else {
//     valores.push(valor);
//   }
// }
// // Mostrar los valores ingresados por el usuario
// if (valores.length > 0) {
//   console.log("Valores ingresados:");
//   for (var i = 0; i < valores.length; i++) {
//     console.log(valores[i]);
//   }
//   console.log("el ultimo balor es " + valores[valores.length - 1]);
// } else {
//   console.log("No se ingresaron valores.");
// }

/////////////
// let arry = [];
// let valorPrompt;
// let cont = 0;
// while (true) {
//   valorPrompt = prompt("f");
//   if (valorPrompt === null) {
//     break;
//   } else {
//     cont = cont + arry.push(valorPrompt);
//   }
// }
// console.log(cont);
