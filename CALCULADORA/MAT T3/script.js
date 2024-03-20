class Calculadora {

    constructor() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        // EXISTEM OUTRO ATRIBUTOS?

    }

    // Retorna o contúdo do visor
    mostraVisor() {
        return this.nrVisor;
    }

    // Recebe um dígito
    insereDigito(dig) {
        if (dig.length != 1) return;
        if (this.nrVisor.length == 10) return;
        if ((dig < '0' || dig > '9') && dig != '.') return;
        if (dig == '.') {
            if (this.ptDecimal) return;
            this.ptDecimal = true;
        }
        if (this.nrVisor == '0') {
            this.nrVisor = dig == '.' ? '0.' : dig;
        } else {
            this.nrVisor += dig;
        }
        
    }

}


// ========================================================================
//      REAÇÃO A EVENTOS DO MOUSE
// ========================================================================

// Exibe o conteúdo do visor
let atualizaVisor = () => {
    document.getElementById('visor-id').innerHTML = calculadora.mostraVisor();
}

// RECEBE UM DÍGITO DA CALCULADORA
let digito = (dig) => {
    calculadora.insereDigito(dig);
    atualizaVisor();
}






// ==========  INICIALIZAÇÃO ===================
let calculadora = new Calculadora();
// calculadora.nrVisor = '3493';
// atualizaVisor();
