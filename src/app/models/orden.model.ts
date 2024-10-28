import { Cliente } from "./cliente.model";
import { Producto } from "./product.model";

export interface Orden {
  id?: number;
  cantidad: number;
  total?: number;
  fechaOrden: Date;
  clienteId?: number;
  productoId?: number;
  cliente?: Cliente;
  producto?: Producto;
}
