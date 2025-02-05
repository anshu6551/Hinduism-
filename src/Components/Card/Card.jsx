import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './Card.css';

// Styled component for the gradient background, rounded corners, and hover effect
const GradientCard = styled(Card)({
  background: 'linear-gradient(to left, darkred, #FFC107)',
  borderRadius: '16px',
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for scale and shadow
  '&:hover': {
    transform: 'scale(1.05)', // Slightly enlarge the card on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Enhance shadow on hover
  },
});

// Styled component for making the image responsive
const RoundImage = styled(CardMedia)(({ theme }) => ({
  width: '100px', // Default size for smaller screens
  height: '100px',
  borderRadius: '16px',
  margin: '16px auto 8px',
  objectFit: 'fill',
  [theme.breakpoints.up('sm')]: {
    width: '150px', // Medium size for tablets
    height: '150px',
  },
  [theme.breakpoints.up('md')]: {
    width: '200px', // Larger size for desktops
    height: '200px',
  },
}));

// Book data
const books = [
  {
    title: 'The Bhagavad Gita',
    description: 'A timeless spiritual guide, the Bhagavad Gita teaches profound life lessons through the conversation between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra.',
    imageUrl: 'https://m.media-amazon.com/images/I/51DmSjF7BuL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Upanishads',
    description: 'The Upanishads are ancient texts that explore the nature of hindu culture reality, self-realization, and the ultimate truth, providing insights into Hindu philosophy and spiritual awakening.',
    imageUrl: 'https://c.sop.saavncdn.com/Upanishads-20230601231142-500x500.jpg',
  },
  {
    title: 'The Ramayana',
    description: 'The Ramayana narrates the epic tale of Lord Rama, his exile, the abduction of his wife Sita, and his battle to rescue her, offering lessons on duty, honor, and dharma. jai shree ram',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs989dnXtDqD_xUWreJTDvIrD-7eev9KeOxQ&s',
  },
  {
    title: 'The Mahabharata',
    description: "The Mahabharata is one of the world's longest epic poems, weaving together mythology, history, and philosophy. It contains the Bhagavad Gita and reflects on themes of justice, duty, and morality.",
    imageUrl: 'https://m.media-amazon.com/images/I/71plTmokySL.AC_UF1000,1000_QL80.jpg',
  },
  {
    title: 'The Puranas',
    description: 'The Puranas are a genre of ancient Indian literature that narrates the history of the universe, gods, and sages. These texts explore cosmology, creation, and religious practices.',
    imageUrl: 'https://i.pinimg.com/474x/83/30/da/8330da39f6d33ede56514051b4b61fcc.jpg',
  },
  {
    title: 'Yoga Sutras of Patanjali',
    description: 'The Yoga Sutras of Patanjali are a collection of aphorisms that form the foundation of yoga philosophy, providing a guide to achieving mental clarity and spiritual enlightenment.',
    imageUrl: 'https://shivkripabooks.in/cdn/shop/files/ASH010-0-545x800.jpg?v=1701764559',
  },
  {
    title: 'Srimad Bhagavatam',
    description: 'The Srimad Bhagavatam is one of the most important Puranic texts in Hinduism, focusing on the life and teachings of Krishna. It contains stories of his divine incarnations, philosophical teachings on devotion. ',
    imageUrl: 'https://i.pinimg.com/736x/ea/d9/4f/ead94f728c6606d2a796abed102a4c20.jpg',
  },
  {
    title: 'The Ashtavakra Gita',
    description: 'The Ashtavakra Gita is presents conversation between sage Ashtavakra & King Janaka. a dialogue on self-realization & nature of self, emphasizing true essence of person is beyond body & mind. ',
    imageUrl: 'https://padhegaindia.in/wp-content/uploads/2024/04/9788194970132.webp',
  }
];

function Cards() {
  return (
    <div>
      <header className="header">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
          Hindu Culture Books
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Explore our curated collection of books on Hindu culture, spirituality, and philosophy.
        </Typography>
      </header>

      <Container>
        <Grid container spacing={4} justifyContent="center">
          {books.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <GradientCard>
                <RoundImage
                  component="img"
                  image={book.imageUrl}
                  alt={book.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: 'white', marginTop: '10px' }}>
                    {book.description}
                  </Typography>
                </CardContent>
              </GradientCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Cards;