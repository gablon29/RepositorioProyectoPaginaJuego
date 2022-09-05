//let valor = 0

//valor = prompt("ingrerse un numero:")

//if(valor % 2 == 0){ 
    // console.log("el numero es par")
//} else {
    //console.log("el numero es impar")
//}

// let empanada = ""
// let cantidad = 0

// empanada = prompt("ingrese el sabor de empanada:")

// if(empanada == ""){
//     alert("No ingreso ningun sabor")
// } else{
//     cantidad= prompt("Cuantas quiere?")
// } if (cantidad == 0) {
//     alert("No quiere ninguna?")
// } else {
//     alert(" su pedido es " + cantidad + " empanadas de " + empanada)
// }

// function suma() {
// let a = 5 
// let b = 5
// const resultado = a + b
// console.log (resultado)
// }
// suma()

// if (a >= b) {
//     document.write("a es mayor que b")
// } else {
//     document.write("b es mayor que a")
// }

// let a = 16
// let b = 15
// {a === b ? document.write("los valores son iguales") : document.write("los valores son diferentes")}

// let nota = prompt("ingrese una nota:");

// switch(true){
//     case (Number(nota) >= 0 && Number(nota) <= 5):
//         document.write("Insuficiente");
//         break;
//         case (Number(nota) >= 6 && Number(nota) <= 8):
//             document.write("buena");
//             break;
//             case (Number(nota) >= 9 && Number(nota) <= 10):
//             document.write("Excelente");
//             break;
//             default:
//                 document.write("No valida");
// }

// let numero = prompt("ingrese un numero")

// for(let i = 0; i < numero; i++){
//     document.write(i + "<br>");
// }

// let equipos = prompt("ingrese un equipo").toLocaleUpperCase();
// let colores = ""

// switch(equipos){
//     case "RIVER":
//     colores="Blanco y Rojo"
//     break;
//     case "BOCA":
//         colores="Azul y amarillo"
//         break;
//         case"ATLETICO TUCUMAN":
//         colores="Celeste y blanco"
//         case"":
//         colores="No ingreso nada"
//         break;
//         default:
//             colores="colores no encontrados"
// }
// document.write(colores)

// function aleatorio() {
// let numero = Math.floor(Math.random()*(10-1+1)+1)
// document.getElementById("numero").innerHTML = numero
// let array =[]
// array.push(numero)
// console.log(array)
// }

// function saludar (nombre) {
//     return " Hola " + nombre
// }
// console.log(saludar ("Ian"))

// const saludar = (nombre) => 'hola ian'
// console.log(saludar("Ian"))

// document.querySelector('h1').textContent= "Texto desde js";
// document.getElementById('segundo-h1').textContent="Soy el mejor";
// console.log(document.getElementById('segundo-h1'))

// const lista = document.getElementById('lista')

// const li = document.createElement('li')

// li.textContent = 'nuevo item'

// lista.appendChild(li).textContent="cartas"

// setTimeout(() => {
// console.log( "hola mundo");
// } 
// ,3000) 

// const medidas = () => {
//     console.log("medidas")
//     console.log("ancho:" + window.innerWidth)
//     console.log("alto:" + window.innerHeight)
// }
// medidas()

const abrirPagina = () => {
    window.open("https://www.google.es/", "google", "widht = 600", "height = 600" )
    window.print()
}
