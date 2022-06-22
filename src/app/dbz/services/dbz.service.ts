import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interdaces";

// Servicio es el lugar donde almacenamos la información para interactuar con fuentes externas
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder:7500
        }
      ];
    
      get personajes(): Personaje[]{
        return [...this._personajes];
      }

    constructor(){}

    agregarPersonaje( personaje: Personaje){
        this._personajes.push( personaje );
    }

}