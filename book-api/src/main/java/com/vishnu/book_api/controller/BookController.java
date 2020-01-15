package com.vishnu.book_api.controller;

import java.awt.image.RescaleOp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vishnu.book_api.model.Book;
import com.vishnu.book_api.service.BookService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class BookController {
	
	@Autowired
	BookService bookService;
	
	@PostMapping("/book")
	public ResponseEntity<?> save (@RequestBody Book book){
		long id = bookService.save(book);
		return ResponseEntity.ok().body("Book created : "+id);
	}
	
	@GetMapping("/book/{id}")
	public ResponseEntity<Book> get(@PathVariable("id") long id){
		
		Book book = bookService.get(id);
		return ResponseEntity.ok().body(book);
		
	}
	
	@GetMapping("/book")
	public ResponseEntity<List<Book>> list(){
		
		List<Book> books = bookService.list();
		return ResponseEntity.ok().body(books);
	}
	
	@PutMapping("/book/{id}")
	public ResponseEntity update (@PathVariable("id") long id , @RequestBody Book book){
		
		bookService.update(id, book);
		return ResponseEntity.ok().body("Book has been updated...");
		
	}
	
	@DeleteMapping("/book/{id}")
	public ResponseEntity delete(@PathVariable("id") long id ){
		
		bookService.delete(id);
		return ResponseEntity.ok().body("Book Deleted...");
	}

}
