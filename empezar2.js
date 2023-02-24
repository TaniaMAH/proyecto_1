import { select, text, outro, intro } from "@clack/prompts";
 
intro(`¡Bienvenidos!`);
 
const projectType = await select({
  message: "Selecciona el ejercicio a completar.",
  options: [
    { value: "1.1.a", label: "EXPLICACIÓN ALGORITMO SERIE DE MCLAURIN" },
    { value: "1.1.b", label: "EXPLICACIÓN ALGORITMO VALORES DE VECTOR REPETIDO" },
    { value: "2", label: "ANÁLISIS DEL ALGORITMO TSP" },
  ],
});
 
try {
  switch (projectType) {
    case "1.a":
      const numeroTerminos = await text({
        message: "Digite el número de términos para calcular 'e':",
        initialValue: 0,
      });
 
      outro("e =", e);
      outro("Tiempo de ejecución: ", fin - inicio, "milisegundos");
      break;
 
    case "1.1.a":
        outro(
          `Para calcular el número e para un número finito de términos, podemos seguir los siguientes pasos en JavaScript:

          • Definir una variable llamada "numeroTerminos" para almacenar el número finito de términos que deseamos usar para calcular e.
          • Definir una variable llamada "e" e inicializarla con 0, ya que vamos a ir sumando los términos uno a uno.
          • Definir una función llamada "factorial" que tome un número como argumento y calcule su factorial.
          • Usar un bucle for para iterar desde 0 hasta el número de términos especificado en la variable "numeroTerminos".
          • En cada iteración, calcular el término correspondiente a ese índice usando la fórmula dada en el enunciado y sumarlo a la variable "e".
          • Imprimir el valor de "e".
          
          El tiempo de ejecución del algoritmo que calcula el número e para un número finito de términos es proporcional al número de términos especificado en la variable "numeroTerminos". En cada iteración del bucle for, se realiza un cálculo de factorial y una operación de suma, por lo que el tiempo de ejecución total es:

            T(n) = O(n * f(n))

            donde n es el número de términos y f(n) es el tiempo de ejecución de la función factorial. Como la función factorial utiliza una llamada recursiva, su tiempo de ejecución es O(n), por lo que:

            f(n) = O(n)

            Por lo tanto, el tiempo de ejecución total del algoritmo es:

            T(n) = O(n^2)

            En cuanto a su función matemática correspondiente, la suma que se utiliza en el algoritmo es la serie de Taylor para la función exponencial evaluada en x = 1. Por lo tanto, podemos escribir la fórmula matemática correspondiente como:

            e = \sum_{k=0}^{+\infty}\frac{1}{k!} = \lim_{n \to \infty} \sum_{k=0}^{n}\frac{1}{k!} = e^1

            donde el límite representa el valor exacto de e y la suma finita representa la aproximación que obtenemos al calcular un número finito de términos de la serie. En otras palabras, el algoritmo que hemos desarrollado utiliza una aproximación por series de la constante matemática e.`
        );
        break;
   
    case "1.b":
      const vector = await text({
        message:
          "Digite los valores a guardar en el vector, separados por coma:",
          placeholder: "2, 5, 1.2, 4"
      });
 
      const arrNotas = notas
        .replaceAll(" ", "")
        .split(",")
        .map((e) => Number(e));
      outro(`Los valores repetidos del vector son: ${calcularPromedio(arrNotas)}`);
      break;
 
    case "1.1.b":
        outro(
            `Para identificar los valores repetidos en un vector de tamaño n en JavaScript, podemos seguir los siguientes pasos:

            • Definir un vector de tamaño n con los valores que deseamos analizar.
            • Definir un objeto vacío para almacenar las frecuencias de cada valor.
            • Usar un bucle for para iterar sobre el vector y en cada iteración:
                - Comprobar si el valor actual del vector ya se encuentra en el objeto de frecuencias. Si no, lo agregamos con una frecuencia inicial de 1. Si ya se encuentra, aumentamos su frecuencia en 1.
                - Recorrer el objeto de frecuencias y agregar a un nuevo vector todos los valores que tengan una frecuencia mayor que 1.
            • Imprimir el nuevo vector con los valores repetidos.
            
            Este algoritmo identifica los valores que se encuentran repetidos en un vector de entrada y los imprime en la consola. La complejidad temporal de este algoritmo es O(n), ya que recorre el vector y el objeto de frecuencias una vez cada uno, y realizar operaciones constantes en cada iteración.`);
      break;

      case "2":
        outro(`
        ¿CÓMO ES LLAMADO EL PROBLEMA PLANTEADO EN LA GUÍA? PUNTO 2
        El problema descrito se conoce como el "problema del viajante de comercio" o TSP por sus siglas en inglés (Traveling Salesman Problem). Es un problema clásico de optimización combinatoria en el que se busca encontrar la ruta más corta que recorra una lista de ciudades y vuelva al punto de partida, visitando cada ciudad exactamente una vez. El problema es conocido por ser NP-completo, lo que significa que no se ha encontrado una solución eficiente para resolver el problema en tiempo polinómico.
        
        ¿QUÉ ESTRUCTURAS DE PROGRAMACIÓN Y ALMACENAMIENTO SE DEBERÍAN UTILIZAR EN SU SOLUCIÓN?
        La elección de las estructuras de programación y almacenamiento a utilizar para resolver el problema del viajante de comercio dependerá en gran medida del enfoque y la estrategia de resolución que se elija. Algunas opciones comunes son:

        • Matriz de distancias: para almacenar las distancias entre todas las ciudades en una matriz, lo que permite el acceso rápido a las distancias entre cualquier par de ciudades.
        • Lista de adyacencia: para almacenar las conexiones entre las ciudades en forma de lista, lo que permite una representación eficiente de grafos y un acceso rápido a las ciudades vecinas.
        • Arreglo de visitas: para almacenar un registro de las ciudades visitadas y las ciudades que aún deben visitarse.
        • Estructuras de datos para búsqueda: como árboles de búsqueda, hash tables y mapas, que pueden utilizarse para encontrar rutas óptimas a través del espacio de búsqueda de soluciones.
        • Algoritmos de optimización: como el algoritmo de recocido simulado, el algoritmo genético, el algoritmo de colonia de hormigas, el algoritmo de optimización de enjambres de partículas, entre otros, que pueden ser utilizados para encontrar soluciones aproximadas al problema del TSP.

        La elección de la estructura de programación y almacenamiento dependerá de la complejidad del problema, el tamaño del conjunto de datos, la velocidad requerida para el tiempo de ejecución y el objetivo de optimización deseado.
        
        ¿ES UN ALGORITMO QUE SE PUEDE SOLUCIONAR SIN FUERZA BRUTA?
        El problema del viajante de comercio (TSP) es un problema NP-completo, lo que significa que no se ha encontrado una solución eficiente para resolver el problema en tiempo polinómico. Por lo tanto, para problemas grandes, la solución exacta mediante fuerza bruta no es viable ya que el número de combinaciones crece exponencialmente con el número de ciudades.

        A pesar de esto, existen algoritmos y heurísticas que permiten encontrar soluciones aproximadas de manera más eficiente que la fuerza bruta, que en muchos casos pueden ser lo suficientemente buenas para resolver el problema práctico. Estos algoritmos incluyen el algoritmo de recocido simulado, el algoritmo genético, el algoritmo de colonia de hormigas, el algoritmo de optimización de enjambres de partículas, entre otros.

        En resumen, aunque no se puede resolver el problema exacto del TSP sin fuerza bruta, existen algoritmos y técnicas para encontrar soluciones aproximadas de manera más eficiente.`);
        break;
 
    default:
      break;
  }
} catch (e) {
  outro(e);
}
 
// Inicio - 1.1
// ***CÁLCULO DE 'e' MEDIANTE LA FÓRMULA DE MCLAURIN***
// Definir el número de términos que se usarán para calcular e
let numeroTerminos = 10;

// Inicializar la variable e en 0
let e = 0;

// Definir una función para calcular el factorial de un número
function factorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

// Tomar la hora actual antes de la ejecución del algoritmo
const inicio = performance.now();

// Calcular e usando la fórmula dada
for (let k = 0; k < numeroTerminos; k++) {
  e += 1 / factorial(k);
}

// Tomar la hora actual después de la ejecución del algoritmo
const fin = performance.now();

// Imprimir el valor de e y el tiempo de ejecución en milisegundos
console.log("\n");
console.log("***CÁLCULO DE 'e' MEDIANTE SERIE DE MCLAURIN***\n");
console.log("e =", e);
console.log("Tiempo de ejecución: ", fin - inicio, "milisegundos");
// Fin 1.a

// Inicio 1.b
// ***VECTOR QUE ENCUENTRA VALORES REPETIDOS***
// Definir el vector de entrada
const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 5, 7];

// Definir un objeto para almacenar las frecuencias de cada valor
const frecuencias = {};

// Tomar la hora actual antes de la ejecución del algoritmo
const inicio2 = performance.now();

// Calcular las frecuencias de cada valor en el vector
for (let i = 0; i < vector.length; i++) {
  const valorActual = vector[i];
  if (valorActual in frecuencias) {
    frecuencias[valorActual]++;
  } else {
    frecuencias[valorActual] = 1;
  }
}

// Identificar los valores que se encuentran repetidos en el vector
const valoresRepetidos = [];
for (const valor in frecuencias) {
  if (frecuencias[valor] > 1) {
    valoresRepetidos.push(Number(valor));
  }
}

// Tomar la hora actual después de la ejecución del algoritmo
const fin2 = performance.now();

// Imprimir los valores repetidos y el tiempo de ejecución en milisegundos
console.log("\n");
console.log("***VECTOR REPETIDO***\n");
console.log("Los valores repetidos son: " + valoresRepetidos);
console.log("Tiempo de ejecución: ", fin2 - inicio2, "milisegundos");
// Fin 1.b