/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

// const respuesta = (ejercicio1 = "") =>
//   !ejercicio1
//     ? console.warn("No se paso ningún dato")
//     : console.info(
//         `La información del ejercicio 1 es ${ejercicio1} y tiene ${ejercicio1.length} caracteres`
//       );
// respuesta();
// respuesta("Hola Mundo");

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
// const cortarCaracter = (cadena = "", longitud = undefined) =>
//   !cadena
//     ? console.warn("no ingresaste ninguna cadena")
//     : longitud === undefined
//     ? console.warn("no ingresaste la longitud a cortar")
//     : cadena <= longitud
//     ? console.warn("la longitud de la cadena es mas corta")
//     : console.info(cadena.slice(0, longitud)); //no cuenta 0 el segundo
// cortarCaracter("Hola nundo", 6);

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
// const cadenaAAreglo = (cadena = "", separador = undefined) =>
//   !cadena
//     ? console.warn("no ingresaste ninguna cadena")
//     : separador === undefined
//     ? console.warn("no ingresaste el caracter separador")
//     : console.info(cadena.split(separador));

// cadenaAAreglo("los numeros enteros", " ");
// cadenaAAreglo();
// cadenaAAreglo("hola mundo");

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
// const repetirTexto = (cadena = "", repetir = undefined) => {
//   if (!cadena) return console.warn("no ingresaste un texto");

//   if (repetir === undefined)
//     return console.warn("no ingresaste el numero de veces a repetir");

//   if (repetir === 0)
//     return console.error("el nummero de veces debe ser mayor de cero");

//   if (Math.sign(repetir) === -1)
//     return console.error("el numero no puede ser negativo");

//   for (let i = 1; i <= repetir; i++) console.info(`${cadena}, ${i}`);
// };
// repetirTexto("hola mundo", 3);
// repetirTexto("hola mundo");
// repetirTexto("", 3);
// repetirTexto("hola mundo", -3);
// repetirTexto("hola mundo", 0);

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
//RESPUESTA UNO
// const invertir = (cadena,repeticion) =>(!cadena)?
// console.warn("No pusiste una cadena")
// :
// (repeticion===undefined)?
// console.warn("No pusiste cuantas veces repetir")
// :
// console.info (cadena.repeat(repeticion))

// invertir("Hola Mundo" ,5)
// invertir("" ,5)
// invertir("Hola Mundo" ,)
// //RESPUESTA DOS
// const strReverse = (str = "") => {
//     if (!str) return console.warn('Olvidaste ingresar una cadena.')
//     if (typeof str !== 'string') return console.error('¡No ingresaste una cadena de caracteres!')

//     let splitStr = str.split("")
//     let reverseArray = splitStr.reverse()
//     let reverseStr = reverseArray.join("")

//     return reverseStr
// }

// console.log(strReverse("Hola Mundo Cruel"))

// //RESPUESTA TRES
// const invierteTexto = (cadena = "") => {
//   if (!cadena) return console.error("No ingresaste cadena de texto a procesar");
//   let textoInvertido = "";
//   for (let i = cadena.length - 1; i >= 0; i--) {
//     textoInvertido += cadena.charAt(i);
//   }
//   console.info(textoInvertido);
// };

// invierteTexto();
// invierteTexto("");
// invierteTexto("Hola Mundo aqui estoy");

// //RESPUESTA 4

// const invertircade=(cadena="")=>
// (!cadena)
// ?console.warn("No ingresaste una cadena")
// :console.info(cadena.split("").reverse().join(""));
// invertircade ();
// invertircade("Hola Mundito")
/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

// //Primera Respuesta
// const contarTexto = (cadena = "", palabra = undefined) => {
//   if (!cadena) return console.warn("No has ingresado frase para procesar");
//   if (!palabra) return console.warn("No has ingresado palabra a procesar");

//   regex = new RegExp(palabra, "g");
//   if (regex.test(cadena)) {
//     console.info(
//       `La palabra "${palabra}" se repite "${
//         cadena.match(regex).length
//       }" veces dentro de la frase`
//     );
//   } else {
//     return console.warn("La palabra no existe dentro de la frase");
//   }
// };

// contarTexto();
// contarTexto("hola mundo adios mundo");
// contarTexto("", "mundo");
// contarTexto("hola mundo adios mundo", "");
// contarTexto("hola mundo adios mundo", "mundo");
// //segunda respuesta

// const textoEnCadena = (cadena = "", texto = "") => {
//   if (!cadena) return console.warn("no ingresaste un texto a procesar");
//   if (!texto) return console.warn("no ingresaste la palabra");

//   let i = 0,
//     contador = 0;

//   while (i !== -1) {
//     i = cadena.indexOf(texto, i);

//     if (i !== -1) {
//       i++;
//       contador++;
//     }
//   }
//   return console.info(` La palabra ${texto} se repite ${contador} veces `);
// };
// textoEnCadena();
// textoEnCadena("hola mundo en ell mundo");
// textoEnCadena("", "mundo");
// textoEnCadena("hola mundo este esel mundo de todos", "mundo");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

// const funcioPalindro=(texto = "")=>{
//     if(!texto) return console.warn("Olvidaste ingressar la frase");

//     texto=texto.toLowerCase();

//     let alReves= texto.split("").reverse().join("");

//     return (texto === alReves)
//     ? console.info(`la palabra ingresada "${texto}",palabra al reves "${alReves}", si es palindrome`)
//      :console.info(`la palabra ingresada "${texto}",palabra al reves "${alReves}", No es palindrome`);

//     }
//     funcioPalindro();
//     funcioPalindro("salas");
//     funcioPalindro("SaLas");
//     funcioPalindro("hola mundo");

//     //SEGUNDA FORMA
//     const palindromo = ( palabra = "") => {
//         if ( !palabra ) return console.warn('No ingresaste una palabra o frase');

//         palabra = palabra.toLowerCase();
//         let alReves = palabra.split("").reverse().join("");

//         return (alReves === palabra)
//             ? console.info(`Sí es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
//             : console.warn(`La palabra o frase no es palíndomo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
//     };

//     //palindromo('Salas');
//     //palindromo('Mario');

//     //TERCERA RESPUESTA

//     const Palindromo = (cadena = "") => {
//       if (!cadena) return console.warn("No ingresaste cadena de texto a procesar");
//       let textoInvertido = "";
//       const regex = / /gi;
//       cadena2 = cadena.replace(regex, "").toUpperCase();
//       cadena2 = cadena2.replace(/,/g, "");
//       cadena2 = cadena2.replace(/!/g, "");
//       cadena2 = cadena2.replace(/¡/g, "");
//       cadena2 = cadena2.replace(/:/g, "");
//       cadena2 = cadena2.replace(/\?/g, "");
//       cadena2 = cadena2.replace(/¿/g, "");

//       for (let i = cadena2.length - 1; i >= 0; i--) {
//         switch (cadena2.charAt(i)) {
//           case "Á":
//             cadena2 = cadena2.replace(/Á/g, "A");
//             break;
//           case "É":
//             cadena2 = cadena2.replace(/É/g, "E");
//             break;
//           case "Í":
//             cadena2 = cadena2.replace(/Í/g, "I");
//             break;
//           case "Ó":
//             cadena2 = cadena2.replace(/Ó/g, "O");
//             break;
//           case "Ú":
//             cadena2 = cadena2.replace(/Ú/g, "U");
//             break;
//           default:
//             break;
//         }
//         textoInvertido += cadena2.charAt(i);
//       }

//       for (let i = 0; i < cadena.length; i++) {
//         if (
//           cadena2.charAt(i).toUpperCase() != textoInvertido.charAt(i).toUpperCase()
//         ) {
//           return console.info(`La frase "${cadena}", no es un palindromo`);
//         }
//       }
//       return console.log(`La frase "${cadena}", si es un palindromo.`);
//     };

//     //Palindromo();
//     //Palindromo("");
//     //Palindromo("comer");
//     //Palindromo( "salas");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
// const elimineCaracter = (palabra = "", patron = "") => {
//   !palabra
//     ? console.warn("no ingresaste una palabra")
//     : patron === ""
//     ? console.warn("No ingresaste un patron de caracteres")
//     : console.info(palabra.replace(new RegExp(patron, "ig"), ""));
// };
// elimineCaracter();
// elimineCaracter("xyz2");
// elimineCaracter("xyzd2", "2");
// elimineCaracter("como es que todo esta bien 23 45", "[a-z]");
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
// const numaleatorio = (valor1 = "", valor2 = "") => {
//   if (!valor1) return console.error("NO ingresaste el primer valor");
//   if (!valor2) return console.error("NO ingresaste el segundo valor");

//   if (typeof valor1 !== "number")
//     return console.error(
//       `el primer valor "${valor1}"ingresado no es un numero`
//     );
//   if (typeof valor2 !== "number")
//     return console.error(
//       `el segundo valor "${valor2}"ingresado no es un numerooo`
//     );

//   // if (valor1<501) return console.error("el valor ingresado debe ser mayor o igual a 501");
//   // if (valor2>600) return console.error("El valor ingresado debe ser nmenor o igual a  600");

//   for (let index = 0; index < 10; index++) {
//     let aleatorio = Math.round(Math.random() * (valor2 - valor1) + valor1);
//     console.info(
//       `El primer valor ingresado ${valor1} y el segundo valor ingresado es ${valor2} y el numero aleatorio entre los dos numeros es "${aleatorio}"`
//     );
//   }
// };
// numaleatorio("hola", 2002);
// numaleatorio(2002, "hola");
// numaleatorio("hola");
// numaleatorio(501,"");
// numaleatorio(501, 602);
// numaleatorio(5, 10);
// numaleatorio(501, 600);

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

// const numCapicua = (valor1 = "") => {
//   if (!valor1) return console.error("No ha ingresado ningún número");

//   if (isNaN(valor1)) return console.warn("el texto ingresado no es un numero");

//   /* Converitr mi numero en un texto para poderlo revertir se requiere ejecutar el metodo toString() que convierte
// eldato ingresado en una cadena de texto / String */
//   numero = valor1.toString();
//   let alReves = numero.split("").reverse().join("");

//   return alReves === numero
//     ? console.info(
//         `Sí es capicúa, Numero original ${valor1}, Numero al revés ${alReves}`
//       )
//     : console.warn(
//         `El Numero no es capicúa, Numero original ${valor1}, Numero al revés ${alReves}`
//       );
// };

// numCapicua();
// numCapicua("hola");
// numCapicua("30");
// numCapicua("3003");

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

// const numFacto = (num = undefined) => {
//   if (num === undefined) return console.warn("No ingresaste un numero");

//   if (typeof num !== "number")
//     return console.error(`el valor ingresado "${num}" no es un numero`);

//   if (Math.sign(num) === -1)
//     return console.error(
//       `el valor ingresado es ${num} No puede ingresar números negativos`
//     );

//   if (num === 0)
//     return console.error(
//       `el valor ingresado es ${num} No se le puede sacar factorial al numero cero`
//     );

//   let fac = 1;
//   for (let i = 1; i <= num; i++) {
//     fac = i * fac;
//   }
//   console.log(`el factorial de ${num} es ${fac}`);
// };

// numFacto();
// numFacto("a");
// numFacto(-6);
// numFacto(0);
// numFacto(5);

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

// const numPrimo = (num = undefined) => {
//   if (num === undefined) return console.warn("No ingresaste un numero");
//   if (num === 0)
//     return console.error(
//       `El numero ingresado es  "${num}", el valor debe ser mayor de cero`
//     );
//   if (num === 1)
//     return console.error(
//       `El numero ingresado es  "${num}", el numero "${num}" no se tiene en cuenta como primp`
//     );

//   if (typeof num !== "number") return console.error("Debes ingresar un numero");
//   if (Math.sign(num) === -1)
//     return console.error("No puede ingresar números negativos");

//   let validar = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       validar = false;
//       return console.warn(`El numero ${num} ingresado no es primo`);
//     }
//   }
//   if (validar === true) {
//     return console.info(`El numero ${num} ingresado es un Primo`);
//   }
// };

// numPrimo();
// numPrimo("w");
// numPrimo(0);
// numPrimo(1);
// numPrimo(-8);
// numPrimo(8);

//segunda forma
/*
let validar = false;
    for(let i = 2; i < num; i++) {
if (num%i === 0) {
    validar = true;
    break;
}
    } 
    return (validar)
    ?console.log(`el numero ${num}, SI es primo`);
    :console.log(`el numero ${num}, NO es primo`);
    
    }
*/

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

// const numPar = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No ingresaste un numero");

//   if (typeof numero !== "number")
//     return console.error("Debes ingresar un numero");

//   return numero % 2 === 0
//     ? console.info(`El numero ingreado "${numero}" es par`)
//     : console.info(`El numero ingresado "${numero}" es impar`);
// };
// numPar();
// numPar("d");
// numPar(0);
// numPar(7);

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

// const converGrados = (valor = undefined, unidad = undefined) => {
//   if (valor === undefined)
//     return console.warn("No ingresaste el valor  a convertir");

//   if (typeof valor !== "number")
//     return console.error("Debes ingresar un numero");

//   if (unidad === undefined)
//     return console.warn("No ingresaste el tipo de grados a convertir");

//   if (typeof unidad !== "string")
//     return console.error(`El valor "${unidad}" , no es una cadena de texto`);

//   if (unidad.length !== 1 || !/(C|F)/.test(unidad))
//     return console.warn("Valor de unidad no reconocido,");

//   if (unidad === "C") {
//     return console.info(`${valor}°C = ${Math.round(valor * (9 / 5) + 32)}°F`);
//   } else if (unidad === "F") {
//     return console.info(`${valor}°F = ${Math.round((valor - 32) * (5 / 9))}°C`);
//   } else {
//     return console.warn("El tipo de grados a convertir no es valido");
//   }
// };

// converGrados();
// converGrados("2");
// converGrados(2);
// converGrados(2, "true");
// converGrados(2, "E");
// converGrados(100, "C");
// converGrados(0, "F");
// converGrados(32, "F");
// converGrados(100, "f");
/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

// const converfracciones = (numero = undefined, base = undefined) => {
//   if (numero === undefined) return console.warn("No ingresaste el numero");
//   if (typeof numero !== "number")
//     return console.error(`El valor ingresado "${numero}", no es un numero`);
//   if (base === undefined)
//     return console.warn("No ingresaste la base a convertir");
//   if (typeof base !== "number")
//     return console.error(`El valor ingresado ${base}", no es un numero`);
//   if ((base !== 2) & (base !== 10))
//     return console.warn("Valor de unidad no reconocido,");

//   if (base === 2) {
//     return console.info(
//       `${numero} base ${base} = "${parseInt(numero, base)}"base "10"`
//     );
//   } else if (base === 10) {
//     return console.info(
//       `${numero} base ${base} = "${numero.toString(base)}" base "2"`
//     );
//   }
// };
// converfracciones();
// converfracciones("e");
// converfracciones(100);
// converfracciones(100, "e");
// converfracciones(100, 2);
// converfracciones(100, 4);
// converfracciones(114, 10);

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

// const descuentoProducto = (valor = undefined, descuento = 0) => {
//   if (valor === undefined)
//     return console.warn("No ingresaste el valor del producto");
//   if (valor === 0)
//     return console.warn("El valor del producto no puede ser cero");

//   if (typeof valor !== "number")
//     return console.error(`El valor ingresado "${valor}", no es un numero`);
//   if (typeof descuento !== "number")
//     return console.error(`El valor ingresado ${descuento}", no es un numero`);
//   if (Math.sign(valor) === -1 || Math.sign(descuento) === -1)
//     return console.error("No puede ingresar valores negativos");
//   if (descuento >= valor)
//     return console.error(
//       "El valor del descuento no puede ser igual o mayor que el precio del producto, te has equivocado con al descuento"
//     );
//   //if (valor<=descuento){
//   let des = (valor * descuento) / 100;
//   let resultado = (valor * -descuento) / 100 + valor;
//   return console.info(
//     `El valor del producto es ${valor} el descuento es ${des} y el valor a pagar es "${resultado}"`
//   );
//   // }else
//   // return console.error("El valor del descuento es mmayor al valor del producto");
//   /* if ((valor)<(descuento))
//     return console.info(`El valor del producto es "${valor}" y el descuento es "${descuento}" el valor del descuento es = "${resultado}`);*/
// };
// descuentoProducto();
// descuentoProducto("e");
// descuentoProducto(0);
// descuentoProducto(100);
// descuentoProducto(-100);
// descuentoProducto("3", 2);
// descuentoProducto(-100, 20);
// descuentoProducto(1000, 20);
// descuentoProducto(1000, 0);
// descuentoProducto(20, 30);
/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

// const fechaValida = (year = "", month = "", day = "") => {
//   if (!year || !month || !day)
//     return console.error("No has ingresado una fecha correcta");
//   if (year === undefined || month === undefined || day === undefined)
//     return console.warn(" No ingresaste una fecha");
//   if (
//     typeof year !== "number" ||
//     typeof month !== "number" ||
//     typeof day !== "number"
//   )
//     return console.error(`La fecha ingresada, no es correcta`);
//   if (
//     Math.sign(year) === -1 ||
//     Math.sign(month) === -1 ||
//     Math.sign(day) === -1
//   )
//     return console.error("No puede ingresar números negativos");

//   let fechaInicio = new Date(year, month, day); //feha inicial
//   let fechaFinal = Date.now(); //fecha de hoy
//   const transcurrido = fechaFinal - fechaInicio;

//   let milisecons = 1000 * 60 * 60 * 24 * 365; //los milesegundos que tiene un año

//   const valorFecha = transcurrido / milisecons;

//   const anio = Math.floor(valorFecha);
//   return Math.sign(anio) === -1
//     ? console.info(`Faltan "${Math.abs(anio) - 1}" años para el ${year}`)
//     : anio === -1
//     ? console.info(`Estamos en el año actual ${year}`)
//     : console.info(`Han pasado "${anio + 1}" años desde ${year}`);
//   return;
// };

// fechaValida();
// fechaValida("", "", "");
// fechaValida("hola", 3, 6);
// fechaValida(3, "hola", 6);
// fechaValida(3, 6, "hola");
// fechaValida("12", "5", "4");
// fechaValida(2030, 3, 10);
// fechaValida(1984, 4, 23);
// fechaValida(2020, 3, 10);
// fechaValida(2019, 3, 10);
// /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

// const vocalConso = (cadena = undefined) => {
//   if (cadena === undefined)
//     return console.warn("No ingresaste la cadena de texto");
//   if (typeof cadena === "number")
//     return console.error(
//       `El valor ingresado "${cadena}", no es una cadena de texto`
//     );

//   let contadorv = "";
//   let contadorcons = "";
//   for (let i = cadena.length; i >= 0; i--) {
//     if (/^[aeiou]+$/i.test(cadena[i])) contadorv++;
//     if (/^[zxcvbnmsdfghjklñpytrwq]+$/i.test(cadena[i])) contadorcons++;
//   }
//   console.info(`la cadena "${cadena}", tiene  ${contadorv}, vocales`);
//   console.info(`la cadena "${cadena}",tiene  ${contadorcons}, consonates`);
// };

// vocalConso();
// vocalConso(20);
// vocalConso("HOLA mundo");

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

// const nombreValido = (nombre = "") => {
//   if (nombre === "") return console.warn("No ingresaste la cadena de texto");
//   if (typeof nombre === "number")
//     return console.error(
//       `El valor ingresado "${nombre}", no es una cadena de texto`
//     );

//   //^ les dice no puede haber nada antes
//   let espReg = /^[A-Za-zÑñÁáÉéÏíÖóÜúÜü\s]+$/i.test(nombre);
//   return espReg
//     ? console.info(`"${nombre}", SI es un nombre valido`)
//     : console.info(`"${nombre}", NO es un nombre valido`);
// };
// nombreValido();
// nombreValido(20);
// nombreValido("");
// nombreValido("pez%");
// nombreValido("pez");
// nombreValido("INSER HAWERD");

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

// const emailValido = (email = "") => {
//   if (email === "") return console.warn("No ingresaste la cadena de texto");
//   if (typeof email === "number")
//     return console.error(
//       `El valor ingresado "${email}", no es una cadena de texto`
//     );

//   //^ les dice no puede haber nada antes
//   let emailRegex =
//     /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);

//   return emailRegex
//     ? console.info(`"${email}", SI es un correo valido`)
//     : console.info(`"${email}", NO es un correo valido`);
// };
// emailValido();
// emailValido(20);
// emailValido("");
// emailValido("pez%");
// emailValido("pez");
// emailValido("INSER HAWERD@gmail.com");
// emailValido("inser.hawerd@gmail.12");
// emailValido("INSER_HAWERD@gmail.com");
// emailValido("inser_hawerd@gmail.com");
// emailValido("inser.hawerd@gmail.com");

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

// const devCuadrado = (arre = undefined) => {
//   if (arre === undefined)
//     return console.warn("No ingresaste un arreglo de numeros");
//   if (!(arre instanceof Array))
//     return console.error(`El valor ingresado "${arre}", no es un arreglo`);
//   if (arre.length === 0)
//     return console.error(`El arreglo ingresado  esta vacio`);

//   for (let num of arre) {
//     if (typeof num !== "number")
//       return console.error(`El valor ingresado "${num}", NO es un numero`);
//   }
//   const newArr = arre.map((el) => el * el);

//   return console.info(
//     `Arreglo original "${arre}, Arreglo elevado al cuadrado ${newArr}"`
//   );
// };

// devCuadrado();
// devCuadrado(20);
// devCuadrado("");
// devCuadrado([]);
// devCuadrado([1, 3, 4, {}]);
// devCuadrado([1, 3, 4, 8]);

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

// const numAlto = (numero = undefined) => {
//   if (numero === undefined)
//     return console.warn("No ingresaste un arreglo de numeros");

//   if (!(numero instanceof Array))
//     return console.error(`El valor ingresado "${numero}", no es un arreglo`);

//   if (numero.length === 0)
//     return console.error(`El arreglo ingresado  esta vacio`);

//   for (let num of numero) {
//     if (typeof num !== "number")
//       return console.error(
//         `Dentro de los elementos ingresados "${num}", NO es un numero`
//       );
//   }

//   return console.info(
//     `Arreglo original "${numero}"\n el valor maximo es ${Math.max.apply(
//       null,
//       numero
//     )}\n el valor minimo es ${Math.min(...numero)}`
//   );
// };
// numAlto();
// numAlto("");
// numAlto(["a", 4, 6]);
// numAlto([]);
// numAlto([-50, 4, 60]);
// numAlto(["a", 4, 6]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */
// const parImpar = (arre = undefined) => {
//   if (arre === undefined)
//     return console.warn("No ingresaste un arreglo de numeros");
//   if (!(arre instanceof Array))
//     return console.error(`El valor ingresado "${arre}", no es un arreglo`);
//   if (arre.length === 0)
//     return console.error(`El arreglo ingresado  esta vacio`);
//   for (let num of arre) {
//     if (typeof num !== "number")
//       return console.error(
//         `Dentro de los elementos ingresados"${num}", NO es un numero`
//       );
//   }
//   return console.info(`Arreglo original "${arre}"\n , los numeros pares son`, {
//     pares: arre.filter((num) => num % 2 === 0),
//     impares: arre.filter((num) => num % 2 === 1),
//   });
// };
// parImpar();
// parImpar([]);
// parImpar("a", 30, 40);
// parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
// const ordenaPar = (arr = undefined) => {
//   if (arr === undefined)
//     return console.warn("No ingresaste un arreglo de numeros");

//   if (!(arr instanceof Array))
//     return console.error(`El valor ingresado "${arr}", no es un arreglo`);

//   if (arr.length === 0)
//     return console.error(`El arreglo ingresado  esta vacio`);

//   for (let num of arr) {
//     if (typeof num !== "number")
//       return console.error(
//         `Dentro de los elementos ingresados"${num}", NO es un numero`
//       );
//   }

//   return console.info(
//     `Arreglo original "${arr}"\n , los numeros en orden son`,
//     {
//       asc: arr.map((el) => el).sort(),
//       des: arr
//         .map((el) => el)
//         .sort()
//         .reverse(),
//     }
//   );

//   // console.log(arrayStrings.sort())
// };

// ordenaPar();
// ordenaPar("");
// ordenaPar(4, 2, 3, "a", 4);
// ordenaPar(4, 2, 3, 2, 4);
// ordenaPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

// const ordenaPar = (arreglo = undefined) => {
//   if (arreglo === undefined)
//     return console.warn("No ingresaste un arreglo de numeros");
//   if (!(arreglo instanceof Array))
//     return console.error(`El valor ingresado "${arreglo}", no es un arreglo`);
//   if (arreglo.length === 0)
//     return console.error(`El arreglo ingresado  esta vacio`);
//   if (arreglo.length === 1)
//     return console.error(
//       `El arreglo ingresado "${arreglo}",  debe tener minimo dos elementos`
//     );
//   /*
//     for(let num of arreglo){
//             if (typeof num!=="number") return console.error(`Dentro de los elementos ingresados"${num}", NO es un numero`);
//         }
//     */
//   return console.info(
//     `Arreglo original "${arreglo}"\n , los numeros en orden son`,
//     {
//       sinduplicados: arreglo.filter(
//         (value, index, self) => self.indexOf(value) === index
//       ),
//     }
//   );
//   //sinduplicados:[...vew Set(arreglo)]
// };

// ordenaPar();
// ordenaPar("");
// ordenaPar(4, 2, 3, "a", 4);
// ordenaPar(4, 2, 3, 2, 4);
// ordenaPar([4]);
// ordenaPar([1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 0]);
// ordenaPar(["a", "a", 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 0]);

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

// const numProme = (arr = undefined) => {
//   if (arr === undefined)
//     return console.warn("No ingresaste un arreglo de numeros");

//   if (!(arr instanceof Array))
//     return console.error(`El valor ingresado "${arr}", no es un arreglo`);

//   if (arr.length === 0)
//     return console.error(`El arreglo ingresado  esta vacio`);

//   if (arr.length === 1)
//     return console.error(
//       `El arreglo ingresado "${arr}",  debe tener minimo dos elementos`
//     );

//   for (let num of arr) {
//     if (typeof num !== "number")
//       return console.error(
//         `Dentro de los elementos ingresados"${num}", NO es un numero`
//       );
//   }

//   const promedio =
//     arr.reduce((acumulador, valor) => acumulador + valor) / arr.length;

//   console.info(
//     `El arreglo ingresado "${arr}", su promedio es igual a : ${promedio}`
//   );

//   // console.log(arrayStrings.sort())
// };

// numProme();
// numProme("");
// numProme(4, 2, 3, "a", 4);
// numProme(4, 2, 3, 2, 4);
// numProme([]);
// numProme([1]);

// numProme([1, -2, 3, 4, 5, 6, 7, 8, 9, 0]);

/* 27) Programa una clase llamada Pelicula.
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
      - Todos los datos del objeto son obligatorios.
      - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
      - Valida que el título no rebase los 100 caracteres.
      - Valida que el director no rebase los 50 caracteres.
      - Valida que el año de estreno sea un número entero de 4 dígitos.
      - Valida que el país o paises sea introducidos en forma de arreglo.
      - Valida que los géneros sean introducidos en forma de arreglo.
      - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
      - Crea un método estático que devuelva los géneros aceptados*.
      - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
      - Crea un método que devuelva toda la ficha técnica de la película.
      - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
    */
// class Pelicula {
//   constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
//     this.id = id;
//     this.titulo = titulo;
//     this.director = director;
//     this.estreno = estreno;
//     this.pais = pais;
//     this.generos = generos;
//     this.calificacion = calificacion;

//     this.validarIMDB(id);
//     this.validarTitulo(titulo);
//     this.validarDirector(director);
//     this.validarEstreno(estreno);
//     this.validarPais(pais);
//     this.validarGeneros(generos);
//     this.validarCalificacion(calificacion);
//   }

//   static get listaGeneros() {
//     return [
//       "Action",
//       "Adult",
//       "Adventure",
//       "Animation",
//       "Biography",
//       "Comedy",
//       "Crime",
//       "Documentary",
//       "Drama",
//       "Family",
//       "Fantasy",
//       "Film Noir",
//       "Game-Show",
//       "History",
//       "Horror",
//       "Musical",
//       "Music",
//       "Mystery",
//       "News",
//       "Reality-TV",
//       "Romance",
//       "Sci-Fi",
//       "Short",
//       "Sport",
//       "Talk-Show",
//       "Thriller",
//       "War",
//       "Western",
//     ];
//   }

//   static generosAceptados() {
//     return console.info(
//       `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")} `
//     );
//   }

//   // Validaciones

//   // Metodos genericos
//   // Funcion que permita validar cadenas
//   validarCadena(propiedad, valor) {
//     if (!valor) return console.warn(`${propiedad}: "${valor}" está vacío`);

//     if (typeof valor !== "string")
//       return console.error(
//         `${propiedad}: "${valor}" ingresado, NO es una cadena de texto`
//       );

//     return true;
//   }

//   validarLongitudCadena(propiedad, valor, longitud) {
//     if (valor.length > longitud) {
//       return console.error(
//         `${propiedad}: "${valor}" excede el número de caracteres permitidos (${longitud})`
//       );
//     }

//     return true;
//   }

//   validarNumero(propiedad, valor) {
//     if (!valor) return console.warn(`${propiedad}: "${valor}" está vacío`);

//     if (typeof valor !== "number")
//       return console.error(
//         `${propiedad}: "${valor}" ingresado, NO es un número.`
//       );

//     return true;
//   }

//   validarArreglo(propiedad, valor) {
//     if (!valor) return console.warn(`${propiedad}: "${valor}" está vacío`);

//     if (!(valor instanceof Array))
//       return console.error(
//         `${propiedad}: "${valor}" ingresadp, NO es un arreglo`
//       );

//     if (valor.length === 0)
//       return console.error(`${propiedad}: "${valor}" no tiene datos`);

//     for (let cadena of valor) {
//       if (typeof cadena !== "string")
//         return console.error(
//           ` El valor ${cadena} ingresado, NO es una cadena de Texto.`
//         );
//     }

//     return true;
//   }

//   // *****************************

//   // Metodos especificos
//   validarIMDB(id) {
//     if (this.validarCadena("IMDB id", id)) {
//       if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
//         return console.error(
//           `El IMDB id: "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`
//         );
//       }
//     }
//   }

//   validarTitulo(titulo) {
//     if (this.validarCadena("Título", titulo)) {
//       this.validarLongitudCadena("Título", titulo, 100);
//     }
//   }

//   validarDirector(director) {
//     if (this.validarCadena("Director", director)) {
//       this.validarLongitudCadena("Director", director, 50);
//     }
//   }

//   validarEstreno(estreno) {
//     if (this.validarNumero("Año de Estreno", estreno)) {
//       if (!/^([0-9]){4}$/.test(estreno)) {
//         return console.error(
//           `El año de estreno: "${estreno}" no es válido, debe ser un número de 4 dígitos.`
//         );
//       }
//     }
//   }

//   validarPais(pais) {
//     this.validarArreglo("País", pais);
//   }

//   validarGeneros(generos) {
//     if (this.validarArreglo("Géneros", generos)) {
//       for (let genero of generos) {
//         //console.log(genero, Pelicula.listaGeneros.includes(genero))
//         if (!Pelicula.listaGeneros.includes(genero)) {
//           console.error(`Género(s) incorrectos "${generos.join(", ")}`);
//           Pelicula.generosAceptados();
//         }
//       }
//     }
//   }

//   validarCalificacion(calificacion) {
//     if (this.validarNumero("Calificación", calificacion)) {
//       return calificacion < 0 || calificacion > 10
//         ? console.error(`La calificación tiene que ser entre 0 y 10`)
//         : (this.calificacion = calificacion.toFixed(1));
//     }
//   }

//   fichaTecnica() {
//     console.info(
//       `Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${
//         this.director
//       }"\nAño: "${this.estreno}"\nPaís(es):  "${this.pais.join(
//         "-"
//       )}"\nGénero(s): "${this.generos.join(", ")}"\nCalificación: "${
//         this.calificacion
//       }"\nIMDB id: "${this.id}"\n`
//     );
//   }
// }

//Pelicula.generosAceptados()

// const peli = new Pelicula({
//     id: 'tt1234567',
//     titulo: 'Titulo de la Peli',
//     director: 'Director de la Peli',
//     estreno: 2020,
//     pais: ["México", "Francia"],
//     generos: ["Comedy", "Sport"],
//     calificacion: 9.56
// })

// peli.fichaTecnica()

// const misPelis = [
//   {
//     id: "tt0758758",
//     titulo: "Into the Wild",
//     director: "Sean Pen",
//     estreno: 2007,
//     pais: ["USA"],
//     generos: ["Adventure", "Biography", "Drama"],
//     calificacion: 8.1,
//   },
//   {
//     id: "tt0479143",
//     titulo: "Rocky Balboa",
//     director: "Silvester Stalone",
//     estreno: 2006,
//     pais: ["USA"],
//     generos: ["Action", "Drama", "Sport"],
//     calificacion: 7.1,
//   },
//   {
//     id: "tt0468569",
//     titulo: "The Dark Knight",
//     director: "Christopher Nolan",
//     estreno: 2008,
//     pais: ["USA", "UK"],
//     generos: ["Action", "Crime", "Drama"],
//     calificacion: 9.0,
//   },
// ];

// misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
// console.log("hola mundo");
// let valor1 = prompt("valores");
// let index = 0;
// let valor1 = prompt("valores");

// do {
//   let valor1 = prompt("valores");

//   let bollean = Math.sign(valor1) === -1;
//   let stringBol = "" + bollean;

//   console.log(valor1 * 2);
//   console.log(stringBol);
//   console.log(Math.sign(valor1) === -1);
//   index++;
// } while (valor1 > 0);

// let valor1 = prompt("valores");

// if (Math.sign(repetir) === -1) {
//   alert("el proceso termino");
// } else {
// }
// var numero = parseFloat(prompt("Ingrese un número:"));
// console.log(numero + 5);

// while (true) {
//   var numero = parseFloat(prompt("Ingrese un número:"));

//   if (numero < 0) {
//     console.log("Ha ingresado un número negativo. El programa ha terminado.");
//     break;
//   }
//   var potencia = Math.pow(numero, 2);
//   console.log("El cuadrado de " + numero + " es " + potencia);
// }

// Pedir un numero hasta que se ingrese un numero negativo, luego mostrar cuantos números se introdujeron
// let count = 0;
// var suma = 0;
// while (true) {
//   count++;

//   var numero = parseFloat(prompt("Ingrese un número:"));
//   if (numero <= 0) {
//     console.log("Ha ingresado un número negativo. El programa ha terminado.");
//     break;
//   }
//   var suma = suma + numero;

//   // console.log("son." + suma);
// }
// console.log("son." + suma);

// Pedir números hasta que se introduzca un número negativo y calcular la media, mostrar máximo con dos decimales

// var numero = parseFloat(prompt("Ingrese un número:"));
// // console.log(numero + 5);

// while (true) {
//   var numero = parseFloat(prompt("Ingrese un número:"));

//   if (numero < 0) {
//     console.log("Ha ingresado un número negativo. El programa ha terminado.");
//     break;
//   }
//  for (let index = 0; index < array.length; index++) {
//   const element = array[index];

//  }
//   console.log("El cuadrado de " + numero + " es " + potencia);
// }

// var valor1 = parseFloat(prompt("Ingrese un número:"));

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// let aleatorio = parseInt(getRandomArbitrary(0, 100));
// do {
//   if (aleatorio < valor1) {
//     prompt(" es menor");
//   }
//   if (aleatorio > valor1) {
//     prompt(" es mayor");
//   } else {
//     console.log("el numero es" + aleatorio);
//     prompt(" es el corecto");
//     break;
//   }
// } while (aleatorio != valor1);
// Crear una función que tome como parámetro un arreglo, retornar el último elemento del arreglo
// const arry1 = (arre = undefined) => {
//   for (let num of arre) {
//     if (typeof num !== "number")
//       return console.error(`El valor ingresado "${num}", NO es un numero`);
//   }
//   for (let index = 0; index < arre.length; index++) {
//     const element = arre[index];
//     // element.reverse();
//     return console.info(`Arreglo original "${arre}, el numero es ${element}"`);
//   }
// };

//
// var valor1 = parseFloat(prompt("Ingrese un número:"));
// for (let index = 0; index < valor1.length; index++) {
//   const element = array[index];
// }
// do {
//   var valor1 = parseFloat(prompt("Ingrese un número:"));
//   for (let index = 0; index < valor1.length; index++) {
//     const element = array[index];
//   }
// } while (valor1 != 0);

// let frutas = [1, 2];
// frutas.push(5);
// console.log(frutas);

// const numeros = [3, 23, 12];
// numeros.sort(function (a, b) {
//   return a - b;
// }); // --> 3, 12, 23
// console.log(numeros);


// let aleatorio = Math.round(Math.random() * (valor2 - valor1) + valor1);
