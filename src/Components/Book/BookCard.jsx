
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookCard = ({ book, onDelete }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{book.id}</Typography>
      {/* <Typography variant="subtitle1">{book.author}</Typography> */}
      {/* <Typography>{book.description}</Typography> */}
      <Button color="secondary" onClick={() => onDelete(book.id)}>
        Delete
      </Button>
    </CardContent>
  </Card>
);

export default BookCard;