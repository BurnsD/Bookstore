package com.burnsd.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.burnsd.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
