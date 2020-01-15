package com.vishnu.book_api.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vishnu.book_api.dao.BookDao;
import com.vishnu.book_api.model.Book;

@Service
@Transactional(readOnly = true)
public class BookServiceImpl implements BookService{
	
	@Autowired
	BookDao bookDao ;

	@Transactional
	public long save(Book book) {
		// TODO Auto-generated method stub
		return bookDao.save(book);
	}

	public Book get(long id) {
		// TODO Auto-generated method stub
		return bookDao.get(id);
	}

	public List<Book> list() {
		// TODO Auto-generated method stub
		return bookDao.list();
	}

	@Transactional
	public void update(long id, Book book) {
		// TODO Auto-generated method stub
		bookDao.update(id, book);
	}

	@Transactional
	public void delete(long id) {
		// TODO Auto-generated method stub
		bookDao.delete(id);
	}

	

}
