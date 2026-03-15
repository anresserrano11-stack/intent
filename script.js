// Seleccionar productos
const botonesIntercambio = document.querySelectorAll(".btn-producto");

// Array para guardar solicitudes
let solicitudes = JSON.parse(localStorage.getItem("solicitudes")) || [];

// Crear contador visual
const contador = document.createElement("div");
contador.style.position = "fixed";
contador.style.bottom = "20px";
contador.style.right = "20px";
contador.style.background = "#27ae60";
contador.style.color = "white";
contador.style.padding = "10px 15px";
contador.style.borderRadius = "10px";
contador.style.fontWeight = "bold";
contador.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
document.body.appendChild(contador);

actualizarContador();


// EVENTOS
botonesIntercambio.forEach(boton => {

boton.addEventListener("click", function(e){

e.preventDefault();

const producto = this.parentElement;

const nombre = producto.querySelector("h3").textContent;
const info = producto.querySelector("p").textContent;
const imagen = producto.querySelector("img").src;

const prenda = {
nombre,
info,
imagen
};

// evitar duplicados
const existe = solicitudes.some(item => item.nombre === nombre && item.info === info);

if(existe){

alert("Ya solicitaste intercambio para esta prenda.");

}else{

solicitudes.push(prenda);

localStorage.setItem("solicitudes", JSON.stringify(solicitudes));

alert("Solicitud de intercambio enviada correctamente.");

this.textContent = "Solicitud enviada";
this.style.background = "#aaa";
this.style.pointerEvents = "none";

actualizarContador();

}

});

});


// ACTUALIZAR CONTADOR
function actualizarContador(){

contador.textContent = "Solicitudes: " + solicitudes.length;

}


// EFECTO DE ANIMACION EN PRODUCTOS
const productos = document.querySelectorAll(".producto");

productos.forEach(producto => {

producto.addEventListener("mouseenter", () => {

producto.style.transform = "scale(1.05)";
producto.style.transition = "0.3s";

});

producto.addEventListener("mouseleave", () => {

producto.style.transform = "scale(1)";

});

});