import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductsListResponse } from 'src/app/models/get-products-list-response';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  adsList: Product[];

  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsList(3, 15).subscribe(
      (response: GetProductsListResponse) => {
        let noProductResponse : boolean = false;
        if(response == null)
        {
            noProductResponse = true;
        }
        else
        {
          this.adsList = response.products;
        }
       
      },
      err => {
        // TBA - error msg on ui
        console.log(err.error);
      }
    );
  }

}
