import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';
import { deleteBook, fetchBooks } from '../../Redux/Slice/bookSlice';
import BookCard from './BookCard';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state?.books?.items);
  const loading = useSelector((state) => state?.books?.loading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      {books?.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookCard book={book} onDelete={(id) => dispatch(deleteBook(id))} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
