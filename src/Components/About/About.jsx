// import React from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import AboutDes from './AboutDes';

// const About = () => {
//   const navigate = useNavigate();

//   const handleLearnMoreClick = () => {
//     navigate('/aboutdes'); 
//   };

//   return (
    
//     <Box sx={{ flexGrow: 1, padding: 4 }}>
//       <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>About</Typography>
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src="https://plus.unsplash.com/premium_photo-1682090840373-b06b5237ae74?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
//             alt="About Us"
//             sx={{
//               width: '100%',
//               borderRadius: 2,
//               boxShadow: 3,
//               objectFit: 'cover',
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//             Ganesh pooja
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 2 }}>
//             We are a dedicated team committed to delivering exceptional service and innovative solutions.
//             Our journey began with a passion for excellence and a drive to make a difference. We pride ourselves
//             on our ability to combine creativity with technical expertise to achieve outstanding results.
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 3 }}>
//             Our mission is to create value for our clients and make a positive impact in the industry through
//             our unique approach and unwavering dedication.
//           </Typography>
//           <Link component={AboutDes} to="/aboutdes" style={{textDecoration: 'none'}}>
//           <Button
//             variant="contained"
//             sx={{backgroundColor: 'red', '&:hover':{backgroundColor: 'darked'}}}
//             onClick={handleLearnMoreClick}
            
//           >
//             Learn More
//           </Button>
//           </Link>
//         </Grid>
//       </Grid>


//       <Grid container spacing={4} alignItems="center">
        
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//             Holi
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 2 }}>
//             We are a dedicated team committed to delivering exceptional service and innovative solutions.
//             Our journey began with a passion for excellence and a drive to make a difference. We pride ourselves
//             on our ability to combine creativity with technical expertise to achieve outstanding results.
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 3 }}>
//             Our mission is to create value for our clients and make a positive impact in the industry through
//             our unique approach and unwavering dedication.
//           </Typography>
//           <Link component={AboutDes} to="/aboutdes" style={{textDecoration: 'none'}}>
//           <Button
//             variant="contained"
//             sx={{backgroundColor: 'red', '&:hover':{backgroundColor: 'darked'}}}
//             onClick={handleLearnMoreClick}
            
//           >
//             Learn More
//           </Button>
//           </Link>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1553173937-53ab846b1365?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//             alt="About Us"
//             sx={{
//               width: '100%',
//               height:'400px',
//               borderRadius: 2,
//               boxShadow: 3,
//               objectFit: 'cover',
//             }}
//           />
//         </Grid>
//       </Grid>


//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1592843997881-cab3860b1067?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
//             alt="About Us"
//             sx={{
//               width: '100%',
//               borderRadius: 2,
//               boxShadow: 3,
//               objectFit: 'cover',
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//             Diwali
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 2 }}>
//             We are a dedicated team committed to delivering exceptional service and innovative solutions.
//             Our journey began with a passion for excellence and a drive to make a difference. We pride ourselves
//             on our ability to combine creativity with technical expertise to achieve outstanding results.
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 3 }}>
//             Our mission is to create value for our clients and make a positive impact in the industry through
//             our unique approach and unwavering dedication.
//           </Typography>
//           <Link component={AboutDes} to="/aboutdes" style={{textDecoration: 'none'}}>
//           <Button
//             variant="contained"
//             sx={{backgroundColor: 'red', '&:hover':{backgroundColor: 'darked'}}}
//             onClick={handleLearnMoreClick}
            
//           >
//             Learn More
//           </Button>
//           </Link>
//         </Grid>
//       </Grid>


//       <Grid container spacing={4} alignItems="center">
        
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//             Chath Pooja
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 2 }}>
//             We are a dedicated team committed to delivering exceptional service and innovative solutions.
//             Our journey began with a passion for excellence and a drive to make a difference. We pride ourselves
//             on our ability to combine creativity with technical expertise to achieve outstanding results.
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 3 }}>
//             Our mission is to create value for our clients and make a positive impact in the industry through
//             our unique approach and unwavering dedication.
//           </Typography>
//           <Link component={AboutDes} to="/aboutdes" style={{textDecoration: 'none'}}>
//           <Button
//             variant="contained"
//             sx={{backgroundColor: 'red', '&:hover':{backgroundColor: 'darked'}}}
//             onClick={handleLearnMoreClick}
           
//           >
//             Learn More
//           </Button>
//           </Link>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src="https://images.pexels.com/photos/19267023/pexels-photo-19267023/free-photo-of-colorful-rituals-of-chhath.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//             alt="About Us"
//             sx={{
//               width: '100%',
//               borderRadius: 2,
//               boxShadow: 3,
//               objectFit: 'cover',
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>

    
//   );
// };

// export default About;





import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AboutDes from './AboutDes';

const About = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/aboutdes'); 
  };

  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 2, md: 4 } }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: { xs: 2, md: 4 },
          fontSize: { xs: '1.8rem', md: '2.8rem' },
          textAlign: 'center'
        }}
      >
        About
      </Typography>

      {/* Section 1 */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://plus.unsplash.com/premium_photo-1682090840373-b06b5237ae74?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Ganesh Pooja"
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
              maxHeight: { xs: '300px', md: '500px' },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Ganesh Pooja
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            We are a dedicated team committed to delivering exceptional service and innovative solutions.
            Our journey began with a passion for excellence and a drive to make a difference. We pride ourselves
            on our ability to combine creativity with technical expertise to achieve outstanding results.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Our mission is to create value for our clients and make a positive impact in the industry through
            our unique approach and unwavering dedication.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* Section 2 */}
      <Grid container spacing={4} alignItems="center" sx={{ marginTop: { xs: 4, md: 6 } }}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Holi
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Holi is a festival of colors celebrated across India with vibrant energy and joy. People come together
            to throw colors at one another, sing, and dance in the streets.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Our goal is to embrace the joy of Holi and bring communities closer through the celebration of this
            beautiful festival.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1553173937-53ab846b1365?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Holi"
            sx={{
              width: '100%',
              height: { xs: '300px', md: '400px' },
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>

      {/* Section 3 */}
      <Grid container spacing={4} alignItems="center" sx={{ marginTop: { xs: 4, md: 6 } }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1592843997881-cab3860b1067?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Diwali"
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
              maxHeight: { xs: '300px', md: '500px' },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Diwali
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Diwali, the festival of lights, symbolizes the victory of light over darkness and good over evil.
            It is celebrated with great enthusiasm by lighting lamps, bursting fireworks, and sharing sweets.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Through Diwali, we aim to spread the message of positivity and unity in our community.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* Section 4 */}
      <Grid container spacing={4} alignItems="center" sx={{ marginTop: { xs: 4, md: 6 } }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Chath Pooja
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Chhath Puja is a significant Hindu festival dedicated to the Sun God. People worship the sun and
            take a holy dip in rivers to seek blessings for health, wealth, and prosperity.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Our celebration of Chhath Puja focuses on embracing nature's beauty and thanking the Sun God for 
            sustaining life on Earth.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.pexels.com/photos/19267023/pexels-photo-19267023/free-photo-of-colorful-rituals-of-chhath.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Chhath Pooja"
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              objectFit: 'cover',
              maxHeight: { xs: '300px', md: '500px' },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;