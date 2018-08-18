import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { NavigatorComponent } from 'src/app/core/header/navigator/navigator.component'
import { MaterialModule } from '../shared/material.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        NavigatorComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        NavigatorComponent,
        FooterComponent
    ],
    providers: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core: CoreModule) {
        if (core) {
            throw new Error("CoreModule should be imported ONLY in AppModule.");
        }
    }
}