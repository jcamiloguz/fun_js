const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const ULTIMO_NIVEL = 4;

class Juego {
  constructor() {
    this.inicializar();
    this.generarsecuencia();
    setTimeout(() => {
      this.siguientenivel();
    }, 500);
  }

  inicializar() {
    this.siguientenivel = this.siguientenivel.bind(this);
    this.iluminarColor = this.iluminarColor.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.toogleBtnEmpezar()
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    };
  }
  toogleBtnEmpezar(){
    if(btnEmpezar.classList.contains(`hide`)){
      
      btnEmpezar.classList.remove("hide");
    }else{
      btnEmpezar.classList.add("hide");
    }
  }
  generarsecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }
  siguientenivel() {
    this.subnivel = 0;
    this.iluminarsecuencia();
    this.elementClick();
  }
  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return `celeste`;
      case 1:
        return `violeta`;
      case 2:
        return `naranja`;
      case 3:
        return `verde`;
    }
  }
  transformarColorANumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case `violeta`:
        return 1;
      case `naranja`:
        return 2;
      case `verde`:
        return 3;
    }
  }
  iluminarsecuencia() {
    for (var i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i]);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add(`light`);
    setTimeout(() => this.apagarColor(color), 350);
  }
  apagarColor(color) {
    this.colores[color].classList.remove(`light`);
  }
  elementClick() {
    this.colores.celeste.addEventListener("click", this.elegirColor);
    this.colores.violeta.addEventListener("click", this.elegirColor);
    this.colores.naranja.addEventListener("click", this.elegirColor);
    this.colores.verde.addEventListener("click", this.elegirColor);
  }
  deleteElementClick() {
    this.colores.celeste.removeEventListener("click", this.elegirColor);
    this.colores.violeta.removeEventListener("click", this.elegirColor);
    this.colores.naranja.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    console.log(this.secuencia)
    const numeroColor = this.transformarColorANumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.deleteElementClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.gano()
        } else {
          setTimeout(this.siguientenivel, 1500);
        }
      }
    } else {
      this.perdio()
    }
  }
  gano(){
swal('Juan Camilo Guzman','Ganaste','success')
  .then(this.inicializar.bind(this))
  }
  perdio(){
    swal('Juan Camilo Guzman','Perdiste','error')
    .then(()=>{
      this.deleteElementClick()
      this.inicializar()}
      )
  }
}


function empezarJuego() {
  window.juego = new Juego();
}
