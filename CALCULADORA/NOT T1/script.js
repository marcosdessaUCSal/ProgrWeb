class Calculadora {

    constructor() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        this.estadoErro = false;
        this.memTemp = '';
        this.iniciouSegundo = false;
        this.op = {
            NOP: 0,
            SUM: 1,
            SUB: 2,
            MULT: 3,
            DIV: 4
        };
        this.opAtual = this.op.NOP;
        // TEM MAIS ATRIBUTOS?
    }

    // Retorna valor do visor
    mostraVisor() {
        return this.nrVisor;
    }

    // Recebe dígito
    recebeDigito(dig) {
        if (this.estadoErro) return;
        if (dig.length != 1) return;
        if ((dig < '0' || dig > '9') && dig != '.') return;
        if (!this.iniciouSegundo && this.opAtual != this.op.NOP) {
            this.iniciouSegundo = true;
            this.ptDecimal = false;
            this.nrVisor = '0';
        }
        if (this.nrVisor.length == 10) return;
        if (dig == '.') {
            if (this.ptDecimal) return;
            this.ptDecimal = true;
        }
        if (this.nrVisor == '0') {
            this.nrVisor = dig == '.' ? '0.' : dig;
        } else {
            this.nrVisor += dig;
        }
        console.log('numero: ', this.nrVisor)
    }

    // Define a operação atual
    defineOperacao(op) {
        if (this.estadoErro) return;
        switch (op) {
            case '+':
                this.opAtual = this.op.SUM;
                break;
            case '-':
                this.opAtual = this.op.SUB;
                break;
            case '/':
                this.opAtual = this.op.DIV;
                break;
            case '*':
                this.opAtual = this.op.MULT;
                break;
        }
        this.memTemp = this.nrVisor;
    }

    // Executa operação: tecla igual
    igual() {
        if (this.estadoErro) return;
        if (this.opAtual == this.op.NOP) return;
        let num1 = parseFloat(this.memTemp);
        let num2 = parseFloat(this.nrVisor);
        let resultado = 0;
        switch (this.opAtual) {
            case this.op.SUM:
                resultado = num1 + num2;
                break;
            case this.op.SUB:
                resultado = num1 - num2;
                break;
            case this.op.MULT:
                resultado = num1 * num2;
                break;
            case this.op.DIV:
                if (num2 == 0) {
                    this.estadoErro = true;
                    this.nrVisor = 'ERRO!';
                    return;
                }
                resultado = num1 / num2;
                break;
        }
        this.opAtual = this.op.NOP;
        this.ptDecimal = false;
        this.memTemp = '';
        this.iniciouSegundo = false;
        this.nrVisor = String(resultado).slice(0, 10);
    }

    // Tecla C - reinicia tudo, exceto memória
    teclaC() {

    }

}

// ===================================================================
//  REAÇÃO A EVENTOS DO MOUSE
// ===================================================================


let mostraVisor = () => {
    document.getElementById('visor-id').innerHTML = calculadora.nrVisor;
}

let digito = (dig) => {
    calculadora.recebeDigito(dig);
    mostraVisor();
}

let defOp = (op) => {
    if (calculadora.opAtual != calculadora.op.NOP) {
        igual();
        mostraVisor();
    }
    calculadora.defineOperacao(op);
}

let igual = () => {
    calculadora.igual();
    mostraVisor();
}

let teclaC = () => {

}



// ===================================================================
//  INÍCIO DO PROCESSAMENTO
// ===================================================================




let calculadora = new Calculadora();



