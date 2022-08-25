import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      sku: 'text-100',
      name: 'C Programming Language',
      description: 'Learn C Programming Language',
      unitPrice: 600,

      
    },
    {
      sku: 'text-101',
      name: 'C# Crash Course',
      description: 'Learn C# Programming Language',
      unitPrice: 600,
  
    },
    {
      sku: 'text-102',
      name: 'C++ Crash Course',
      description: 'Learn C++ Programming Language',
      unitPrice: 600,
      
   
    },
    {
      sku: 'text-103',
      name: 'Cracking The Coding Interview',
      description: 'Learn Cracking the coding interview',
      unitPrice: 600,
    
      
      
    },
    // {
    //   sku: 'text-104',
    //   name: 'Data Structures And Algorithms',
    //   description: 'Learn data structures and algorithms',
    //   unitPrice: 600,
    //   imageUrl: 'assets/images/books/text-100.png',
    //   active: true,
    //   unitsInStock: 100,
     
    // },
    // {
    //   sku: 'text-105',
    //   name: 'Head First Design Patterns',
    //   description: 'Learn design patterns from head first',
    //   unitPrice: 600,
    //   imageUrl: 'assets/images/books/text-100.png',
    //   active: true,
    //   unitsInStock: 100,
    // },
    // {
    //   sku: 'text-106',
    //   name: 'Java Programming',
    //   description: 'Learn java programming from scratc',
    //   unitPrice: 600,
    //   imageUrl: 'assets/images/books/text-100.png',
    //   active: true,
    //   unitsInStock: 100,
    // },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
