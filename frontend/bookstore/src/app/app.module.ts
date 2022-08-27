// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComponent } from './home/home.component';
// import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component';
// import { BookListComponent } from './components/book-list/book-list.component';
// import { BookService } from './services/book.service';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { CartStatusComponent } from './components/cart-status/cart-status.component';
// import { CartDetailsComponent } from './components/cart-details/cart-details.component';
// import { CheckoutComponent } from './components/checkout/checkout.component';
// import { SearchComponent } from './components/search/search.component';
// import { BookDetailsComponent } from './components/book-details/book-details.component';
// import { BookCategoryComponent } from './components/book-category/book-category.component';

// const routes: Routes = [
//   {path: 'books', component: BookListComponent},
//   {path: 'category/:id', component: BookListComponent},
//   {path: '', redirectTo: '/books', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent },
// ]

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     HomeComponent,
//     FooterComponent,
//     LoginComponent,
//     UserComponent,
//     BookListComponent,
//     PageNotFoundComponent,
//     CartStatusComponent,
//     CartDetailsComponent,
//     CheckoutComponent,
//     SearchComponent,
//     BookDetailsComponent,
//     BookCategoryComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [
//     BookService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// ============================================================

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
//client side paging
//import { JwPaginationComponent } from 'jw-angular-pagination';


const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'books', component: BookListComponent},
  {path: 'search/:keyword', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    BookDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent
    //client side paging
    //JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }