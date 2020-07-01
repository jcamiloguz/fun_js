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
obtenerPersonajer()
async function obtenerPersonajer(){
var ids=[1,2,3,4,5,6,8,9,10]
var promesas=ids.map(id=>personaje(id))
try{
var personajes=await Promise.all(promesas)
console.log(personajes)
}catch(id){
    console.log(`Fallo al buscar el personaje ${id}`);
}}

function imprimir(caracters){
for(var i=0;i<caracters.length;i++){
    console.log(caracters[i].name)
}}
