import { Component, OnInit } from '@angular/core';
import { servicioPeliculas } from 'src/app/servicios/servicioPeliculas';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent implements OnInit {
 
  constructor(private _servicioPeliculas: servicioPeliculas) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  ngAfterViewInit(): void {
  }

  obtenerPeliculas(): void {
  
  }

}
