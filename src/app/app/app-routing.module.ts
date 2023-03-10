import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ContactFormModuleComponent } from './components/contact-form-module/contact-form-module.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {path:'bienvenida',component:BienvenidaComponent}, 
  {path:'contacto', component: ContactFormModuleComponent}, 
  {path:'nav', component: NavComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
