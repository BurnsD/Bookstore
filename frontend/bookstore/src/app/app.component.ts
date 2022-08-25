import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookstore';
  books: Book[] = [
    {
      sku: 'text-100',
      name: 'C Programming Language',
      description: 'Learn C Programming Language',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-100.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
    {
      sku: 'text-101',
      name: 'C# Crash Course',
      description: 'Learn C# Programming Language',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-101.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
    {
      sku: 'text-102',
      name: 'C++ Crash Course',
      description: 'Learn C++ Programming Language',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-101.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
    {
      sku: 'text-103',
      name: 'Cracking The Coding Interview',
      description: 'Learn Cracking the coding interview',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-103.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
    {
      sku: 'text-104',
      name: 'Data Structures And Algorithms',
      description: 'Learn data structures and algorithms',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-100.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
    {
      sku: 'text-105',
      name: 'Head First Design Patterns',
      description: 'Learn design patterns from head first',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-100.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
    {
      sku: 'text-106',
      name: 'Java Programming',
      description: 'Learn java programming from scratc',
      unitPrice: 600,
      imageUrl: 'assets/images/books/text-100.png',
      active: true,
      unitsInStock: 100,
      createdOn: '2022-08-25T01:25:15.000+00:00',
      updatedOn: null,
    },
  ];
}
