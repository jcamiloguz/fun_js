var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());
if (contador > 1) {
  console.log(`Fuia a la esquina a ver si llovia ${contador} veces`);
} else {
    console.log(`Fuia a la esquina a ver si llovia una vez`);
}
