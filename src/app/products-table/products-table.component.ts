import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  products: any;
  productDetail: any;
  

  constructor(private productService: ProductsService, private router:Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
  });
  }
  viewProductDetail(product:any){
    this.productDetail=product;
    this.productService.selectedProduct= this.productDetail;
    this.router.navigate(['/product',this.productDetail.id]);
      }
      openConfirmationDialog(productId:string): void{
        const dialogRef= this.dialog.open(DialogConfirmationComponent, {data:{ productId:productId }});
    
    
    }
  }
