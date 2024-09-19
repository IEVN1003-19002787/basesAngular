import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html', 
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="saludo de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2022",
      "precio":2000,
      "Marca":"NISSAN",
      "Color":"Moradito",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSP-upxFnmgf08oghvYTLN4NZatKZ9lH5RjA&s"
    },
    {
      "productoId":2,
      "Modelo":'Beetle',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 5 2022",
      "precio":3000,
      "Marca":"volkswagen",
      "Color":"Camaleon",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRzyTyXSrGKEoEeSGz5optp595Cim9WC54Awo84pdJqfBHagjKPyw8V8TmNYFQnDv-g8&usqp=CAU"
    },
    {
      "productoId":3,
      "Modelo":'Tsuru',
      "Descripcion":"4 puertas deportivo",
      "year":"febrero 3 2020",
      "precio":7000,
      "Marca":"Lamborghini",
      "Color":"Verde",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-Y_mKxChDlYrlz3uPl57BHk10kWE0EFsRdtFz8MJFz4B0dhzML2pGXKC-EYLdga9kZY&usqp=CAU"
    }
  ]
}
