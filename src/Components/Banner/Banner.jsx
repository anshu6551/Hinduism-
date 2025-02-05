// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';

// const Banner = () => {
//   return (
//     <Box
//       sx={{
        
//         background: 'linear-gradient(to left,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://coreldrawdesign.com/resources/previews/preview-diwali-festival-beautiful-background-image-1634984259.jpg")', 
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         height:"240px",
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         textAlign: 'center',
//         position: 'relative',
//         overflow: 'hidden',
//         padding: '200px',
       
//         '::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: 'inherit',
//           backgroundSize: 'inherit',
//           backgroundPosition: 'inherit',
//           filter: 'blur(10px)', 
//           zIndex: -1,
//           opacity: 0.7, 
//         },
//       }}
//     >
      
//       <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', fontFamily: 'serif' }}>
//         Embrace the Essence of Hindu Culture
//       </Typography>
//       <Typography
//         variant="h6"
//         component="p"
//         sx={{ marginBottom: 3, fontSize: '1.2rem', fontFamily: 'serif', maxWidth: '600px' }}
//       >
//         Discover the rich traditions, spiritual wisdom, and timeless heritage that have shaped
//         humanity for millennia.
//       </Typography>
//       <Button
//         variant="contained"
//         sx={{backgroundColor: 'red', '&:hover':{backgroundColor: 'darked'}}}
        
//       >
//         Explore Now
//       </Button>
//     </Box>
//   );
// };

// export default Banner;


import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to left,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://coreldrawdesign.com/resources/previews/preview-diwali-festival-beautiful-background-image-1634984259.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" }, // Responsive height
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: { xs: '20px', sm: '40px', md: '60px', lg: '80px' }, // Responsive padding

        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'inherit',
          backgroundSize: 'inherit',
          backgroundPosition: 'inherit',
          filter: 'blur(10px)', 
          zIndex: -1,
          opacity: 0.7, 
        },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'serif',
          fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem', lg: '4rem' }, // Responsive font size
        }}
      >
        Embrace the Essence of Hindu Culture
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          marginBottom: 3,
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
          fontFamily: 'serif',
          maxWidth: '600px',
        }}
      >
        Discover the rich traditions, spiritual wisdom, and timeless heritage that have shaped
        humanity for millennia.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'red',
          '&:hover': { backgroundColor: 'darkred' },
          fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, // Responsive button size
          padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }, // Responsive padding
        }}
      >
        Explore Now
      </Button>
    </Box>
  );
};

export default Banner;

