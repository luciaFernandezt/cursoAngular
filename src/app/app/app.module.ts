import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModuleComponent } from './components/contact-form-module/contact-form-module.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormModuleComponent,
    BienvenidaComponent,
    NavComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
