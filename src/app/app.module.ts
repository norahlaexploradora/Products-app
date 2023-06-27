import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsTableComponent } from './products-table/products-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewProductComponent } from './new-product/new-product.component';

import { EditProductComponent } from './edit-product/edit-product.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { ProductsChartsComponent } from './products-charts/products-charts.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductDetailComponent,
    NewProductComponent,
    EditProductComponent,
    DialogConfirmationComponent,
    ProductsChartsComponent
  ], entryComponents:[DialogConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule, 
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    NgxChartsModule,
    MatToolbarModule,
    MatCheckboxModule
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
