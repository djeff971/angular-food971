import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../_models';
import { AccountService } from '../_services';
import { ProductsModel } from '../_models/products';
import { StorageService } from '../_services/storage.service';
import { CartService } from '../_services/cart.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  user: User;
  searchText;
  public cartflag: boolean = false;
  public sortBy: string = '';
  public sortOption: string = 'product_name|asc';

  constructor(
    private accountService: AccountService,
    public products: ProductsModel
  ) {
    this.user = this.accountService.userValue;
  }

  ngOnInit() {
    this.ref();
  }

  // Fonction ajoutée pour le panier
  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 10);
  }
}
