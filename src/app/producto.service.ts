import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urb_base="http://localhost:8080/inventario-app/productos"

  constructor(private clienteHttp:HttpClient) { }

  //metodo observable espera una arreglo de producto
  obtenerProductoLista():Observable<Producto[]>{

    //retorna desde la url la lista y le pasamos de que url
    return this.clienteHttp.get<Producto[]>(this.urb_base)
  }

  agregarProducto(producto :Producto):Observable<Object>{

    return this.clienteHttp.post(this.urb_base,producto); //le enciamos el producto
  }
}
