import { Component, OnInit } from "@angular/core";
import { ProductsModel } from "../_models/products";

@Component({
  selector: "shopping-cart",
  templateUrl: "list-products.component.html"
})
export class List_products implements OnInit {
  constructor(public products: ProductsModel) {
    //console.log(products.data);
    this.products = products;
  }

  ngOnInit() {}
}
