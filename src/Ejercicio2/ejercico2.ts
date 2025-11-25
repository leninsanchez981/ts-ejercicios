class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        super(nombre, edad); // Llama al constructor de Persona
        this.curso = curso;
    }

    mostrarCurso() {
        console.log(`Estoy en el curso: ${this.curso}`);
    }
}

let estudiante1 = new Estudiante("Ana", 20, "Desarrollo Web");

estudiante1.presentarse();
estudiante1.mostrarCurso();

