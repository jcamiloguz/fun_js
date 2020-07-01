var juan ={
    nombre:`Juan`,
    apellido:`Guzman`,
    edad:20
}

function imprimir(persona){
    console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} anos`)
}
function imprimirNombre({nombre}){
    console.log(`${nombre} `)
}