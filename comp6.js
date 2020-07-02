var juan = {
  nombre: `Juan`,
  edad: 20,
}
function saludar(apellido) {
  console.log(`hola ${this.nombre} ${apellido}`);
}
const saludarJuan = saludar.bind(juan, `Guzman`);
