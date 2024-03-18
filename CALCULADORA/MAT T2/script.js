class Calculadora {

    constructor() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        // PRECISA DE MAIS ATRIBUTOS?
    }

    mostrarVisor() {
        return this.nrVisor;
    }

    // recebe dígito
    digito(dig) {
        if (dig.length != 1) return;
        // PROBLEMA! PROVISÓRIO!
        if ((dig < '0' || dig > '9') && dig != '.') return;
        if (dig == '.') {
            if (this.ptDecimal) return;
            this.ptDecimal = true;
        }
        if (dig == '0') {
            this.nrVisor = this.nrVisor == '.'? this.nrVisor = '0.' : dig;
        }
        this.nrVisor += dig;
    }

}

// ==================================================================
//  RESPOSTAS A EVENTOS DO HTML
// ==================================================================

// ATUALIZA O VALOR NO VISOR
let atualizaVisor = () => {
    document.getElementById('visor-id').innerHTML = calculadora.mostrarVisor();
}

// RECEBE UM DÍGITO (OU PONTO)
let digito = (dig) => {
    calculadora.digito(dig);
    atualizaVisor();
}

// ========================================================
//  INÍCIO DO PROCESSAMENTO
// ========================================================

let calculadora = new Calculadora();

