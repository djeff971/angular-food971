import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { AppRoutingModule } from "./app-routing.module";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { AlertComponent } from "./_components";
import { HomeComponent } from "./home";

// used to fetch products to authenticated users
import { List_products } from "./products/list-products.component";

import { ProductsModel } from "./_models/products";

import { StorageService } from "./_services/storage.service";
import { CartService } from "./_services/cart.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HomeComponent, List_products],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ProductsModel,
    StorageService,
    CartService,

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
