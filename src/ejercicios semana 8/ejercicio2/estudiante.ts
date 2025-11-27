class Estudiante {
    agregarNota(promedio: number, nuevaNota: number): number {
return (promedio + nuevaNota) / 2;
    }
     aprobar(nota: number, minima: number): boolean {
        return nota >= minima;
    }
calcularFaltas(faltasActuales: number, nuevas: number): number {
    return (faltasActuales + nuevas)
}
}