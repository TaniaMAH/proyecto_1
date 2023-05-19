import { createHash, randomBytes } from 'crypto';

// Función de hashing con SALT
function hashPassword(password, salt) {
  const hash = createHash('sha256');
  hash.update(password + salt);
  const hashedPassword = hash.digest('hex');
  return hashedPassword;
}

// Ejemplo de uso
const password = 'Hola Mundo';
const salt = randomBytes(16).toString('hex');
const hashedPassword = hashPassword(password, salt);

console.log('*** FUNCIÓN HASHING CON SALT***');
console.log('Contraseña: ' + password);
console.log('\n');
console.log('SALT: ' + salt);
console.log('\n');
console.log('Contraseña hasheada: ' + hashedPassword);

// Se importa la librería crypto de Node.js.
// Se define una función hashPassword que toma una contraseña y un valor de SALT como entrada y devuelve la contraseña hasheada con la función hash SHA-256 y el valor de SALT concatenados.
// Se utiliza la función randomBytes de crypto para generar un valor de SALT aleatorio de 16 bytes.
// Se llama a la función hashPassword con la contraseña y el valor de SALT, y se almacena el resultado en la variable hashedPassword.
// Finalmente, se imprimen la contraseña original, el valor de SALT y la contraseña hasheada en la consola.

// La complejidad del algoritmo es de O(kn) donde k es el número de iteraciones y n es el tamaño de la entrada.
// Es importante destacar que el uso de SALT es una técnica recomendada para agregar una capa adicional de seguridad al proceso de hashing. Con SALT, incluso si un atacante obtiene acceso a la tabla de contraseñas hasheadas, no podrá utilizar ataques de diccionario o de fuerza bruta con facilidad ya que cada contraseña tendrá un valor de SALT diferente.