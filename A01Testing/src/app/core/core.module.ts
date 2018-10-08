import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasService } from './services/personas.service';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [PersonasService],
    exports: [

    ]
})
export class CoreModule {
    /* Confirmación de que CoreModule solamente está importado en AppModule */
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}