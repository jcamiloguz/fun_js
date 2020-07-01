
class persona {
  constructor(nombre, apellido, altura) {
    (this.nombre = nombre), (this.apellido = apellido);
    this.altura = altura;
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }
  soyAlto() {
    if (this.altura > 1.8) {
      console.log(`Soy alto`);
    } else {
      console.log(`No soy alto`);
    }
  }
}
class desarrollador extends persona{
    constructor(nombre, apellido, altura,puesto){
        super(nombre,apellido, altura)
        this.puesto=puesto
    }

    saludar(){
        console.log(
            `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`
          );
    }
    Ing(){
        console.log(`Mi puesto es de ${this.puesto}`)
    }
}

var juan = new persona(`Juan`, `Guzman`, 1.85);
var juanDev = new desarrollador(`Juan`, `Guzman`, 1.6,`Frontend`);
