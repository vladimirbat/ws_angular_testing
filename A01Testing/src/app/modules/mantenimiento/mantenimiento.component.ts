import { Component, OnInit } from '@angular/core';
import { Persona } from '../../core/model/Persona';
import { PersonasService } from '../../core/services/personas.service';


@Component({
    selector: 'mantenimiento',
    templateUrl: './mantenimiento.component.html',
    styleUrls:['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {
    personas: Persona[];
    nuevo: Persona;
    mensaje: string;
    procesando: boolean;
    // Los argumentos que del constructor del componente
    // serán los objetos (servicios) que queremos
    // que Angular nos inyecte.
    constructor(private personasService: PersonasService) {
    }
    ngOnInit(): void {
        this.procesando = true;
        this.personasService.personas.subscribe(
            datos => {
                this.personas = datos;
                this.procesando = false;
            }
        );
        this.nuevo = new Persona();
    }
    insertar(event: any): void {
        this.procesando = true;
        this.personasService.insertar(this.nuevo).subscribe(
            persona => {
                // Persona insertada correctamente entonces pedimos el listado
                // actualizado
                this.personasService.personas.subscribe(
                    datos => {
                        this.personas = datos;
                        this.procesando = false;
                        this.nuevo = new Persona();
                    }
                );
            }
        );
    }
    borrar(persona: Persona): void {
        this.procesando = true;
        this.personasService.borrar(persona.dni).subscribe(
            p => {
                // Persona borrada correctamente entonces pedimos el listado
                // actualizado
                this.personasService.personas.subscribe(
                    datos => {
                        this.personas = datos;
                        this.mensaje = `${persona.nombre} borrado correctamente.`;
                        this.procesando = false;
                        setTimeout(() => this.mensaje = undefined, 2000);
                    }
                );
            }
        );
    }
}
