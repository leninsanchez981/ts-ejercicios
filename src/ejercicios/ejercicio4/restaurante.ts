class Restaurante {
    calcularTotal(precio: number, cantidad: number): number {
        return (precio * cantidad);
    }
aplicarDescuento(total: number, descuento: number): number {
    return (total - (total * descuento / 100));
}

calcularPropina(total: number, porcentaje: number): number {
    return (total *(porcentaje / 100))
}

}