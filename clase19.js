function persona(nombre,apellido,altura){
    this.nombre=nombre,
    this.apellido= apellido
    this.altura=altura
}
persona.prototype.saludar =function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
persona.prototype.soyAlto =function(){
    debugger
    if(this.altura > 1.8){
        console.log(`Soy alto`)
    }else{
        console.log(`No soy alto`)
    }
}
var juan =new persona(`Juan`, `Guzman`,1.85)