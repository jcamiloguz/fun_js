var juan = {
    nombre: `Juan`,
    apellido: `Guzman`,
    edad: 18,
    peso: 75,
  };
  var sebas = {
    nombre: `Senastian`,
    apellido: `Gomez`,
    edad: 22,
    peso: 82,
  };
  var pedro = {
    nombre: `Pedro`,
    apellido: `Navaja`,
    edad: 42,
    peso: 70,
  };
  var Carlos = {
    nombre: `Carlos`,
    apellido: `Castillo`,
    edad: 21,
    peso: 77,
  };
var personas=[juan,sebas,pedro,Carlos]
for(var i=0;i< personas.length;i++){
    var persona=personas[i]
    console.log(`El peso de ${persona.nombre} es ${persona.peso}kg`)
}