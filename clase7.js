var juan ={
    nombre:`Juan`,
    apellido:`Guzman`,
    edad:20
}
function imprimir(persona){
    var  { nombre } =persona
    var  { apellido } =persona
    var  { edad} =persona
    console.log(`${nombre} ${apellido} tiene ${edad} anos`)
}