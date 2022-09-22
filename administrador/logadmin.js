const formularioUi = document.querySelector("#formulario");
const listaJuegosUi = document.getElementById("listaJuegos");
const arrayJuegos = [];

const skutabla = document.getElementById("skutabla")
const nombretabla = document.getElementById("nombretabla")
const categoriatabla = document.getElementById("categoriatabla")
const descripciontabla = document.getElementById("descripciontabla")
const destacartabla = document.getElementById("destacartabla")
const opciones = document.getElementById("opcionestabla")

const tablaJuegos = document.getElementById('juegos')

const crearJuego = (sku, nombre, descripcion, categoria, destacar) => {
  let item = {
    sku: sku,
    nombre: nombre,
    descripcion: descripcion,
    categoria: categoria,
    destacar: false,
  };

  arrayJuegos.push(item);

  return item;
};

// console.log(arrayActividades)

const guardarDB = () => {
  localStorage.setItem("VideoJuegos", JSON.stringify(arrayJuegos));

  mostrarDB();
};

const mostrarDB = () => {
  listaJuegosUi.innerHTML = "";

  let arrayJuegos = JSON.parse(localStorage.getItem("VideoJuegos"));

  if (arrayJuegos === null) {
    arrayJuegos = [];
  } else {
    arrayJuegos.forEach(element => {
  
            skutabla.innerHTML += `<div>${element.sku}</div>`
            nombretabla.innerHTML += `<div>${element.nombre}</div>`
            descripciontabla.innerHTML += `<div>${element.descripcion}</div>`
            categoriatabla.innerHTML += `<div>${element.categoria}</div>`
            destacartabla.innerHTML += `<div>${element.destacar} <i class="material-icons">grade</i> </div>`
            opcionestabla.innerHTML += `<div> <i class="material-icons">edit</i><i class="material-icons">delete</i> </div>`
        
    });
  };
}

 function eliminarDB(sku) {

  let arrayIndex;

  arrayJuegos.forEach((element, index) => {

    if (element.sku === sku) {
      arrayIndex = index;
    }
  });


  arrayJuegos.splice(arrayIndex, 1);

  guardarDB();

}
 const editarDB = (sku) => {
    let arrayIndex = arrayJuegos.findIndex( (element) => element.sku === sku);

    console.log(arrayIndex)

    // arrayActividades[arrayIndex].estado = true;
    guardarDB();
 }


formularioUi.addEventListener("submit", (e) => {
  e.preventDefault();

  let skuUi = document.querySelector("#sku").value;
  let nombreUi = document.querySelector("#firstName").value;
  let descripcionUi = document.querySelector("#descripcion").value;
  let categoriaUi = document.querySelector("#categoria").value;

  crearJuego(skuUi, nombreUi, descripcionUi, categoriaUi);
  guardarDB();

  formularioUi.reset();
});

document.addEventListener("DOMContentLoaded", mostrarDB);

listaJuegosUi.addEventListener('click', (e) =>{
  e.preventDefault();
  console.log(e)
  if(e.target.innerHTML === "edit" || e.target.innerHTML === "delete") {
    let texto = e.path[2].childNodes[6].innerHTML;  //me falta el mouseevent para poder saber cuales son los numeros que van aqui y que funcione los botones
    if(e.target.innerHTML === "delete"){
      eliminarDB(texto);
    }
if (e.target.innerHTML === "edit") {editarDB(texto);} }
})