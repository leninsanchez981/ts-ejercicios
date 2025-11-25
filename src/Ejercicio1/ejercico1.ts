class Persona{
    nombre: string = " "
    edad: number = 0

    constructor(nombre:string ,edad:number ){
        this.edad = edad
        this.nombre = nombre

    }
    saludar(){
        console.log("hola soy" + this.nombre)
    }

}


let lista: Persona[] = [
    new Persona ("Leo" , 24),
    new Persona ("Leo" , 24),
    new Persona ("Leo" , 24),
];


console.log(lista)