package com.burnsd.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.burnsd.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel="bookCategories", path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
