import { select, text, outro, intro } from "@clack/prompts";
 
intro(`¡Bienvenidos!`);
 
const projectType = await select({
  message: "Selecciona el ejercicio a completar.",
  options: [
    { value: "1", label: "EXPLICACIÓN AFIRMACIONES: VERDADERO O FALSO" },
    { value: "2", label: "EXPLICACIÓN FUNCIÓN DE 'n' Y CADA POSIBLE VALOR DE 'i,j'" },
    { value: "3", label: "EXPLICACIÓN DEL ORDENAMIENTO" },
  ],
});
 
try {
  switch (projectType) {
    case "1":
        outro(
        `*** n^2\in O(n^3) - Verdadero. ***
            
        • En este contexto, significa que n^2 crece no más rápido que n^3 cuando n se acerca al infinito.

            Formalmente, podemos decir que n^2 está en O(n^3) si y solo si hay dos constantes positivas c y n0 tal que:

            n^2 <= c * n^3 para todo n >= n0

            Podemos demostrar esto tomando c = 1 y n0 = 1. Entonces, para todo n mayor o igual a 1, tenemos:

            n^2 <= n^3

            Por lo tanto, n^2 está en O(n^3).

            
        *** n^3\in O(n^2) - Falso. ***

        • En este contexto, significa que una función crece no más rápido que otra función cuando el tamaño de entrada se acerca al infinito.

            Si afirmamos que n^3 está en O(n^2), entonces hay dos constantes positivas c y n0 tal que:

            n^3 <= c * n^2 para todo n >= n0

            Dividiendo ambos lados por n^2, obtenemos:

            n <= c para todo n >= n0

            Esto significa que existe una constante c tal que n es menor o igual que c para todo n mayor o igual que n0, lo cual es claramente falso. Por lo tanto, no es cierto que n^3 está en O(n^2). En realidad, es cierto lo contrario: n^2 está en O(n^3).

                
        *** 2^{n+1} está en O(2^n) - Verdadero. ***

        • En este contexto, significa que una función crece no más rápido que otra función cuando el tamaño de entrada se acerca al infinito.

            Podemos demostrar que 2^{n+1} está en O(2^n) mostrando que hay dos constantes positivas c y n0 tal que:

            2^{n+1} <= c * 2^n para todo n >= n0

            Dividiendo ambos lados por 2^n, obtenemos:

            2 <= c para todo n >= n0

            Tomando c = 3 y n0 = 1, podemos demostrar que la desigualdad anterior es cierta. Por lo tanto, podemos concluir que 2^{n+1} está en O(2^n). Esto se debe a que, cuando n es lo suficientemente grande, la función 2^{n+1} crece no más rápido que la función 2^n.

                
        *** (n+1)! está en O(n!) - Verdadero. ***

        • En este contexto, significa que una función crece no más rápido que otra función cuando el tamaño de entrada se acerca al infinito.

            Podemos demostrar que (n+1)! está en O(n!) mostrando que hay dos constantes positivas c y n0 tal que:

            (n+1)! <= c * n! para todo n >= n0

            Dividiendo ambos lados por n!, obtenemos:

            (n+1)/1 <= c para todo n >= n0

            Tomando c = 2 y n0 = 1, podemos demostrar que la desigualdad anterior es cierta. Por lo tanto, podemos concluir que (n+1)! está en O(n!). Esto se debe a que, cuando n es lo suficientemente grande, la función (n+1)! crece no más rápido que la función n!.

                
        *** f(n) \in O(n) implica que 2^{f(n)} \in O(2^n) - Verdadero. ***

        • Podemos demostrar esto mostrando que hay dos constantes positivas c y n0 tal que:

            2^{f(n)} <= c * 2^n para todo n >= n0

            Tomando el logaritmo en ambos lados de la desigualdad, obtenemos:

            f(n) * log(2) <= log(c) + n * log(2) para todo n >= n0

            Como f(n) \in O(n), existe una constante positiva k tal que f(n) <= k * n para todo n >= n0. Sustituyendo esto en la desigualdad anterior, obtenemos:

            k * n * log(2) <= log(c) + n * log(2) para todo n >= n0

            (n * (log(2) - k)) <= log(c) para todo n >= n0

            Tomando c = e^{log(c)} y n0 = 1, podemos demostrar que la desigualdad anterior es cierta. Por lo tanto, podemos concluir que 2^{f(n)} \in O(2^n). Esto se debe a que, cuando n es lo suficientemente grande, la función 2^{f(n)} crece no más rápido que la función 2^n.

                
        *** 3^n está en O(2^n) - Falso. ***

        • En este contexto, significa que una función crece no más rápido que otra función cuando el tamaño de entrada se acerca al infinito.

            Para demostrar que 3^n no está en O(2^n), debemos mostrar que para cualquier constante positiva c y cualquier tamaño de entrada suficientemente grande n, 3^n es mayor que c * 2^n.

            Supongamos que 3^n está en O(2^n). Entonces, hay una constante positiva c y un tamaño de entrada suficientemente grande n0 tal que:

            3^n <= c * 2^n para todo n >= n0

            Dividiendo ambos lados por 2^n, obtenemos:

            (3/2)^n <= c para todo n >= n0

            Esto significa que para cualquier tamaño de entrada n mayor o igual a n0, (3/2)^n es menor o igual que c, lo cual es claramente falso, ya que (3/2)^n crece exponencialmente a medida que n aumenta.

            Por lo tanto, podemos concluir que 3^n no está en O(2^n). En realidad, sucede lo contrario: 2^n está en O(3^n).

                
        *** \lg{n} está en O(n^{1/2}) - Verdadero. ***

        • Para demostrar esto, debemos mostrar que hay dos constantes positivas c y n0 tal que:

            \lg{n} <= c * n^{1/2} para todo n >= n0

            Tomando el cuadrado en ambos lados, obtenemos:

            (\lg{n})^2 <= c^2 * n para todo n >= n0

            Podemos tomar c = 1 y n0 = 1 para demostrar que la desigualdad anterior es cierta. Por lo tanto, podemos concluir que \lg{n} está en O(n^{1/2}). Esto se debe a que, cuando n es lo suficientemente grande, la función \lg{n} crece no más rápido que la función n^{1/2}. En otras palabras, el crecimiento de la raíz cuadrada de n supera al crecimiento del logaritmo natural de n para tamaños de entrada lo suficientemente grandes.

                
        *** n^{1/2} está en O(\lg{n}) - Falso. ***

        • Para demostrar esto, debemos mostrar que para cualquier constante positiva c y cualquier tamaño de entrada suficientemente grande n, n^{1/2} es menor o igual que c * \lg{n}.

            Supongamos que n^{1/2} está en O(\lg{n}). Entonces, hay una constante positiva c y un tamaño de entrada suficientemente grande n0 tal que:

            n^{1/2} <= c * \lg{n} para todo n >= n0

            Elevando ambos lados al cuadrado, obtenemos:

            n <= c^2 * (\lg{n})^2 para todo n >= n0

            Esto significa que para cualquier tamaño de entrada n mayor o igual a n0, n es menor o igual que c^2 * (\lg{n})^2, lo cual es claramente falso, ya que n crece más rápido que el cuadrado del logaritmo natural de n.

            Por lo tanto, podemos concluir que n^{1/2} no está en O(\lg{n}). En realidad, sucede lo contrario: \lg{n} está en O(n^{1/2}).`
        )
      break;
 
    case "2":
        outro(
        `Para cada posible valor de i, j, indicar si f(i) \in O(f(j)): 

            • f(i) = n^2, f(j) = n^2: En este caso, tenemos f(i) = f(j), lo que significa que n^2 está en O(n^2) para cualquier valor de n, ya que n^2 siempre crece no más rápido que n^2.
         
            • f(i) = n, f(j) = n^3: Si i es impar y j es par, entonces f(i) = n está en O(n^3), ya que n crece no más rápido que n^3. Si i es par y j es impar, entonces f(i) = n^3 no está en O(n), ya que n^3 crece más rápido que n para tamaños de entrada lo suficientemente grandes. Por lo tanto, la respuesta depende de si i es par o impar.
         
            • f(i) = n^2 + 1000n, f(j) = n^2: En este caso, tenemos f(i) = n^2 + 1000n y f(j) = n^2. Si agregamos 1000n a n^2, obtenemos una función que crece más rápido que n^2, pero sigue siendo de la misma complejidad asintótica. Por lo tanto, n^2 + 1000n está en O(n^2) para cualquier valor de n.
         
            • f(i) = n, f(j) = n^3: Si i es menor o igual a 100 y j es mayor que 100, entonces f(i) = n está en O(n^3), ya que n crece no más rápido que n^3. Si i es mayor que 100 y j es menor o igual a 100, entonces f(i) = n^3 no está en O(n), ya que n^3 crece más rápido que n para tamaños de entrada lo suficientemente grandes. Si i y j son ambos menores o iguales a 100 o ambos mayores que 100, entonces f(i) = n y f(j) = n^3 no están en la misma complejidad asintótica, por lo que la respuesta depende de si i o j es mayor o menor que 100.
         
        En resumen, para cada posible valor de i, j:
         
            • f(i) = n^2 está en O(n^2) (siempre cierto).
            • f(i) = n está en O(n^3) si i es impar, y no está en O(n) si i es par.
            • f(i) = n^2 + 1000n está en O(n^2) (siempre cierto).
            • f(i) = n está en O(n^3) si i es menor o igual a 100 y j es mayor que 100, y no está en O(n) si i es mayor que 100 y j es menor o igual a 100. Si ambos i y j son menores o iguales a 100 o ambos son mayores que 100, entonces la respuesta depende de si i o j es mayor o menor que 100.`
        );
        break;
   
    case "3":
        outro(
        `• Aquí se muestra una implementación en JavaScript del algoritmo de ordenamiento RadixSort:


        function radixSort(vector) {
              const maximo = Math.max(...vector);
              let exp = 1;
              while (maximo / exp > 0) {
                const matriz = Array.from({ length: 10 }, () => []);
                for (const elemento of vector) {
                  const digito = Math.floor(elemento / exp) % 10;
                  matriz[digito].push(elemento);
                }
                vector = [].concat(...matriz);
                exp *= 10;
              }
              return vector;
            }
            
            const vector = [329, 457, 657, 839, 436, 720, 355];
            console.log(radixSort(vector)); // [329, 355, 436, 457, 657, 720, 839]
            
            En este código, se utiliza la técnica de ordenamiento por dígitos para ordenar el vector. El vector se ordena en función de los dígitos menos significativos a los más significativos. Se divide el vector en "baldes" o "matrices" según el valor del dígito en cada posición. Luego, se concatena los elementos de todas las matrices en un solo vector. Este proceso se repite para todos los dígitos del número más grande en el vector, hasta que todos los dígitos hayan sido procesados y el vector esté completamente ordenado.
            
            La complejidad de este algoritmo es O(kn), donde k es el número de dígitos en el número más grande en el vector. En el peor de los casos, k puede ser igual a log10(maximo), por lo que la complejidad del algoritmo se reduce a O(n log(maximo)).
            
            
        • Otra forma de realizar el ordenamiento manteniendo la filosofía de Radix Sort es utilizando el algoritmo Counting Sort, que también utiliza la técnica de ordenamiento por dígitos. En este algoritmo, se cuentan los elementos del vector que tienen un valor menor o igual a cada elemento en el rango del vector, y se utiliza esta información para ordenar el vector. Aquí se muestra una implementación en JavaScript:
            
            
            function countingSort(vector) {
              const maximo = Math.max(...vector);
              const frecuencia = Array(maximo + 1).fill(0);
              for (const elemento of vector) {
                frecuencia[elemento]++;
              }
              let posicion = 0;
              for (let i = 0; i <= maximo; i++) {
                for (let j = 0; j < frecuencia[i]; j++) {
                  vector[posicion] = i;
                  posicion++;
                }
              }
              return vector;
            }
            
            const vector = [329, 457, 657, 839, 436, 720, 355];
            console.log(countingSort(vector)); 
            
            // [329, 355, 436, 457, 657, 720, 839]
            
            La complejidad de este algoritmo es O(n + k), donde k es el rango del vector (la diferencia entre el valor máximo y el valor mínimo en el vector). En el peor de los casos, k puede ser igual a n, por lo que la complejidad del algoritmo es O(n).
            
            En términos de eficiencia, el algoritmo Counting Sort es más eficiente que Radix Sort en el peor de los casos, ya que su complejidad es O(n) en lugar de O(n log(maximo)). Sin embargo, el algoritmo Counting Sort requiere que el rango del vector sea conocido de antemano, lo cual puede no ser práctico en algunos casos. Además, Counting Sort utiliza más espacio en memoria que Radix Sort debido a que necesita una matriz de frecuencias que tenga un tamaño igual al rango del vector.
            
            Por otro lado, Radix Sort es más versátil que Counting Sort y se puede utilizar para ordenar elementos en cualquier base numérica, no solo en base 10. Además, Radix Sort es más eficiente en promedio que Counting Sort cuando el rango del vector es mucho mayor que el número de elementos en el vector.
            
            En resumen, la elección del algoritmo de ordenamiento más eficiente dependerá del tipo de datos a ordenar, la magnitud del tamaño del vector, la complejidad de la implementación y los requisitos de espacio en memoria. En general, Radix Sort es una buena opción para ordenar vectores con un gran rango de números y en bases numéricas diferentes a la base 10, mientras que Counting Sort es una buena opción cuando el rango del vector es pequeño y se conoce de antemano.`)
            
            // Función de algoritmo Radix Sort
            function radixSort(vector) {
                const maximo = Math.max(...vector);
                let exp = 1;
                while (maximo / exp > 0) {
                  const matriz = Array.from({ length: 10 }, () => []);
                  for (const elemento of vector) {
                    const digito = Math.floor(elemento / exp) % 10;
                    matriz[digito].push(elemento);
                  }
                  vector = [].concat(...matriz);
                  exp *= 10;
                }
                return vector;

              }

            // Función de algoritmo Counting Sort  
            function countingSort(vector) {
              const maximo = Math.max(...vector);
              const frecuencia = Array(maximo + 1).fill(0);
              for (const elemento of vector) {
                frecuencia[elemento]++;
              }
              let posicion = 0;
              for (let i = 0; i <= maximo; i++) {
                for (let j = 0; j < frecuencia[i]; j++) {
                  vector[posicion] = i;
                  posicion++;
                }
              }
              return vector;
            }
            
            // Función para generar un vector aleatorio de tamaño n
            function generarVector(n) {
                const vector = [];
                for (let i = 0; i < n; i++) {
                vector.push(Math.floor(Math.random() * n));
                }
                return vector;
            }
            
            // Función para medir el tiempo de ejecución de una función
            function medirTiempo(funcion, argumentos) {
                const inicio = performance.now();
                funcion(...argumentos);
                const fin = performance.now();
                return fin - inicio;
            }
            
            const n = 100;
            const vector = generarVector(n);
            
            console.log(`El vector sin ordenar es:\n [${vector.join(", ")}]`);

            const resultadosRadixSort = radixSort(vector);
            console.log(`\nEl vector ordenado con Radix Sort es:\n [${resultadosRadixSort.join(", ")}]`);

            const resultadosCountingSort = countingSort(vector);
            console.log(`\nEl vector ordenado con Counting Sort es:\n [${resultadosCountingSort.join(", ")}]`);
            
            // Medición del tiempo de ejecución del método de Radix Sort            
            const tiempoRadixSort = medirTiempo(radixSort, [vector.slice()]); // se utiliza slice para copiar el vector
            console.log(`\nTiempo de Radix Sort: ${tiempoRadixSort} ms`);
            
            // Medición del tiempo de ejecución del método de Counting Sort
            const tiempoCountingSort = medirTiempo(countingSort, [vector.slice()]); // se utiliza slice para copiar el vector
            console.log(`Tiempo de Counting Sort: ${tiempoCountingSort} ms`);
      break;

    default:
      break;
  }
} catch (e) {
  outro(e);
}