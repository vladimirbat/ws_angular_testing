import { TestBed, ComponentFixture, tick, fakeAsync } from "@angular/core/testing";
import { ExpectedConditions } from "protractor";
import { By, BrowserModule } from "@angular/platform-browser";
import { MantenimientoModule } from "./mantenimiento.module";
import { PersonasService } from "../../core/services/personas.service";
import { CoreModule } from "../../core/core.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MantenimientoComponent } from "./mantenimiento.component";
import { Persona } from "../../core/model/Persona";
import { MATRIZ_PERSONAS } from "../../core/data/matriz_personas";
import { Observable, Observer } from "rxjs";

//============ MOCK DEL SERVICIO =========================
class PersonasServiceMokeado {
    private _personas: Persona[];
    constructor() {
        this._personas= [...MATRIZ_PERSONAS];
    }

    get personas(): Observable<Persona[]> {// Retorna un observable
        return Observable.create((observer: Observer<Persona[]>) => {
            setTimeout(() => {
                observer.next([...this._personas]);
                observer.complete();
            }, 2000);
        });
    }

    insertar(p: Persona): Observable<Persona[]> {
        this._personas.push(p);
        return this.personas;
    }

    borrar(dni: number): Observable<Persona[]> {
        this._personas = this._personas.filter(p => p.dni !== dni);
        return this.personas;
    }
}
//=============================================================

describe("El componente Mantenimiento (mockeado)",()=>{
    beforeEach(()=>{
        // El método TestBed.configureTestingModule permite importar
        // todos los elementos que vamos a emplear en esta prueba.
        // Declaramos un módulo temporal para la prueba.
        TestBed.configureTestingModule({
            declarations: [
                
            ], imports: [
                MantenimientoModule
            ],
            providers:[{provide:PersonasService,useValue:new PersonasServiceMokeado()}]
        }).compileComponents();
    });
    //---------- Mediante DoneFn indicamos que la prueba no termine hasta que se ejecute "done()".
    it("recibe e imprime las personas",fakeAsync(()=>{
        const fixture:ComponentFixture<MantenimientoComponent> = TestBed.createComponent(MantenimientoComponent);
        const mantenimientoComponent:MantenimientoComponent = fixture.debugElement.componentInstance;
        fixture.detectChanges();//continua en el flujo, llega a ngOnInit (petición que tarda un rato)
        const element:any = fixture.nativeElement;
        tick(3000); // Esperando a recibir la respuesta http
        fixture.detectChanges();
        expect(element.querySelectorAll("tr.fila").length).toBeGreaterThan(5);
    }));
    
});