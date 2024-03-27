class Calculadora {

    constructor() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        this.iniciouSegundo = false;
        this.estadoErro = false;
        this.memTemp = '';
        this.op = {
            NOP: 0,
            DIV: 1,
            MULT: 2,
            SUB: 3,
            SUM: 4
        };
        this.opAtual = this.op.NOP;
        // EXISTEM OUTRO ATRIBUTOS?

    }

    // Retorna o contúdo do visor
    mostraVisor() {
        return this.nrVisor;
    }

    // Recebe um dígito
    insereDigito(dig) {
        if (this.estadoErro) return;
        if (dig.length != 1) return;
        if ((dig < '0' || dig > '9') && dig != '.') return;
        if (!this.iniciouSegundo && this.opAtual != this.op.NOP) {
            this.iniciouSegundo = true;
            this.ptDecimal = false;
            this.nrVisor = '0';
        }
        if (dig == '.') {
            if (this.ptDecimal) return;
            this.ptDecimal = true;
        }
        if (this.nrVisor.length == 10) return;
        if (this.nrVisor == '0') {
            this.nrVisor = dig == '.' ? '0.' : dig;
        } else {
            this.nrVisor += dig;
        }
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
            case '*':
                this.opAtual = this.op.MULT;
                break;
            case '/':
                this.opAtual = this.op.DIV;
                break;
        }
        this.memTemp = this.nrVisor;
    }

    igual() {
        if (this.estadoErro) return;
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
                // PERIGO: DIVISÃO POR ZERO
                if (num2 == 0) {
                    this.estadoErro = true;
                    this.nrVisor = 'ERRO!';
                    return;
                }
                resultado = num1 / num2;
        }
        this.opAtual = this.op.NOP;
        this.ptDecimal = false;
        this.iniciouSegundo = false;
        this.memTemp = '';
        this.nrVisor = String(resultado).slice(0, 10);
    }

    // Limpa o conteúdo do visor e as operações (mas não a memória)
    teclaC() {
        this.nrVisor = '0';
        this.ptDecimal = false;
        this.memTemp = '';
        this.iniciouSegundo = false;
        this.estadoErro = false;
        this.opAtual = this.op.NOP;
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

let defineOp = (op) => {
    if (calculadora.opAtual != calculadora.op.NOP) {
        igual();
        atualizaVisor();
    }
    calculadora.defineOperacao(op);
}

let igual = () => {
    calculadora.igual();
    atualizaVisor();
}

let teclaC = () => {
    calculadora.teclaC();
    atualizaVisor();
}






// ==========  INICIALIZAÇÃO ===================
let calculadora = new Calculadora();

