var juan ={
    nombre:`Juan`,
    apellido:`Guzman`,
    edad:20
}
var edad =25;
function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad+ 1
    }
}