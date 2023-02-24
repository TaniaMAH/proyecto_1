import { select, text, outro, intro } from "@clack/prompts";
 
intro(`¡Bienvenidos!`);
 
const projectType = await select({
  message: "Selecciona el ejercicio a completar.",
  options: [
    { value: "1", label: "1.1 ESTRUCTURAS DE SELECCIÓN" },
    { value: "2", label: "2.3 ESTRUCTURAS DE REPETICIÓN" },
    { value: "3", label: "3.1 FUNCIONES" },
    { value: "4", label: "4.3 RECURSIVIDAD" },
    { value: "5", label: "5.3 ARREGLOS" },
    { value: "6", label: "6.2 CADENAS" },
    { value: "7", label: "7.1 ESTRUCTURAS" },
    { value: "8", label: "8.1 POO" },
  ],
});
 
try {
  switch (projectType) {
    case "1":
      const numero = await text({
        message: "Digite un número para saber si es par o impar:",
        initialValue: 0,
      });
 
      outro(esPar(Number(numero)));
      break;
 
    case "2":
      const notas = await text({
        message:
          "Digite las notas a las que desee encontrarles el promedio, separadas por coma:",
          placeholder: "2, 5, 1.2, 4"
      });
 
      const arrNotas = notas
        .replaceAll(" ", "")
        .split(",")
        .map((e) => Number(e));
      outro(`El promedio de todas las notas es: ${calcularPromedio(arrNotas)}`);
      break;
 
    case "3":
      outro(
        `Mi ejercicio 3.1 es una función que suma, y está combinado con el ejercicio 2.3.`
      );
      break;
 
    case "4":
      const numeros = await text({
        message:
          "Para este ejercicio escriba varios números separados por coma:",
          placeholder: "9, 10, 28, 1, 4, 88"
      });
      const arrNumeros = numeros
        .replaceAll(" ", "")
        .split(",")
        .map((e) => Number(e));
      arrNumeros.push(-1); // El ejercicio asegura que el arreglo siempre termina en -1
      outro(`La suma de todo el arreglo es de: ${sumaArreglo(arrNumeros)}`);
      break;
 
    case "5":
      const mayor = await text({
        message:
          "Digite la cantidad de digitos que desea aleatorios para este ejercicio:",
      });
      outro(elementoMayor(mayor));
      break;
 
    case "6":
      const frase = await text({
        message:
          "Escriba una frase a la que desee cambiar los espacios por guiones:",
      });
      outro(cambiarEspacios(frase));
      break;
 
    case "7":
      const numeroDirectorio = await text({
        message:
          "¿A cuántas personas desea agregar al directorio?",
      });
 
      let directorio = [];
      let dirLength = numeroDirectorio;
      let i = 1;
 
      while(dirLength > 0) {
        const input = await text({
          message:
            `[${i++}] Escriba el nombre de la persona, y su teléfono. Separados por coma.`,
          placeholder: "Tania Agredo, 3002929292"
        });
        dirLength--;
 
        const datos = input.split(',').map(o => o.trim());
        directorio = agregarAlDirectorio(datos[0], Number(datos[1]), directorio);
      }
 
      const input = await text({
        message:
          `Filtre el directorio por sólo teléfonos que empiecen por el siguiente número:`,
        placeholder: "6"
      });
 
      const directorioFiltrado = filtrarPorUnNumero(Number(input), directorio);
 
      outro(JSON.stringify(directorioFiltrado, 0, 2));
      break;

      case "8":
        outro(`
        • Clase
        • Atributo o propiedad
        • Método
        • Constructores
        • Polimorfismo
        • Variables globales
        • Variables locales
        • Parámetros actuales
        • Parámetros formales
        • Pase de parámetros por valor y por referencia
        `);
        break;
 
    default:
      break;
  }
} catch (e) {
  outro(e);
}
 
// Inicio - 1.1
// Escribir un programa que solicite un valor entero al usuario y determine si es par o impar.
 
function esPar(numero) {
  if (isNaN(numero)) {
    throw new Error("El valor digitado no corresponde a un número.");
  }
  const tipo = numero % 2 === 0 ? "Par" : "Impar";
 
  return "El número " + String(numero) + " es " + tipo + ".";
}
// Fin - 1.1
 
// Inicio - 3.1
// Crear una función llamada "suma", que reciba como parámetros dos números enteros y
// devuelva como resultado otro número entero que sea la suma de ambos.
// El Callback es una función que se ejecuta dentro de otra función (generalmente JavaScript).
 
function sumaNotas(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("El valor digitado no corresponde a un número.");
  }
  if (numero2 > 5) {
    throw new Error("Las notas universitarias no pueden ser mayores a 5.");
  }
  return numero1 + numero2;
}
// Fin - 3.1
 
// Inicio - 2.3
// Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Cálculo.
 
function calcularPromedio(notas = []) {
  const cantidadNotas = notas.length;
  const sumaNotas = notas.reduce(sumaNotas, 0);
  return sumaNotas / cantidadNotas;
}
// Fin - 2.3// Escribir un programa que solicite un valor entero al usuario y determine si es par o impar.
 
function esPar(numero) {
  if (isNaN(numero)) {
    throw new Error("El valor digitado no corresponde a un número.");
  }
  const tipo = numero % 2 === 0 ? "Par" : "Impar";
 
  return "El número " + String(numero) + " es " + tipo + ".";
}
// Fin - 1.1
 
// Inicio - 3.1
// Crear una función llamada "suma", que reciba como parámetros dos números enteros y
// devuelva como resultado otro número entero que sea la suma de ambos.
// El Callback es una función que se ejecuta dentro de otra función (generalmente JavaScript).
 
function sumaNotas(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("El valor digitado no corresponde a un número.");
  }
  if (numero2 > 5) {
    throw new Error("Las notas universitarias no pueden ser mayores a 5.");
  }
  return numero1 + numero2;
}
// Fin - 3.1
 
// Inicio - 2.3
// Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Cálculo.
 
function calcularPromedio(notas = []) {
  const cantidadNotas = notas.length;
  const sumaNotas = notas.reduce(sumaNotas, 0);
  return sumaNotas / cantidadNotas;
}
// Fin - 2.3
 
// Inicio - 4.3
// Dado un arreglo constituido de números enteros, devolver la suma de todos los elementos. En este caso se
// desconoce el número de elementos. En cualquier caso se garantiza que el último elemento del arreglo es -1,
// número que no aparecerá en ninguna otra posición.
 
function sumaArreglo(arreglo) {
  let suma = 0;
  let i = 0;
  while (arreglo[i] !== -1) {
    suma += arreglo[i];
    i++;
  }
 
  return suma - 1;
}
// Fin - 4.3
 
// Inicio - 5.3
// Llenar un vector de 20 elementos, imprimir la posición y el valor del elemento mayor
// almacenado en el vector. Suponga que todos los elementos del vector son diferentes.
 
function elementoMayor(tamanio) {
  if (isNaN(tamanio)) {
    throw new Error("El valor digitado no corresponde a un número.");
  }
 
  const vector = Array(Number(tamanio))
    .fill()
    .map(function numAleatorio(index) {
      return Math.random();
    });
 
  let index_del_mayor = 0;
 
  vector.forEach(function (cantidad_actual, index_actual) {
    if (cantidad_actual > vector[index_del_mayor]) {
      index_del_mayor = index_actual;
    }
  });
 
  return (
    "El elemento mayor tiene como posición " +
    index_del_mayor +
    " y como valor " +
    vector[index_del_mayor]
  );
}
// Fin - 5.3
 
// Inicio - 6.2
// Pida al usuario que introduzca una frase y cambie los espacios por guiones
// (por ejemplo: "como estas, Juan" -> "como-estas,-Juan").
 
function cambiarEspacios(frase) {
  if (typeof frase !== "string") {
    throw new Error("La frase no es un string.");
  }
 
  return frase.replaceAll(" ", "-");
}
// Fin - 6.2
 
// Inicio - 7.1
// Pida al usuario que teclee los datos de 10 personas (sólo el nombre y el número de teléfono). Después se deberá
// mostrar en pantalla los nombres y los teléfonos de aquellas personas cuyo número de teléfono comience por 6.
// Recordar: cuando la propiedad tiene el mismo nombre de la variable, se pone una sola vez.
function agregarAlDirectorio(nombre, telefono, directorio) {
  const persona = {
    nombre,
    telefono,
  };
  directorio.push(persona);
 
  return directorio;
}
 
function filtrarPorUnNumero(numero, directorio) {
  return directorio.filter(function (persona) {
    return String(persona.telefono)[0] === String(numero);
  });
}
 
// Inicio - 4.3
// Dado un arreglo constituido de números enteros, devolver la suma de todos los elementos. En este caso se
// desconoce el número de elementos. En cualquier caso se garantiza que el último elemento del arreglo es -1,
// número que no aparecerá en ninguna otra posición.
 
function sumaArreglo(arreglo) {
  let suma = 0;
  let i = 0;
  while (arreglo[i] !== -1) {
    suma += arreglo[i];
    i++;
  }
 
  return suma - 1;
}
// Fin - 4.3
 
// Inicio - 5.3
// Llenar un vector de 20 elementos, imprimir la posición y el valor del elemento mayor
// almacenado en el vector. Suponga que todos los elementos del vector son diferentes.
 
function elementoMayor(tamanio) {
  if (isNaN(tamanio)) {
    throw new Error("El valor digitado no corresponde a un número.");
  }
 
  const vector = Array(Number(tamanio))
    .fill()
    .map(function numAleatorio(index) {
      return Math.random();
    });
 
  let index_del_mayor = 0;
 
  vector.forEach(function (cantidad_actual, index_actual) {
    if (cantidad_actual > vector[index_del_mayor]) {
      index_del_mayor = index_actual;
    }
  });
 
  return (
    "El elemento mayor tiene como posición " +
    index_del_mayor +
    " y como valor " +
    vector[index_del_mayor]
  );
}
// Fin - 5.3
 
// Inicio - 6.2
// Pida al usuario que introduzca una frase y cambie los espacios por guiones
// (por ejemplo: "como estas, Juan" -> "como-estas,-Juan").
 
function cambiarEspacios(frase) {
  if (typeof frase !== "string") {
    throw new Error("La frase no es un string.");
  }
 
  return frase.replaceAll(" ", "-");
}
// Fin - 6.2
 
// Inicio - 7.1
// Pida al usuario que teclee los datos de 10 personas (sólo el nombre y el número de teléfono). Después se deberá
// mostrar en pantalla los nombres y los teléfonos de aquellas personas cuyo número de teléfono comience por 6.
// Recordar: cuando la propiedad tiene el mismo nombre de la variable, se pone una sola vez.
function agregarAlDirectorio(nombre, telefono, directorio) {
  const persona = {
    nombre,
    telefono,
  };
  directorio.push(persona);
 
  return directorio;
}
 
function filtrarPorUnNumero(numero, directorio) {
  return directorio.filter(function (persona) {
    return String(persona.telefono)[0] === String(numero);
  });
}
