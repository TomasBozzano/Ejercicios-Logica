/* ---------------------------- EJERCICIO 0 -------------------------------------------------

Dado un arreglo de numeros enteros, la funcion searchMax tiene que devolver 
el numero mas grande y su posicion en un objeto.

Si el numero se encuentra repetido, se tienen que devolver todas las 
posiciones donde este valor se ecnuentre. Esto último debe hacerse utilizando un arreglo, es decir,
guardando todas las posiciones de ese maximo valor dentro del arreglo.


FORMATO DEL RESULTADO:
{
  max: number,
  pos: [pos1, pos2, ...]
}


Ejemplo:

Si es recibe el siguiente arreglo [10,1,5,4,9,1,6,10]:

 ===> El numero mas grande (maximo) es el 10 y se encuentra en la posicion 0 y 7


resultado = {
  max: 10,
  pos:[0,7]
}



👋 TIP: El resultado de la funcion es un objeto, hay que respetar los nombres de las keys "max" y "pos" para que pasen los tests.


*/
function searchMax(arr) {
  if (arr.length === 0)  return {max: null,pos: []}

  let pos = [0];
  let max = arr[0];


  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      pos = [i];
    } else if (arr[i] === max) {
      pos.push(i);
    }
  }

  return {
    max,
    pos
  }
}




/* ---------------------------- EJERCICIO 1 -------------------------------------------------

Este ejercicio es bastante simple, pero tiene una pequeña complejidad.

La función findMax recibe un arreglo de números enteros y tiene que devolver el números mas grande. Fácil no?

Como esta lógica ya la conocemos, y también la sabemos implementar, lo que tienen que utilizar para resolver este 
ejercicio, y que los tests pasen, es hacer uso de Math.max(), adjunto link de documentacion.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max  (ctrl + click)

Para resolver este ejercicio van a tener que usar una sintaxis nueva, llamda "Sintaxis Spread", y de ahi van usar un
operador nuevo, llamado "Spread Operator" (...), adjunto link de documentacion.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax  (ctrl + click)

Aclaracion ⚠️: 

  Puede parecer algo complejo lo que se utiliza para llegar al resultado, pero el objetivo de este ejercicio es que
  sepan de su exitencia, con el tiempo se van a familiarizar y entender mejor como funcion. Por el momento, ignoner
  la complejidad.

👋 TIP: El resultado de la funcion es un numero.
*/
function findMax(arr) {
  if(arr.length === 0) return null;
  return Math.max(...arr);
}






/* ---------------------------- EJERCICIO 2 -------------------------------------------------

Ordenar un arreglo utilizando el método de ordenamiento "Bubble Sort". Adjunto documentacion

https://www.w3schools.com/dsa/dsa_algo_bubblesort.php  (ctrl + click)

Implementar Bubble Sort para ordenar el siguiente array: [7, 2, 5, 3, 9, 1]
Resultado Esperado: [1, 2, 3, 5, 7, 9]


sortArray([7, 2, 5, 3, 9, 1]) =  [1, 2, 3, 5, 7, 9]


👋 TIP: El resultado de la funcion es un arreglo.
*/
function sortArray(array) {
 for(let i = 0; i < array.length; i++){
   for(let j = 0; j < array.length - 1; j++){
     if(array[j] > array[j+1]){
       aux(array, j, j+1);
     }
   }
 }
  return array
}
function aux(arreglo, i, j){
  let aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}



/* ---------------------------- EJERCICIO 3 -------------------------------------------------
Dado un arreglo de números enteros, encuentre el par de elementos adyacentes que tenga el producto más grande y devuelva ese producto.

Ejemplo
Para inputArray = [3, 6, -2, -5, 7, 3], la salida debe ser
adjacentProduct(inputArray) = 21.

👋 TIP: El resultado de la funcion es un numero.

*/
function adjacentProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (product > max) {
      max = product;
    }
  }
  return max;
}








/* ---------------------------- EJERCICIO 4 -------------------------------------------------

Dada una secuencia de números enteros como un arreglo, determine si es posible obtener una secuencia estrictamente creciente eliminando no más de un elemento del arreglo.

Nota: la secuencia a0, a1, ..., an se considera estrictamente creciente si a0 < a1 < ... < an. La secuencia que contiene un solo elemento también se considera estrictamente creciente.

Ejemplos:
1-  input: [0, -2, 5, 6]
    Resultado Esperado: true

2-  input: [1, 1, 1, 2, 3]
    Resultado Esperado: false

3-  input: [10, 1, 2, 3, 4, 5]
    Resultado Esperado: true

👋 TIP: El resultado de la funcion es un valor boolean (true or false).

*/



function strictlyIncreasing(seq) {
  let count = 0;
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      count++;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
        return false;
      }
    }
  }
  return count <= 1;
}



module.exports = {
  sortArray,
  adjacentProduct,
  strictlyIncreasing,
  searchMax,
  findMax
};
