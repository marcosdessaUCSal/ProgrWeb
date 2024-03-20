class Calculadora {

    constructor() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        // TEM MAIS ATRIBUTOS?
    }

    // Retorna valor do visor
    mostraVisor() {
        return this.nrVisor;
    }

    // Recebe dígito
    recebeDigito(dig) {
        if (dig.length != 1) return;
        if (this.nrVisor.length == 10) return;
        // PROVISÓRIO
        if ((dig < '0' || dig > '9') && dig != '.') return;
        if (this.nrVisor == '0') {
            
        }
        this.nrVisor += dig;
    }

}

// ===================================================================
//  REAÇÃO A EVENTOS DO MOUSE
// ===================================================================

let calculadora = new Calculadora();




let mostraVisor = () => {
    document.getElementById('visor-id').innerHTML = calculadora.nrVisor;
}

let digito = (dig) => {
    calculadora.recebeDigito(dig);
    mostraVisor();
}


