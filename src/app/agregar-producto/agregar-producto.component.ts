import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
})
export class AgregarProductoComponent {
  producto:Producto= new Producto(); //cramos nuevo objeto

  constructor(private productoService : ProductoService,private enrutador:Router){//recibimos enrutador para redirigir al listado

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.guardarProducto();
  }
  guardarProducto() {
    
    this.productoService.agregarProducto(this.producto).subscribe(
      {
        next:(datos)=>{
          this.irListaProducto();
        },
        error:(error:any)=>{
          console.log(error);
        }

      }
    );

  }
  irListaProducto() {
    this.enrutador.navigate(["/productos"]);//redireciona a lista productos
  }

}
