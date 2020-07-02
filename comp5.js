function crearSaludo(finalDeFrase){
    return function(nombre){
        console.log(`hola ${nombre} ${finalDeFrase}`)
    }
}
const saludoArgentino = crearSaludo(`che`)
const saludoMexicano = crearSaludo(`wey`)
const saludoColombiano = crearSaludo(`parce`)
saludoArgentino(`Juan`)
saludoMexicano(`Juan`)
saludoColombiano(`Juan`)