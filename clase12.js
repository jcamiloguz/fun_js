var juan = {
  nombre: `Juan`,
  apellido: `Guzman`,
  edad: 18,
  peso: 75,
};

const PESO_DIARIO = 0.2;
const aumentar = (persona) => (persona.peso += PESO_DIARIO);
const adelgazar = (persona) => (persona.peso -= PESO_DIARIO);
const META = juan.peso - 3;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
var dias = 0;
while (juan.peso > META) {
  if (comeMucho()) {
    aumentar(juan);
  }
  if (realizaDeporte()) {
    adelgazar(juan);
  }
  dias += 1;
}
console.log(`Al final ${juan.nombre} tardo ${dias} para llegar a la meta`);
