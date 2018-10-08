import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ExpectedConditions } from "protractor";
import { By } from "@angular/platform-browser";
import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { CalculadoraComponent } from "./modules/calculadora/calculadora.component";

describe("Componente app (contenedor)", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            imports: [
                AppModule
            ]
        })
    });
    it("Envia los datos al componente calculadora", () => {
        const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
        const appComponent: AppComponent = fixture.debugElement.componentInstance;
        const appElement:any = fixture.debugElement.nativeElement;
        fixture.detectChanges();//ngInit
        // Como cambiamos los datos desde JS....
        appElement.querySelector(".inputCalc").value = "30";
        appElement.querySelector(".inputCalc2").value = "5";
        // ... tenemos que lanzar el evento de cambio de ese input, para que angular lo detecte.
        appElement.querySelector(".inputCalc").dispatchEvent(new Event('input'));
        appElement.querySelector(".inputCalc2").dispatchEvent(new Event('input'));
        fixture.detectChanges();//ngModel del formulario de la calculadora reciba los valores.
        const calcComponent:CalculadoraComponent =
                 fixture.debugElement.query(By.css("calculadora")).componentInstance;
        console.log("txta: " , calcComponent.calc.txta);
        expect(calcComponent.calc.txta==="30").toBeTruthy();
        expect(calcComponent.calc.txtb==="5").toBeTruthy();
    });
});