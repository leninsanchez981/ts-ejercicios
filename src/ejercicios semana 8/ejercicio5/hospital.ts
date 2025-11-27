class Hospital {
    calcularDosis(peso: number, mgPorKg: number): number {
        return (peso * mgPorKg);
    }
calcularIMC(peso: number, altura: number): number {
    return ( peso / (altura * altura));
}
registrarVisitas(visitasActuales: number, nuevas: number): number {
    return (visitasActuales + nuevas)
}
         
}