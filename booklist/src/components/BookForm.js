import React, { useContext, useState } from 'react';
import { BookContex } from '../contexts/BookContex';

const NewBookForm = () => {
    const { addBook } = useContext(BookContex);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    return (
        <form action="">
            <input type='text' placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type='text' placeholder="author" value={author} onChange={(e) => setAutohr(e.target.value)} required />
            <input type="submit" value="add book"/>
        </form>
    );
}
 
export default NewBookForm;