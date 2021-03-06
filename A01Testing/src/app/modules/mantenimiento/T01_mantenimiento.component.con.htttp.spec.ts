import { TestBed, ComponentFixture, tick, fakeAsync } from "@angular/core/testing";
import { ExpectedConditions } from "protractor";
import { By, BrowserModule } from "@angular/platform-browser";
import { MantenimientoModule } from "./mantenimiento.module";
import { PersonasService } from "../../core/services/personas.service";
import { CoreModule } from "../../core/core.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MantenimientoComponent } from "./mantenimiento.component";

describe("El componente Mantenimiento (http)",()=>{
    beforeEach(()=>{
        // El método TestBed.configureTestingModule permite importar
        // todos los elementos que vamos a emplear en esta prueba.
        // Declaramos un módulo temporal para la prueba.
        TestBed.configureTestingModule({
            declarations: [
                
            ], imports: [
                MantenimientoModule,
                CoreModule,
                BrowserModule,
                FormsModule,
                HttpClientModule
            ]
        }).compileComponents();
    });
    // Nota: Tener preubas unitarias que dependen de peticiones http 
    // reales es un antipatrón, simplemente se ha puesto para
    // introducir el asincronismo en las pruebas y la 
    // posibilidad del uso de DoneFn.
    //---------- Mediante DoneFn indicamos que la prueba no termine hasta que se ejecute "done()".
    // it("recibe e imprime las personas",(done: DoneFn)=>{
    //     const fixture:ComponentFixture<MantenimientoComponent> = TestBed.createComponent(MantenimientoComponent);
    //     const mantenimientoComponent:MantenimientoComponent = fixture.debugElement.componentInstance;
    //     fixture.detectChanges();//continua en el flujo, llega a ngOnInit (petición que tarda un rato)
    //     const element:any = fixture.nativeElement;
    //     setTimeout(()=>{ // Esperando a recibir la respuesta http
    //         fixture.detectChanges();
    //         expect(element.querySelectorAll("tr.fila").length).toBeGreaterThan(5);
    //         done();
    //     },1000);
    // });
    
});