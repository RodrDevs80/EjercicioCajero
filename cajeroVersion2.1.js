let usuario = prompt("Ingrese su nombre de usuario");
let retiro = parseFloat(prompt("Ingrese el monto a retirar"));
let saldo = 100;

function verificarDato(retiro) {
    if (retiro <= 0 || isNaN(retiro)) {
        alert("EL monto ingresado es invalido");

    } else {

        compararRetiroSaldo(retiro, saldo, rCalculo);

    }
}

function compararRetiroSaldo(retiro, saldo, rCalculo) {

    if (retiro > saldo) {

        alert(usuario + " tu saldo es insuficiente para retirar $" + retiro);
        alert(usuario + " tu saldo acutual es $" + saldo);

    } else {

        calculoRetiro(retiro, saldo,);
        alert("El retiro fue hecho con exito.");
        alert("Su saldo restante es $" + rCalculo);

    }

}

function calculoRetiro(saldo, retiro) {
    let saldoRestante = saldo - retiro;
    return saldoRestante;
}

let rCalculo = calculoRetiro(saldo, retiro);

verificarDato(retiro);