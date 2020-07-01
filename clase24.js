const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = `people/:id`;

function personaje(id, callback) {
  $.get(
    `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`,
    { crossDomain: true },
    callback
  ).fail(function(){
      console.log(`erorrr :(`)
  });
}
personaje(1, 
    function (data) {
        console.log(`Hola yo soy ${data.name}`);
      
  personaje(2, function (data) {
    console.log(`Hola yo soy ${data.name}`);
  
    personaje(3,function (data) {
        console.log(`Hola yo soy ${data.name}`);
      });
  });
});
