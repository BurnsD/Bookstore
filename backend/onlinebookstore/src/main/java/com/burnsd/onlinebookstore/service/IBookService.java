package com.burnsd.onlinebookstore.service;

import java.util.List;

import com.burnsd.onlinebookstore.entity.Book;

public interface IBookService {
	
	Integer saveBook(Book b);
	List<Book> findAllBooks();
}
