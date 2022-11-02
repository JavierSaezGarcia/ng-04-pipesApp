import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { registerLocaleData } from '@angular/common';
// Cambiar el local de la app
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeGer from '@angular/common/locales/de';
import localeRu from '@angular/common/locales/ru';
import localeJp from '@angular/common/locales/ja';

registerLocaleData( localeEs);
registerLocaleData( localeFr );
registerLocaleData( localeGer );
registerLocaleData( localeRu );
registerLocaleData( localeJp );
// despues en provider insertamos {provide: LOCALE_ID, useValue: 'es' }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,  
    AppRouterModule,     
    SharedModule, 
    VentasModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
