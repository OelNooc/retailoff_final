import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Producto } from '../../models/producto.model';
import { Cliente } from '../../models/cliente.model';
import { Envio } from '../../models/envio.model';

@Component({
  selector: 'app-last-ones',
  templateUrl: './last-ones.page.html',
  styleUrls: ['./last-ones.page.scss'],
  standalone: false
})
export class LastOnesPage implements OnInit {

  productos: Producto[] = [];
  clientes: Cliente[] = [];
  envios: Envio[] = [];

  constructor(private peticionesService: PeticionesService) {}

  ngOnInit() {
    this.obtenerUltimosProductos();
    this.obtenerUltimosClientes();
    this.obtenerUltimosEnvios();
  }

  obtenerUltimosProductos() {
    this.peticionesService.getProducto().subscribe(
      (data: Producto[]) => {
        this.productos = data.slice(-3).reverse(); 
      },
      error => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  obtenerUltimosClientes() {
    this.peticionesService.getCliente().subscribe(
      (data: Cliente[]) => {
        this.clientes = data.slice(-3).reverse(); 
      },
      error => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  obtenerUltimosEnvios() {
    this.peticionesService.getEnvio().subscribe(
      (data: Envio[]) => {
        this.envios = data.slice(-3).reverse(); 
      },
      error => {
        console.error('Error al obtener envíos', error);
      }
    );
  }

}
