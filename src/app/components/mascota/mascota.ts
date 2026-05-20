import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { MascotaModel } from '../../models/mascota.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mascota',
  imports: [FormsModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota implements OnInit {

  // Requerimos el listado de las mascotas - Tabla
  mascotas: MascotaModel[] = [];
  
  // Una mascota para trabajar con el registro - Formulario
  mascota: MascotaModel = {
    id:0,
    nombre:"",
    edad:0,
  };

  // Saber si estamos en edición o guardar la mascota
  enEdicion = false;

  constructor(private mascotaService:MascotaService){

  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    // Listado de mascotas
    this.mascotas = this.mascotaService.findAll();
  }

  guardar() {
    if (this.enEdicion) {
      // Editamos una mascota
      this.mascotaService.update({
        ...this.mascota
      });
      this.limpiar();
      this.enEdicion = false;
    } else {
      // Guardamos una mascota nueva
      this.mascotaService.save({
        ...this.mascota
      });
      this.limpiar();
    }
  }

  actualizar(mascotaActualizar: MascotaModel) {
    this.enEdicion = true;
    this.mascota = {
      ...mascotaActualizar
    };
  }

  eliminar(id: number) {
    this.mascotaService.delete(id);
    this.listar();
  }

  limpiar() {
    this.mascota = {
      id: 0,
      nombre: '',
      edad: 0
    }
  }

}