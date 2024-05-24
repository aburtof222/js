/*Ejercicio #5
function invertirCadena(cad) {
    let arr = cad.split("").reverse().join("");
    console.log(arr);
}
let cadena = prompt("Introduce una cadaena");
invertirCadena(cadena);
*/

/*Ejercicio #6
function seRepite(cadena, palabra) {
    let myArr = [];
    let contador = 0;
    myArr = cadena.split(" ");
        myArr.forEach(element => {
        if (element.includes(palabra) ) {
            contador++;
        }
    });
    console.log(myArr);
    console.log(`La palabra ${b} se repite: ${contador} veces.`);
}
let a = prompt("Introduce una texto");
let b = prompt("Introduce una palabra para ver cuantas veces se repiten en el texto aterior");
seRepite(a, b);
*/

/*Ejercicio #7
function esPalindromo(palabra) {
    let alrevez = "";
    let resultado = "";
    alrevez = palabra.split(" ").reverse().join("");

    resultado = (palabra == alrevez?"Si es palindromo":"No es palindromo");
    
    console.log(`La palabra "${palabra}" alrevez se lee "${alrevez}" por lo tanto ${resultado}.`);
}
let a = prompt("Introduce una palabra para saber si es un PALINDROMO, es decir, si se lee igual de izquierda a derecha");
esPalindromo(a);
*/

//Ejercicio #8
function eliminaTexto(cadena, texto) {
    let resultado = "";
    resultado = cadena.split(`${texto}`).join("");
    console.log(`Si al parrafo: "${a}" le extraemos el siguiente texto: "${b}" quedaria asi: "${resultado}".`);
}
let a = prompt("Introduce una parrafo");
let b = prompt("Introduce que palabras quieres eliminar del parrafo anterior");

eliminaTexto(a, b);
