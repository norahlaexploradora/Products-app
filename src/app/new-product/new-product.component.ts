import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  nombre:string;
  stock:number;
  precio:number;
  activo:boolean;
  fechaInclusion: Date;




  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  addProduct(){
    const product= {
      name:this.nombre,
      stock:this.stock,
      price:this.precio,
      active:this.activo,
      date_added: this.fechaInclusion
    

    };

    this.productsService.addProduct(product);
    this.router.navigate(['/']);
  }

}
