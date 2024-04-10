let saldoInicial = 20000;
const nombreUsuario = prompt('Ingrese su nombre: ');
const dineroARetirar = prompt('Ingrese un monto a retirar: ');
if (!isNaN(dineroARetirar)) {
    const dineroRetirarNumber = Number(dineroARetirar);
    if (dineroRetirarNumber > 0) {
        if (saldoInicial < dineroRetirarNumber) {
            alert(`El monto de su cuenta es insuficiente: $${saldoInicial}, ${nombreUsuario}: intenta un monto valido!`);
        } else {
            let saldofinal = saldoInicial - dineroARetirar;
            alert(`${nombreUsuario}, retiraste $${dineroRetirarNumber}, tenes disponible $${saldofinal}`);
        }
    } else {
        alert('Dato ingresado no valido, ingrese un valor positivo');
    }
} else {
    alert('Dato ingresado no valido, ingreso un dato no numérico');
}





