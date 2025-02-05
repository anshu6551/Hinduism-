

import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid transparent', 
  borderRadius: '10px', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'border 0.3s ease', 
  '&:hover': {
    border: '2px solid #f50057', 
  },
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const galleryItems = [
  {
        name: "Diwali",
        season: "Autumn",
        imageUrl: "https://t4.ftcdn.net/jpg/08/11/47/95/240_F_811479549_TcoytXqPkar9vCQphdYvi44hhF66elrm.jpg",
      },
      {
        name: "Holi",
        season: "Spring",
        imageUrl: "https://img.freepik.com/premium-photo/happy-holi-celebration-photo_846732-1686.jpg?size=626&ext=jpg&uid=R163435667&ga=GA1.1.1523073630.1726341063&semt=ais_hybrid",
      },
      {
        name: "Durga pooja",
        season: "Autumn",
        imageUrl: "https://media.istockphoto.com/id/1044388000/photo/priest-worshipping-goddess-durga-durga-puja-festival-celebration.jpg?s=612x612&w=0&k=20&c=ZNjOXd3OlItDgIPnU7rHJfcH-r33Q0dEzOknQLIMnlw="
      },
      {
        name: "Chath pooja",
        season: "Autumn",
        imageUrl: "https://t4.ftcdn.net/jpg/04/71/63/87/240_F_471638768_BKlhSvcji98ew6Nn9tW8WfmDifZCabfJ.jpg"
      },
      {
        name: "Ganesh Pooja",
        season: "Late Summer",
        imageUrl: "https://www.shutterstock.com/image-photo/applying-tilak-ganesh-idol-indian-260nw-2508348001.jpg"
      },
      {
        name: "Raksha Bandhan",
        season: "Monsoon",
        imageUrl: "https://img.freepik.com/premium-photo/festive-family-atmosphere-raksha-bandhan-indian-culture_894855-4507.jpg"
      },
      {
        name: "Makar Sankranti",
        season: "Winter",
        imageUrl: "https://www.shutterstock.com/image-photo/indian-festival-makar-sankranti-special-260nw-2235584419.jpg"
      },
      {
        name: "Janmashtami",
        season: "Late Summer",
        imageUrl: "https://www.livemint.com/lm-img/img/2023/09/06/original/PTI09-05-2023-000145B-0_1693976681921.jpg"
      },
      {
        name: "Shivratri",
        season: "Winter",
        imageUrl: "https://media.assettype.com/freepressjournal/2022-03/4542f155-3cda-42dc-baa7-c38559994229/38_382879_lord_shiva_lingam_images_lord_shiva_lingam_images.jpg"
      }
    ];


const GallerySection = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, padding: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Gallery</Typography>
        <Grid container spacing={4}>
          {galleryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{ height: 200, width: '100%' }}
                />
                <Overlay className="overlay">
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                  <Typography variant="body2">({item.season})</Typography>
                </Overlay>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default GallerySection;