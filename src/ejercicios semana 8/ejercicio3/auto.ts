class Auto {
    acelerar(velocidadActual: number, incremento: number): number {
        return (velocidadActual + incremento);
    }
    frenar(velocidadActual: number, decremento: number): number {
        return (velocidadActual - decremento);
    }

    recorrer(distancia: number, tiempo: number): number {
        return (distancia / tiempo)
    }


}