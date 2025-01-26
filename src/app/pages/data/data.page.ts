import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
  standalone: false
})
export class DataPage implements OnInit {

  nombreProducto: string = '';
  productos: Producto[] = [];
  mostrarResultados: boolean = false;

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit() {
  }

  buscarProducto() {
    this.peticionesService.getProducto().subscribe(
      (data: Producto[]) => {
        this.productos = data.filter(producto => 
          producto.NOMBRE_PRODUCTO.toLowerCase().includes(this.nombreProducto.toLowerCase())
        );
        this.mostrarResultados = true;
      },
      error => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  resetFormulario() {
    this.nombreProducto = '';
    this.mostrarResultados = false;
    this.productos = [];
  }

}
