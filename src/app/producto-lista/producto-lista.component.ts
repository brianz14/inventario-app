import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {

  productos:Producto[];

  constructor(private productoServicio:ProductoService){

  }

  ngOnInit(): void {
    //cargamos los productos desde el metodo
    this.obtenerProductos();
    
  }
  private obtenerProductos() {

    //consumimos datos del observable(suscribirnos)
    this.productoServicio.obtenerProductoLista().subscribe(
      //recibir datos usamos lambda
        (datos=>{
          this.productos=datos;
        })

    );
  }
}
