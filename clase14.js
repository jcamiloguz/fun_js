var signo = prompt(`Cual es tu signo`);
switch (signo) {
  case "Acuario":
    console.log(`Eres acuario`);
    break;
  case "leo":
  case "Leo":
    console.log(`Eres leonardo`);
    break;
  case "Pedro":
    console.log(`Eres Pedro `);
    break;
  default:
    console.log(`Eres nadie`);
    break;
}
