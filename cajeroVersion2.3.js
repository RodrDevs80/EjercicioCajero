
//usuarios y contraseñas validos
const usuario = {
    nombre: 'Carlos',
    contrasena: '12345',
    saldo: 2000
}
const usuario2 = {
    nombre: 'pepe',
    contrasena: 'pepe',
    saldo: 3500
}
const usuario3 = {
    nombre: 'fulanito',
    contrasena: 'contraseña',
    saldo: 10000
}
//creo array de objetos usuario
const usuariosValidos = [];
usuariosValidos.push(usuario);
usuariosValidos.push(usuario2);
usuariosValidos.push(usuario3);
let esValido;
let opcion;
let bandera = true;
//funciones
//valido usuarios 
const validarUsuario = (nombre, contrasena, usuariosValidos) => {
    for (let i = 0; i < usuariosValidos.length; i++) {
        if (usuariosValidos[i].nombre == nombre && usuariosValidos[i].contrasena == contrasena) {
            return [usuariosValidos[i].saldo, true];
        }
    }
    return false;
}
//mostrar saldo
function mostrarSaldo(saldo) {
    return saldo;
}
//depositar dinero
function depositarDinero(saldo) {
    const deposito = Number(prompt('Ingrese la cantidad a depositar'));
    saldo = saldo + deposito;
    return saldo;
}
//retirar dinero
function retirarDinero(saldo) {
    const retiro = Number(prompt('Ingrese la cantidad a retirar'));
    let saldoSinModificar = saldo;
    saldo = saldo - retiro;
    const b = validarRetiro(saldo, retiro);
    if (b) {
        return saldo;
    } else {
        return saldoSinModificar;
    }

}
//validar retiro
function validarRetiro(numero, retiro) {
    if (numero < 0) {
        alert('su saldo es insuficiente para realizar el retiro');
        return false;
    }
    else {
        alert(`Retiro exitoso, usted retiro: $${retiro}`)
        return true;
    }
}
//proceso de validación de identidad
do {
    const nombre = prompt(`\n**Cajero Automático**\n\n1. Ingrese su Usuario: `);
    const contrasena = prompt(`\n**Cajero Automático**\n\n1. Ingrese su Contraseña: `);
    esValido = validarUsuario(nombre, contrasena, usuariosValidos);
    console.log(esValido);
    if (esValido[1]) {
        bandera = false;
    } else {
        alert('\nEl usuario o contraseña no es valido.\n \n.Ingrese nuevamente los datos!');
    }

} while (bandera);
//proceso del cajero
let saldoCliente = esValido[0];
do {
    opcion = prompt(`\n**Cajero Automático**\n\n1. Depositar dinero\n2. Retirar dinero\n3. Mostrar saldo\n4. Salir\n\nElija una opción:`);
    switch (opcion) {
        case '1':
            saldoCliente = depositarDinero(saldoCliente);
            alert('deposito exitoso, el saldo de tu cuenta es: $' + saldoCliente);
            break;
        case '2':
            saldoCliente = retirarDinero(saldoCliente);
            break;
        case '3':
            mostrarSaldo(saldoCliente);
            alert('El saldo de tu cuenta es: $' + saldoCliente);
            break;
        case '4':
            break;
        default:
            alert('\nIngreso una opción no valida!\nLas opciones validas están en el rango de 1 a 4')
            break;
    }

} while (opcion != 4);
alert('Gracias por usar nuestro servicio!!!');