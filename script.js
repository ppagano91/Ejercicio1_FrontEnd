// Detener el envio del formulario (cualquiera de las formas) al hacer clic en el boton 'Enviar' e imprimir por consola algun mensaje cada vez que se haga clic en el mismo.
// Capturar e imprimir por consola los datos que la persona coloque en el formulario.
// Pintar en el HTML (en cualquier elemento creado para tal fin) algun dato (o todos) de la informacion del formulario al hacer clic en el boton 'JS'. Se puede crear este elemento (o elementos) tanto desde el HTML como utilizando JS como se vio en clases.
// Agregar en el HTML un boton en el header cuyo unico proposito sea cambiar el color del mismo y realizar la logica para que pueda funcionar como tal (utilizar ID en el header para seleccionarlo y trabajar con el DOM y la propiedad classList de los elementos HTML como se vio en clases).
// Investigar sobre los metodos 'toggle', 'add', y 'remove' para trabajar con clases de CSS desde JS.
let data = {
  personas: [],
  mensajes: [],
};

const form = document.querySelector("#form");
const sendBtn = document.getElementById("sendBtn");
const contenedorPersonas = document.querySelector("#contenedor-personas");
const headerBtn = document.querySelector("#headerBtn");
const contactosHeader = document.querySelector("#header");
const indexHeader = document.querySelector("#header-index");

const changeIndexHeaderColor = () => {};

const changeContactosHeaderColor = () => {
  let min = 0;
  let max = 256;
  let r = Math.floor(Math.random() * (max - min) + min);
  let g = Math.floor(Math.random() * (max - min) + min);
  let b = Math.floor(Math.random() * (max - min) + min);
  //   console.log("Random red value: " + r);
  //   console.log("Random green value: " + g);
  //   console.log("Random blue value: " + b);

  let rgb = `rgb(${r},${g},${b}`;
  // let rgb2 = `rgb(${256 - r},${256 - g},${256 - b}`;
  contactosHeader.style.background = rgb;
  //   headerBtn.style.background = rgb2;
  //   headerBtn.style.color = rgb;

  //https://www.youtube.com/watch?v=ho5hjedYWVM&ab_channel=TruzzBlogg
};

headerBtn.addEventListener("click", changeContactosHeaderColor);
headerBtn.addEventListener("click", changeIndexHeaderColor);

const handleSendBtn = () => {
  let nuevaPersona = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    correo: form.correo.value,
    edad: form.edad.value,
    pais: form.pais.value,
  };

  data = { ...data, personas: [...data.personas, nuevaPersona] };

  addNewPerson(nuevaPersona);
  console.log(data.personas);
};

const addNewPerson = (nuevaPersona) => {
  const elementoNombreCompleto = document.createElement("h4");
  elementoNombreCompleto.classList.add("nombre-persona");
  const elementoCorreo = document.createElement("h4");
  elementoCorreo.classList.add("correo-persona");
  const elementoEdad = document.createElement("h4");
  elementoEdad.classList.add("edad-persona");
  const elementoPais = document.createElement("h4");
  elementoPais.classList.add("pais-persona");
  const contenedorPersona = document.createElement("div");
  contenedorPersona.classList.add("persona");

  elementoNombreCompleto.innerText = `${nuevaPersona.nombre} ${nuevaPersona.apellido}`;
  elementoCorreo.innerText = nuevaPersona.correo;
  elementoEdad.innerText = nuevaPersona.edad;
  elementoPais.innerText = nuevaPersona.pais;

  contenedorPersona.appendChild(elementoNombreCompleto);
  contenedorPersona.appendChild(elementoCorreo);
  contenedorPersona.appendChild(elementoEdad);
  contenedorPersona.appendChild(elementoPais);

  contenedorPersonas.appendChild(contenedorPersona);

  // console.log(data.personas);
  console.log("Se ha agregado una nueva persona al listado de personas");
  console.log(`Hay ${data.personas.length} personas en la lista`);
};

sendBtn.addEventListener("click", handleSendBtn);

// let me = {
//   nombre: "Patricio",
//   apellido: "Pagano",
//   correo: "pagano.patricio@gmail.com",
//   edad: "30",
//   pais: "argentina",
// };

// addNewPerson(me);
