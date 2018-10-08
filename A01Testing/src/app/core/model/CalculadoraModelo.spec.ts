import { CalculadoraModelo } from "./CalculadoraModelo";

describe("La clase CalculadoraModelo",  () =>{
    let calc;
    beforeEach(()=> {
        calc = new CalculadoraModelo("0","0","+");
    });
    // ----------- PRUEBAS -------------
    it("se puede inicializar en su constructor",()=>{
        expect(calc).not.toBeNull();
        expect(calc.txta).toEqual("0");
        expect(calc.txtb==="0").toBeTruthy();
        expect(calc.operacion).toEqual("+");
        expect(calc.resultado).toBeUndefined();
    });
    describe("puede realizar la operacion",()=>{
        beforeEach(()=> {
            calc.txta="21";
            calc.txtb="3";
        });
        it("sumar",()=>{
            expect(calc.resultado===undefined).toBeTruthy();
            calc.calcular();
            expect(calc.resultado).toBeDefined();
            expect(calc.resultado).toBe(24);
        });
        it("multiplicar",()=>{
            expect(calc.resultado===undefined).toBeTruthy();
            calc.operacion="x";
            calc.calcular();
            expect(calc.resultado).toBeDefined();
            expect(calc.resultado).toBe(63);
        });
    });
});