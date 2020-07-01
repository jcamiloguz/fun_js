var juan ={
    nombre:`Juan`,
    apellido:`Guzman`,
    edad:18
}
const MAYORIA_DE_EDAD = 18;
const mayorDeEdad =({ edad }) => edad>=MAYORIA_DE_EDAD
const menorDeEdad = ({ edad }) => edad<MAYORIA_DE_EDAD

function impMayorDeEdad(persona){
    if(mayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad por que tiene ${persona.edad} anos`)
    }else{
        console.log(`${persona.nombre} es menor de edad por que tiene ${persona.edad} anos`)
    }
}
function permitirAcceso(persona){
    if(mayorDeEdad(persona)){
        console.log(`Puede seguir`)
    }
    if(menorDeEdad(persona)){
        console.log(`Denegar acceso`)
    }
}
