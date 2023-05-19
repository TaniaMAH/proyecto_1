import { select, text, outro, intro } from "@clack/prompts";

intro(`¡Bienvenidos!\n`);

// Función para tirar un dado
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para sumar los valores de un array
function sumArray(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

const dificultad = await select({
    message: "¿Desea jugar Blackjack?",
    options: [
        { value: "easy", label: "Sí, en dificultad fácil." },
        { value: "medium", label: "Sí, en dificultad intermedia." },
        { value: "hard", label: "Sí, en dificultad díficil." },
        { value: "no", label: "No" },
    ]
});

// process variable de node
if (dificultad == "no") process.exit();

const misDados = [];
const CPUDados = [];

let primerLanzamiento = true;
let continuarJugando = true;
let continuarJugandoCPU = true;
let usuarioPerdido = false;
let CPUPerdido = false;
let usuarioGanado = false;
let CPUGanado = false;
let empate = false;

misDados.push(rollDice(), rollDice(), rollDice());
CPUDados.push(rollDice(), rollDice(), rollDice());

function decideTirarCPU (currentScore, difficulty, risk) {
    const maxScore = 21;
    const diceValues = [1, 2, 3, 4, 5, 6];
    const remainingPoints = maxScore - currentScore;
  
    if (currentScore >= maxScore) {
      return false; // CPU can't roll if they already have 21 or more points
    }
  
    if (difficulty === "easy") {
      return currentScore <= 15;
    }
  
    if (difficulty === "medium") {
      const winningDiceValues = diceValues.filter(value => value <= remainingPoints);
      const winningDiceProbability = winningDiceValues.length / diceValues.length;
      const shouldRoll = winningDiceProbability > (risk / 100);
      return shouldRoll;
    }
  
    if (difficulty === "hard") {
      const losingDiceValues = diceValues.filter(value => currentScore + value > maxScore);
      const losingDiceProbability = losingDiceValues.length / diceValues.length;
      const shouldRoll = losingDiceProbability < (risk / 100);
      return shouldRoll;
    }
  
    throw new Error(`Invalid difficulty: ${difficulty}`);
  }

while (continuarJugando || continuarJugandoCPU) {
    if (primerLanzamiento) {
        console.log(`Tiraste los dados ${misDados.join(", ")} sumando ${sumArray(misDados)}`);
        console.log(`La CPU tiró los dados ${CPUDados.join(", ")} sumando ${sumArray(CPUDados)}`);
        primerLanzamiento = false;
    }

    if (continuarJugando && sumArray(misDados) < 21) {
        continuarJugando = await select({
            message: "¿Desea lanzar el dado de nuevo?",
            options: [
                { value: true, label: "Sí" },
                { value: false, label: "No" },
            ]
        });
    }

    // Nuevos dados usuario
    if (continuarJugando && sumArray(misDados) < 21) {
        misDados.push(rollDice());
    }

    // Nuevos dados CPU
    if (continuarJugandoCPU) {
        let debeTirar = decideTirarCPU (sumArray(CPUDados), dificultad, dificultad == "hard" ? 60 : 25);

        if (debeTirar) {
            CPUDados.push(rollDice());
        } else {
            continuarJugandoCPU = false;
        }
    }

    let plantarUsuario = "y te has plantado.";
    let plantarCPU = "y se ha plantado.";

    if (sumArray(misDados) > 21) {
        usuarioPerdido = true;
        continuarJugando = false;
        continuarJugandoCPU = false;
        plantarUsuario = "y has perdido.";
    }

    if (sumArray(CPUDados) > 21) {
        CPUPerdido = true;
        continuarJugando = false;
        continuarJugandoCPU = false;
        plantarCPU = "y ha perdido.";
    }

    if (sumArray(misDados) == 21) {
        usuarioGanado = true;
        continuarJugando = false;
        continuarJugandoCPU = false;
        plantarUsuario = "y has ganado.";
    }

    if (sumArray(CPUDados) == 21) {
        CPUGanado = true;
        continuarJugando = false;
        continuarJugandoCPU = false;
        plantarCPU = "y ha ganado.";
    }

    if (sumArray(CPUDados) < sumArray(misDados) && !continuarJugando && !continuarJugandoCPU && !usuarioGanado && !CPUGanado && !usuarioPerdido && !CPUPerdido) {
        usuarioGanado = true;
        plantarUsuario = "y ha ganado.";
    }

    if (sumArray(CPUDados) > sumArray(misDados) && !continuarJugando && !continuarJugandoCPU && !usuarioGanado && !CPUGanado && !usuarioPerdido && !CPUPerdido) {
        CPUGanado = true;
        plantarCPU = "y ha ganado.";
    }

    console.log(`Lanzaste de nuevo ${misDados[misDados.length-1]} sumando ${sumArray(misDados)} ${!continuarJugando && sumArray(misDados) < 22 ? plantarUsuario :  "" }`);
    console.log(`La CPU lanzó el dado ${CPUDados[CPUDados.length-1]} sumando ${sumArray(CPUDados)} ${!continuarJugandoCPU && sumArray(CPUDados) < 22 ? plantarCPU : "" }`); 
    
}

if (usuarioPerdido) {
    outro("\nHas perdido porque te pasaste de 21. CPU ha ganado.");
}
if (CPUPerdido) {
    outro("\nHas ganado porque la CPU se ha pasado de 21.");
}
if (usuarioGanado) {
    outro("\nHas ganado. CPU ha perdido.");
}
if (CPUGanado) {
    outro("\nHas perdido.");
}
if (sumArray(CPUDados) === sumArray(misDados) && !continuarJugando && !continuarJugandoCPU && !usuarioGanado && !CPUGanado && !usuarioPerdido && !CPUPerdido) {
    empate = true;
}
if (empate) {
    outro("\nEs un empate.");
}