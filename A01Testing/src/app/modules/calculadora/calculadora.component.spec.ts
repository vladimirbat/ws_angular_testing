import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CalculadoraComponent } from "./calculadora.component";
import { CalculadoraModule } from "./calculadora.module";
import { ExpectedConditions } from "protractor";
import { By } from "@angular/platform-browser";

describe("El componente calculadora",()=>{
    beforeEach(()=>{
        // El método TestBed.configureTestingModule permite importar
        // todos los elementos que vamos a emplear en esta prueba.
        // Declaramos un módulo temporal para la prueba.
        TestBed.configureTestingModule({
            declarations:[

            ],
            imports:[
                CalculadoraModule
            ]
        })
    });
    it("se instancia correctamente",()=>{
        // TestBed es una clase de utilidad de Angular
        // para crear y acceder a los componentes para probarlos.
        //      -createComponent: Crea en memoria el componete cuya clase se indica
        //        como argumento y lo crea con la clase, html y todo lo necesario
        // ComponentFixture es una variable que alberga el componente creado.
        const fixture:ComponentFixture<CalculadoraComponent> = TestBed.createComponent(CalculadoraComponent);
        // Obtenemos una referencia a la clase del componente que se ha instanciado en el paso anterior.
        const calculadoraComponent:CalculadoraComponent = fixture.debugElement.componentInstance;
        expect(calculadoraComponent).toBeDefined();
        // expect(calculadoraComponent.calc.txta).toBe("");
        // expect(calculadoraComponent.calc.operacion).toBe("+");
    });
    it("su objeto calc se inicializa correctamente",()=>{
        const fixture:ComponentFixture<CalculadoraComponent> = TestBed.createComponent(CalculadoraComponent);
        const calculadoraComponent:CalculadoraComponent = fixture.componentInstance;
        fixture.detectChanges();//continua en el flujo, llega a ngOnInit
        expect(calculadoraComponent.calc.txta).toBe("");
        expect(calculadoraComponent.calc.operacion).toBe("+");
        const element:any = fixture.nativeElement;
        console.log("Etiqueta: ",element.tagName);
        expect(element.querySelector("h1").textContent).toContain("Calculadora");
        expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent)
                .toContain("Calculadora");
    });
    it("ejecutando su método calcular, se muestra en la vista el resultado",()=>{
        const fixture:ComponentFixture<CalculadoraComponent> = TestBed.createComponent(CalculadoraComponent);
        const calculadoraComponent:CalculadoraComponent = fixture.componentInstance;
        fixture.detectChanges();//continua en el flujo, llega a ngOnInit
        calculadoraComponent.calc.txta="12";
        calculadoraComponent.calc.txtb="11";
        calculadoraComponent.calc.operacion="x";
        calculadoraComponent.calc.calcular();
        fixture.detectChanges();
        const element:any = fixture.nativeElement;
        expect(element.querySelector("span.ok").textContent).toContain("132");
    });
    it("al hacer click en el botón, se muestra en la vista el resultado",()=>{
        const fixture:ComponentFixture<CalculadoraComponent> = TestBed.createComponent(CalculadoraComponent);
        const calculadoraComponent:CalculadoraComponent = fixture.componentInstance;
        fixture.detectChanges();//continua en el flujo, llega a ngOnInit
        calculadoraComponent.calc.txta="12";
        calculadoraComponent.calc.txtb="11";
        calculadoraComponent.calc.operacion="x";
        calculadoraComponent.calc.calcular();
        const element:any = fixture.nativeElement;
        fixture.debugElement.query(By.css("button")).triggerEventHandler('click',{});
        fixture.detectChanges();
        expect(element.querySelector("span.ok").textContent).toContain("132");
    });
});