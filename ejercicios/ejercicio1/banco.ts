class Banco {

    depositar(saldo: number, monto: number): number {
        return saldo + monto;
    }
     retirar(saldo: number, monto: number): number {
        if (monto > saldo) {
            throw ("Fondos Insuficientes");

        }
     else {
        return (saldo - monto);
        
     }   
    
    
}
transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) {
            throw ("No se puede transferir mas del saldo disponible");
}
return (saldoOrigen - monto)
}
}
