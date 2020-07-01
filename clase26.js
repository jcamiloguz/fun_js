const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;
const OPT = { crossDomain: true };
function personaje(id) {
  return new Promise((resolve, reject) => {
    var URL = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`;
    $.get(URL, OPT, (data) => {
      resolve(data);
    }).fail(() => reject(id));
  });
}
var ids=[1,2,3,4,5,6,7]
var promesas=ids.map(id=>personaje(id))
function imprimir(caracters){
for(var i=0;i<caracters.length;i++){
    console.log(caracters[i].name)
}}
Promise
    .all(promesas)
    .then(caracters=>imprimir(caracters));


    /* 
personaje(1)
  .then(caracter => {
    console.log(`El personaje 1 es ${caracter.name}`);
    return personaje(2)
  })
  .then(caracter => {
    console.log(`El personaje 2 es ${caracter.name}`);
  })
  .catch(id => {
    console.log(`Fallo al buscar el personaje ${id}`);
  });
 */