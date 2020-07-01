var juan = {
  nombre: `Juan`,
  apellido: `Guzman`,
  edad: 18,
  peso: 75,
};

const PESO_DIARIO = 0.2;
const aumentar = (persona) => (persona.peso += PESO_DIARIO);
const adelgazar = (persona) => (persona.peso -= PESO_DIARIO);

console.log(`Al inicio del ano ${juan.nombre} tuvo ${juan.peso}kg`);
for (var i = 1; i <= 365; i++) {
  var random = Math.random();
  if (random < 0.25) {
    aumentar(juan);
  } else if (random < 0.5) {
    adelgazar(juan);
  }
}
console.log(`Al final del ano ${juan.nombre} tuvo ${juan.peso.toFixed(2)}kg`);
