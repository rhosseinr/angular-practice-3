import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        MaterialModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule,
            providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
        };
    }
}
