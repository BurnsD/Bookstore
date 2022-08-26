package com.burnsd.onlinebookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.burnsd.onlinebookstore.entity.Book;
import com.burnsd.onlinebookstore.repository.BookRepository;

@Service
public class BookServiceImpl implements IBookService {

	@Autowired
	private BookRepository repo;

	@Override
	public Long saveBook(Book b) {
		b = repo.save(b);
		return b.getId();
	}

	@Override
	public List<Book> findAllBooks() {
		List<Book> list = repo.findAll();
		return null;
	}
	
	
}
