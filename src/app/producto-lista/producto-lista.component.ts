import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {



  productos: Producto[];

  constructor(private productoServicio: ProductoService, private enrutador: Router) {

  }

  ngOnInit(): void {
    //cargamos los productos desde el metodo
    this.obtenerProductos();

  }
  private obtenerProductos() {

    //consumimos datos del observable(suscribirnos)
    this.productoServicio.obtenerProductoLista().subscribe(
      //recibir datos usamos lambda
      (datos => {
        this.productos = datos;
      })

    );
  }

  eliminarProducto(id: number) {
    this.productoServicio.eliminarProducto(id).subscribe(
      {
        next: (datos) => this.obtenerProductos,
        error: (errores: any) => console.log(errores)

      }
    );
  }

  editarProducto(id: number) {

    this.enrutador.navigate(['editar-producto', id]);
  }

}
