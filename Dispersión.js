// Definición de la tabla y sus elementos
const tabla = new Array(20); // Se crea un arreglo vacío llamado "tabla" con un tamaño de 20.
const elementos = ["gato", "perro", "loro", "tiburon", "cocodrilo", "lagartija", "hamster"]; // Se define un arreglo llamado "elementos" que contiene las palabras a almacenar en la tabla.

// Función de dispersión (hash) basada en la suma de los valores ASCII de los caracteres
function dispersion(valor) {
  let suma = 0; // Se inicializa una variable llamada "suma" en 0.
  for (let i = 0; i < valor.length; i++) { // Se itera sobre cada carácter de la palabra.
    suma += valor.charCodeAt(i); // Se obtiene el valor ASCII de cada carácter y se suma a la variable "suma".
  }
  return suma % tabla.length; // Se devuelve el residuo de la división de la "suma" por el tamaño de la tabla, esto determinará la posición en la tabla.
}

// Insertar elementos en la tabla utilizando la función de dispersión
for (let i = 0; i < elementos.length; i++) { // Se recorre cada elemento en el arreglo "elementos".
  const valor = elementos[i]; // Se obtiene el valor del elemento actual.
  const posicion = dispersion(valor); // Se calcula la posición en la tabla utilizando la función de dispersión.
  if (tabla[posicion] === undefined) { // Se verifica si la posición está vacía.
    tabla[posicion] = valor; // Se asigna el valor en la posición calculada de la tabla.
  } else {
    // Resolución de colisión: Linear Probing
    let nuevaPosicion = (posicion + 1) % tabla.length; // Se obtiene la siguiente posición disponible en la tabla.
    while (tabla[nuevaPosicion] !== undefined) { // Mientras la nueva posición no esté vacía.
      nuevaPosicion = (nuevaPosicion + 1) % tabla.length; // Se busca la siguiente posición disponible.
    }
    tabla[nuevaPosicion] = valor; // Se asigna el valor en la nueva posición encontrada.
  }
}

// Función para buscar un valor en la tabla
function buscar(valor) {
  let posicion = dispersion(valor); // Se genera la posición inicial utilizando la función de dispersión.
  let contador = 0; // Se inicializa un contador para evitar bucles infinitos.

// Buscar el valor en la tabla
  while (tabla[posicion] !== undefined && contador < tabla.length) { // Mientras la posición en la tabla no sea undefined y no se haya recorrido toda la tabla.
    if (tabla[posicion] === valor) { // Se compara el valor en la posición actual de la tabla con el valor buscado.
      return posicion; // Si los valores coinciden, se devuelve la posición.
    }
    posicion = (posicion + 1) % tabla.length; // Si no coinciden, se pasa a la siguiente posición de la tabla.
    contador++;
  }

  return -1; // Si el valor no se encuentra en la tabla, se retorna -1.
}

// Función para buscar un valor en la tabla sin restricción
/* function buscar(valor) {
let valorMin = valor.toLowerCase(); // Convierte el valor buscado a minúsculas.
let posicion = dispersion(valorMin); // Se genera la posición inicial utilizando la función de dispersión.
let contador = 0; // Se inicializa un contador para evitar bucles infinitos.

// Buscar el valor en la tabla
while (tabla[posicion] !== undefined && contador < tabla.length) { // Mientras la posición en la tabla no sea undefined y no se haya recorrido toda la tabla.
  if (tabla[posicion].toLowerCase() === valorMin) { // Compara los valores en minúsculas.
    return posicion; // Si los valores coinciden, se devuelve la posición.
  }
  posicion = (posicion + 1) % tabla.length; // Si no coinciden, se pasa a la siguiente posición de la tabla.
  contador++;
}
  }

  return -1; // Si el valor no se encuentra en la tabla, se retorna -1.
} */

// Ejemplo de búsqueda
const valorBuscado = "loro"; // Se define el valor a buscar.
const resultado = buscar(valorBuscado); // Se llama a la función de búsqueda con el valor.

if (resultado !== -1) { // Se verifica si se encontró el valor en la tabla.
  console.log(`El valor ${valorBuscado} se encuentra en la posición ${resultado} de la tabla.`); // Se muestra un mensaje en consola el valor buscado y la posición de la tabla.
} else {
  console.log(`El valor ${valorBuscado} no se encuentra en la tabla.`); // Se muestra un mensaje en consola informando que el valor no se encuentra en la tabla.
}