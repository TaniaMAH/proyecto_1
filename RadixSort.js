// Radix sort es un algoritmo de ordenamiento que ordena los elementos de una lista basándose en los dígitos individuales de los números. 
// Es un algoritmo eficiente que tiene una complejidad de tiempo de ejecución de O(kn), donde k es el número de dígitos en el número más grande
// de la lista y n es el número de elementos en la lista.
// El algoritmo funciona clasificando los elementos de la lista en función de sus dígitos individuales, comenzando por el dígito menos significativo 
// y avanzando hacia el más significativo. En cada iteración, se crea una lista de cubetas (buckets) para cada posible valor de dígito, 
// y se coloca cada elemento de la lista original en la cubeta correspondiente. Después de cada iteración, los elementos se extraen de las 
// cubetas en orden y se colocan en una nueva lista. El proceso se repite para cada dígito hasta que todos los elementos estén ordenados.
// A continuación, se muestra un ejemplo de cómo implementar radix sort en JavaScript:

function radixSort(arr) {
  const maxNum = Math.max(...arr);
  let divisor = 1;

  while (divisor < maxNum) {
    let vector = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      vector[Math.floor((arr[i] / divisor) % 10)].push(arr[i]);
    }
    arr = [].concat(...vector);
    divisor *= 10;
  }
  return arr;
}

// Ejemplo de uso
const arr = [22, 34, 13, 45, 67, 89, 76, 123, 46, 456, 789, 597, 1024];
console.log(`El vector sin ordenar es:\n [${arr.join(", ")}]`); 
console.log(`\nEl vector ordenado es:\n [${radixSort(arr).join(", ")}]`);

// En este ejemplo, la función radixSort toma un array de números y los ordena utilizando el algoritmo radix sort. 
// En cada iteración, los elementos se dividen por el divisor (comenzando en 1) y se obtiene el resto de la división entre 10. 
// Este resto indica el dígito en la posición actual, que se utiliza para clasificar los elementos en las cubetas correspondientes. 
// Después de cada iteración, se concatenan los elementos de las cubetas en el orden correcto y se actualiza el array original. 
// Finalmente, la función devuelve el array ordenado.