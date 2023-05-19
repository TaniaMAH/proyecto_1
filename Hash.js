// Importamos la biblioteca crypto para usar la función hash SHA-256
import { createHash } from 'crypto';

// Definimos la función hash
function hashSha256(data) {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

// Ejemplo de uso
const data = 'Hola mundo';
const hash = hashSha256(data);
console.log(`La hash SHA-256 de "${data}" es: ${hash}`);

// El algoritmo de hash utilizado es SHA-256, que es una función de hash criptográfica segura y ampliamente utilizada.

// La complejidad del algoritmo es de O(kn) donde k es el número de iteraciones y n es el tamaño de la entrada. Este tipo de complejidad es polinómica.

/* En este ejemplo, utilizamos la biblioteca crypto-js para acceder a la función hash SHA-256. La función hashSha256 recibe como parámetro data, que es la cadena de texto que deseamos hashear.
Dentro de la función hashSha256, utilizamos CryptoJS.SHA256(data) para aplicar la función hash SHA-256 a data. Finalmente, convertimos el resultado de la hash a una cadena de texto mediante .toString() y lo devolvemos.
En el ejemplo de uso, definimos una cadena de texto data y luego llamamos a la función hashSha256 para hashearla. La salida del programa mostrará la cadena de texto original y su hash SHA-256 correspondiente.*/