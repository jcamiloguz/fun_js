var juan={
    nombre:`Juan`,
    edad:20
}
function esMayorDeEdad(persona){ 
    if(persona.edad>18){
        var mensajeV = `Es Mayor de edad`
        let mensajeL = `Es Mayor de edad`
    }else{
        var mensajeV = `Es menor de edad`
        let mensajeL = `Es menor de edad`
    }
    console.log(mensajeV)
    console.log(mensajeL)//Da error por que let solo se puede usar dentro del if
}