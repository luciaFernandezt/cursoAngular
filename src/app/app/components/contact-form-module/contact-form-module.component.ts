import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";


@Component({
  selector: 'app-contact-form-module',
  templateUrl: './contact-form-module.component.html',
  styleUrls: ['./contact-form-module.component.css']
})
export class ContactFormModuleComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.form = this._fb.group({
      nombre: [null, [Validators.required, Validators.pattern("^[A-Za-z ]+$")]],
      correo: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]+$")]],
      mensaje: [null, [Validators.required, Validators.maxLength(40)]]
    });
  }

  ngOnInit(): void {
  }

  enviar(): void{
 
    console.log(this.form.value);

    if(this.form.invalid){
     alert('ERRORES');
      return;
    }    
  }

  get nombre(): FormControl{
    return <FormControl>this.form.get('nombre');
  }

  get correo(): FormControl{
    return <FormControl>this.form.get('correo');
  }

  get telefono(): FormControl{
    return <FormControl>this.form.get('telefono');
  }

  get mensaje(): FormControl{
    return <FormControl>this.form.get('mensaje');
  }

}

