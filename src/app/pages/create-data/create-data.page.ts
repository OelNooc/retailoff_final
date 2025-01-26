import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Producto } from '../../models/producto.model';
import { Cliente } from '../../models/cliente.model';
import { Envio } from '../../models/envio.model';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.page.html',
  styleUrls: ['./create-data.page.scss'],
  standalone: false
})
export class CreateDataPage implements OnInit {

  selectedSegment: string = 'producto';

  modelProducto: Producto = {
    STOCK: 0,
    CODIGO_PRODUCTO: 0,
    ID_PRODUCTO: this.generate(),
    NOMBRE_PRODUCTO: '',
    CAPACIDAD: ''
  };

  modelCliente: Cliente = {
    NOMBRE_CLIENTE: '',
    ID_CLIENTE: this.generate(),
    EMAIL: ''
  };

  modelEnvio: Envio = {
    ID_ENVIO: this.generate(),
    ID_PRODUCTO: this.generate(),
    NOMBRE_PRODUCTO: '',
    NOMBRE_CLIENTE: '',
    DIRECCION: '',
    CANTIDAD: 0
  };

  constructor(private peticionesService: PeticionesService) {}

  ngOnInit() {
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate(): number {
    return this.getRandomInt(0, 99999);
  }

  agregarProducto() {
    this.peticionesService.addProducto(this.modelProducto).subscribe(response => {
      console.log('Producto agregado:', response);
      alert('Producto agregado exitosamente');
    });
  }

  agregarCliente() {
    this.peticionesService.addCliente(this.modelCliente).subscribe(response => {
      console.log('Cliente agregado:', response);
      alert('Cliente agregado exitosamente');
    });
  }

  agregarEnvio() {
    this.peticionesService.addEnvio(this.modelEnvio).subscribe(response => {
      console.log('Envio agregado:', response);
      alert('Envio agregado exitosamente');
    });
  }

}
