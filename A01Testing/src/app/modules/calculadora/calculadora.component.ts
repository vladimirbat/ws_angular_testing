import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CalculadoraModelo } from '../../core/model/CalculadoraModelo';


@Component({
    selector: 'calculadora',
    templateUrl: './calculadora.component.html',
    styleUrls:['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
    calc: CalculadoraModelo;
    isNaN = isNaN;
    ngOnInit(): void {
        this.calc = new CalculadoraModelo("","","+");
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('------------- CAMBIO ---------');
    }

}
