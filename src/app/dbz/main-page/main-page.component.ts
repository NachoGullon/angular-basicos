import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interdaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Celula',
    poder: 10000
  }

  constructor() {
   
  }

}
