export class CalculadoraModelo {
    resultado:any;
    txta:string;
    txtb:string;
    operacion:string;
    operaciones:any[];
    constructor(txta:string, txtb:string, operacion:string) {
        this.resultado = undefined;
        this.operaciones = [
            { valor: '+', texto: 'sumar' }, { valor: '-', texto: 'restar' },
            { valor: 'x', texto: 'mult.' }, { valor: '/', texto: 'div' }
        ];
        this.txta = txta;
        this.txtb = txtb;
        this.operacion = operacion;
    }
    calcular() {
        let a = parseFloat(this.txta);
        let b = parseFloat(this.txtb);
        if (this.operacion == '+') {
            this.resultado = a + b;
        }
        else if (this.operacion == '-') {
            this.resultado = a - b;
        }
        else if (this.operacion == 'x') {
            this.resultado = a * b;
        }
        else if (this.operacion == '/') {
            this.resultado = a / b;
        }
    };
}