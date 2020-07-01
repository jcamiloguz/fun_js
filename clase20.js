function heredaDe(prototipohijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipohijo.prototype = new fn();
  prototipohijo.prototype.constructor = prototipohijo;
}
function persona(nombre, apellido, altura) {
  (this.nombre = nombre), (this.apellido = apellido);
  this.altura = altura;
}
persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};
persona.prototype.soyAlto = function () {
  if (this.altura > 1.8) {
    console.log(`Soy alto`);
  } else {
    console.log(`No soy alto`);
  }
};
function desarrollador(nombre, apellido,altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura=altura;
}
heredaDe(desarrollador, persona);
desarrollador.prototype.saludar = function () {
  console.log(
    `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`
  );
};

var juan = new persona(`Juan`, `Guzman`, 1.85);
var juanDev = new desarrollador(`Juan`, `Guzman`, 1.85);
