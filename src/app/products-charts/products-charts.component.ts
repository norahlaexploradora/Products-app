import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-charts',
  templateUrl: './products-charts.component.html',
  styleUrls: ['./products-charts.component.scss']
})
export class ProductsChartsComponent implements OnInit {
stockControl=[];
 priceControl=[];
 
  colorScheme = {

    domain: ['#deb887', '#9f845f'],
  
  };


  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: any[])=>{
    const masDeCienProd  = products.filter((product)=> product.stock > 100);
    const menosDeCienProd = products.filter((product)=>product.stock < 100);
    const precioMenorADiez= products.filter((product)=> product.price < 10);
    const precioMayorADiez= products.filter((product)=> product.price > 10);

    
this.stockControl= [ 
  {name: 'Más de 100 en Stock',
value: masDeCienProd.length
  },

   
    { name: 'Menos de 100 en Stock',
    value: menosDeCienProd.length
 },
 
  ]

  this.priceControl=[
    {
      name: 'Precio menor a 10 euros',
      value: precioMenorADiez.length

    },
    {
      name: 'Precio mayor a 10 euros',
      value: precioMayorADiez.length

    }

  ]
})


}

}
