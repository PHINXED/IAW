let numero = prompt('dime un numero')
Number(numero)
alert(numero * numero)
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let numero = prompt('dime un numero')
if (numero < 10) {
  alert("pequeno")
} else if (numero >= 10 && numero < 100)
  alert("mediano")
else {
  alert("mayor")
}
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let contador = prompt('dime un numero')
let dibujo = ""
while (contador > 0) {
  dibujo = dibujo + "*";
  contador = contador - 1;
}
alert(dibujo)
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let contador = prompt('numero escaleras');
let almohadilla = "";
let linea = "";
while (contador >= 1) {
  almohadilla = almohadilla + '#'
  linea = linea + almohadilla + "\n"
  contador = contador - 1;
}
alert(linea)
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
let contador = 0;
while (contador <= 12) {
  document.write(contador)
  contador = contador + 2;
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  let resultado = 1;
  let potencia = 5;
  let base = 2
  while (potencia >= 1) {
    resultado = resultado * base;
    potencia = potencia - 1;
  }
  alert(resultado)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  for (let numero = 0; numero <= 12; numero = numero + 2) {
    console.log(numero);
  }
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  let resultado = 1
  for (let potencia = 0; potencia < 12; potencia = potencia + 1) {
    resultado = resultado * 2
  }
  alert(resultado)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  for (let actual = 20;; actual = actual + 1)
    if (actual % 7 == 0) {
      console.log(actual);
      break;
    }
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  chessboard = num => {
      let output = ""
      for (i = 1; i <= num; i++) {
        for (j = 1; j <= num; j++) {
          ((i + j) % 2 == 0 ? output += " " : output += "#")
        }
        output += "\n"
      }
      console.log(output0)
    }
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switch (prompt("Como esta la carne?")) {
    case "seca":
      console.log("echale salsita");
      break;
    case "jugosa":
      console.log("corre cometela que se seca");
      break;
    case "un poco pasada":
      console.log("echale ketchup que sabe mal");
      break;
  }
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  function sumar(a, b) {
    return a + b;
  }
  alert(sumar(2, 3))

  let res1 = sumar(3, 5);
  let res2 = sumar(4, 5);

  sumar(sumar(3, 5), sumar(4, 5));
  sumar(res1, res2);
  
  - - - 
  potencia 

let resultado = 1
for (let potencia = 0; potencia < 10; potencia = potencia + 1){
resultado = resultado * 2;
}
alert(resultado);
------------


const cuadrado = (x) => x * x;

alert(cuadrado(5));

-----------------------------------------
+sacar posiciones de una array

let listadenumeros = [2, 4, 5, 6, 7, 8];

alert(listadenumeros[2]);

+otro ejemplo

let listadenumeros = [2, 4, 5, 6, 7, 8];

alert(listadenumeros[2] + "," + listadenumeros[3]);

-------------------------------------------------
un array 1,2,3 y le añadimos 4 y 5 con push

let listadenumeros = [1, 2, 3];

listadenumeros.push(4, 5);

alert(listadenumeros)

otra manera-->

let listadenumeros = [1, 2, 3];

listadenumeros.push(4);

listadenumeros.push(5);

console.log(listadenumeros)

---------------------------------------

esto te dice posicion de la h
let cadena = "hola";

alert(cadena.indexOf("h"));


-   -   -   -   -   -   -   -   -   -   -   -   -   
let cadena = "hola";
console.log(cadena.lenght);

--------------------------------------
