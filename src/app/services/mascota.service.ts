import { Injectable } from '@angular/core';
import { MascotaModel } from '../models/mascota.model';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  // Datos In Memory, sin consumir APIs

  mascotas: MascotaModel[] = [];
  idContador = 0;

  constructor() {
    // Iniciamos algunas mascotas
    this.mascotas = [
      {id:1, nombre:"Pluto", edad:90},
      {id:2, nombre:"Burrito IPN", edad:90},
      {id:3, nombre:"Mapache", edad:50},
    ]
    this.idContador = 4;
  }

  save(nuevaMascota: MascotaModel) {
    nuevaMascota.id = this.idContador++;
    this.mascotas.push(nuevaMascota);
  }

  findAll() {
    return this.mascotas;
  }

  findById() {
    
  }

  update(mascotaUpdate: MascotaModel) {
    // Cómo obtener el índice del registro que se quiere actualizar
    const indiceActualizar = this.mascotas.findIndex((mascota) => mascota.id == mascotaUpdate.id);

    // Reemplazar el contenido de la casilla 
    this.mascotas[indiceActualizar] = mascotaUpdate;
  }

  delete(id: number) {
    this.mascotas = this.mascotas.filter((mascota) => mascota.id != id);
  }

}
