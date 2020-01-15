package com.vishnu.book_api.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.vishnu.book_api.model.Book;

@Repository
public class BookDaoImpl implements BookDao{
	@Autowired
	private SessionFactory factory;

	public long save(Book book) {
		// TODO Auto-generated method stub
		factory.getCurrentSession().save(book);
		return book.getId();
	}

	public Book get(long id) {
		// TODO Auto-generated method stub
		return factory.getCurrentSession().get(Book.class, id);
	}

	public List<Book> list() {
		// TODO Auto-generated method stub
		return factory.getCurrentSession().createQuery("from Book").list();
	}

	public void update(long id, Book book) {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();
		Book temp = session.byId(Book.class).load(id);
		temp.setAuthor(book.getAuthor());
		temp.setTitle(book.getTitle());
		session.flush();
		
	}

	public void delete(long id) {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();
		Book book = session.byId(Book.class).load(id);
		session.delete(book);
		
	}
	

}
