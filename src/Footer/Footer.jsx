


// import React from 'react';
// import { Box, Typography, Link, Container, Grid } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         background: 'linear-gradient(to right, darkred, #FFC107)',
//         color: 'black',
//         padding: '20px 0',
//         marginTop: 'auto',
//         height: "200px"
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Column 1: About */}
//           <Grid item xs={12} sm={4} marginTop={4}>
//             <Typography variant="h6" color="inherit" gutterBottom>
//               About Us
//             </Typography>
//             <Typography variant="body2">
//               We are a leading company providing the best services to our customers. Our aim is to deliver high-quality and innovative solutions.
//             </Typography>
//           </Grid>

//           {/* Column 2: Quick Links */}
//           <Grid item xs={12} sm={4} marginTop={4}>
//             <Typography variant="h6" color="inherit" gutterBottom>
//               Quick Links
//             </Typography>
//             <Link href="/" color="inherit" underline="hover" variant="body2">
//               Home
//             </Link>
//             <br />
//             <Link href="/about" color="inherit" underline="hover" variant="body2">
//               About Us
//             </Link>
//             <br />
//             <Link href="/blog" color="inherit" underline="hover" variant="body2">
//               Blog
//             </Link>
//             <br />
//             <Link href="/contact" color="inherit" underline="hover" variant="body2">
//               Contact
//             </Link>
//           </Grid>

//           {/* Column 3: Contact */}
//           <Grid item xs={12} sm={4} marginTop={4}>
//             <Typography variant="h6" color="inherit" gutterBottom>
//               Contact Us
//             </Typography>
//             <Typography variant="body2">
//               Email: info@example.com
//             </Typography>
//             <Typography variant="body2">
//               Phone: +123 456 7890
//             </Typography>
//             <Typography variant="body2">
//               Address: 123 Main St, Anytown, USA
//             </Typography>
//           </Grid>
//         </Grid>

//         <Box textAlign="center" mt={5}>
//           <Typography variant="body2" color="inherit">
//             © 2024 Your Company. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, darkred, #FFC107)',
        color: 'white',
      
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" color="inherit" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              We are a leading company providing the best services to our customers. Our aim is to deliver high-quality and innovative solutions.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" color="inherit" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" variant="body1">
              Home
            </Link>
            <br />
            <Link href="/about" color="inherit" underline="hover" variant="body1">
              About Us
            </Link>
            <br />
            <Link href="/blog" color="inherit" underline="hover" variant="body1">
              Blog
            </Link>
            <br />
            <Link href="/contact" color="inherit" underline="hover" variant="body1">
              Contact
            </Link>
          </Grid>

          {/* Column 3: Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="inherit" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              Email: info@example.com
            </Typography>
            <Typography variant="body1">
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body1">
              Address: 123 Main St, Anytown, USA
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={5}>
          <Typography variant="body1" color="inherit">
            © 2024 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;