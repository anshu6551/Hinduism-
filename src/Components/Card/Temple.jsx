// import React from 'react';
// import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';

// // Single TempleCard Component
// const TempleCard = ({ temple }) => {
//   return (
    
//           <Card 
//             sx={{ 
//               display: 'flex', 
//               flexDirection: { xs: 'column', md: 'row' }, 
//               marginBottom: 4, 
//               boxShadow: 3,
//               maxWidth: 500,  // Set max width for smaller card size
//               margin: '0 auto' // Center the card on the page
//             }}
//           >
//             <Grid container>
//               {/* Temple Image */}
//               <Grid item xs={12} md={6}>
//                 <CardMedia
//                   component="img"
//                   image={temple.imageUrl}
//                   alt={temple.name}
//                   sx={{ 
//                     height: "80%", // Adjust the height for smaller image
//                     width: '100%', 
//                     objectFit: 'cover', 
//                     borderRadius: '8px 0 0 8px' 
//                   }}
//                 />
//               </Grid>
      
//               {/* Temple Details */}
//               <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
//                 <CardContent sx={{ padding: 2 }}>
//                   <Typography variant="h6" gutterBottom>{temple.name}</Typography> {/* Smaller font size */}
//                   <Typography variant="body2" color="text.secondary">{temple.description}</Typography>
//                 </CardContent>
//               </Grid>
//             </Grid>
//           </Card>
       
//   );
// };

// // Main TemplePage Component
// const TemplePage = () => {
//   // List of famous temples with image URLs and descriptions
//   const temples = [
//     {
//       name: 'Kedarnath Temple',
//       imageUrl: 'https://i.pinimg.com/originals/07/36/6b/07366b29794c563225bbdb9253aac76d.jpg',
//       description: 'The Kedarnath Temple is a renowned Hindu temple dedicated to Lord Shiva, situated in the Himalayas of Uttarakhand, India. It is one of the 12 Jyotirlingas.',
//     },
//     {
//       name: 'Tirupati balaji',
//       imageUrl: 'https://media.istockphoto.com/id/937165548/photo/tirumala-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=wqZdwm5q8EZhvIhiUQRGL8jPvIcDbhazqfIX6IheYQY=',
//       description: 'Located in Andhra Pradesh, the Tirupati Balaji Temple is one of the most visited pilgrimage centers, dedicated to Lord Venkateswara, an incarnation of Vishnu.',
//     },
//     {
//       name: 'Golden Temple',
//       imageUrl: 'https://media.istockphoto.com/id/535570117/photo/golden-temple-in-amritsar-punjab-india.jpg?s=612x612&w=0&k=20&c=TAgZK64Qz6YsljOK1rXZrrW1u1YSlb9e_YBEmm2pfBw=',
//       description: 'Also known as Harmandir Sahib, this temple in Amritsar, Punjab, is a spiritual site of Sikhism and a symbol of human brotherhood and equality.',
//     },
//     // Add more temples as needed
//   ];

//   return (
//     <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
//       <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginBottom: 5 }}>
//         Famous Temples of India
//       </Typography>
      
//       {temples.map((temple, index) => (
//         <TempleCard key={index} temple={temple} />
//       ))}
//     </Box>
//   );
// };

// export default TemplePage;


import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Container } from '@mui/material';

// Single TempleCard Component
const TempleCard = ({ temple }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: 'auto', 
        boxShadow: 3,
        borderRadius: 2 ,
        background: 'linear-gradient(to left, darkred, #FFC107)',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={temple.imageUrl}
        alt={temple.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {temple.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {temple.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Main TemplePage Component
const TemplePage = () => {
  // List of famous temples with image URLs and descriptions
  const temples = [
    {
      name: 'Kedarnath Temple',
      imageUrl: 'https://i.pinimg.com/originals/07/36/6b/07366b29794c563225bbdb9253aac76d.jpg',
      description: 'The Kedarnath Temple is dedicated to Lord Shiva, situated in Uttarakhand, India, and is one of the 12 Jyotirlingas.',
    },
    {
      name: 'Tirupati Balaji',
      imageUrl: 'https://media.istockphoto.com/id/937165548/photo/tirumala-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=wqZdwm5q8EZhvIhiUQRGL8jPvIcDbhazqfIX6IheYQY=',
      description: 'A major pilgrimage site, Tirupati Balaji Temple in Andhra Pradesh is devoted to Lord Venkateswara, an incarnation of Vishnu.',
    },
    {
      name: 'Golden Temple',
      imageUrl: 'https://media.istockphoto.com/id/535570117/photo/golden-temple-in-amritsar-punjab-india.jpg?s=612x612&w=0&k=20&c=TAgZK64Qz6YsljOK1rXZrrW1u1YSlb9e_YBEmm2pfBw=',
      description: 'Also known as Harmandir Sahib, located in Amritsar, Punjab, this temple is a spiritual symbol of equality and human unity.',
    },
    // Add more temples as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Famous Temples of India
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" paragraph>
        Explore some of the most revered temples of India, known for their architectural grandeur and spiritual significance.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {temples.map((temple, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TempleCard temple={temple} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TemplePage;