/**Realizar lo mismo pero con funciones */
//variables
let saldoInicial = 20000;
const nombreUsuario = prompt('Ingrese su nombre: ');
const dineroARetirar = prompt('Ingrese un monto a retirar: ');
//funciones
function validarEntrada(retiro) {
    const esValido = !isNaN(retiro) && retiro >= 0;
    return esValido ? Number(retiro) : retiro;
}
function calcularRetiro(retiro, saldoCuenta) {
    const saldofinal = saldoCuenta - retiro;
    return saldofinal;
}
function informarAlCliente(DineroARetirar, saldoFinal, saldoInicial, nombreUsuario) {
    if (typeof DineroARetirar == 'number') {
        if (saldoFinal < 0) {
            alert(`El monto de su cuenta es insuficiente,usted tiene $${saldoInicial} e intenta retirar ${DineroARetirar}, ${nombreUsuario}: intenta un monto valido!`);
        } else {
            alert(`${nombreUsuario}, retiraste $${DineroARetirar}, tenes disponible $${saldoFinal}`);
        }
    } else {
        alert(`El dato ingresado: ${DineroARetirar},no es valido! La cantidad que desea retirar debe ser un numero positivo`);
    }
}
//combino las funciones para obtener un resultado-llamo a las funciones
//valido la entrada de datos
const dineroARetirarValidado = validarEntrada(dineroARetirar);
const saldoFinal = calcularRetiro(dineroARetirarValidado, saldoInicial);
informarAlCliente(dineroARetirarValidado, saldoFinal, saldoInicial, nombreUsuario,);




