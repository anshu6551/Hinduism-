import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutDes = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Ganesh pooja
      </Typography>
      
      <Box
      
        sx={{
          height: '400px',
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1682090840373-b06b5237ae74?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D")', // Replace with your banner image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          boxShadow: 3,
          marginBottom: 4,
        }}
      />

     
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
    About Ganesh Pooja
      </Typography>

      
      <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
        Here you can provide a detailed description about your organization, team, or the topic of interest.
        Include any additional information that will help visitors understand more about what you do and
        your values. Feel free to elaborate on your mission, vision, and any significant achievements or projects.
      </Typography>

      
      <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
        You can add more sections here, such as testimonials, case studies, or future plans. Make sure to provide
        engaging and valuable content that resonates with your audience and reflects the core of your organization.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, similique perspiciatis. Cupiditate soluta velit aliquam sapiente atque tempore ab molestias quam vitae exercitationem eaque, modi harum itaque esse odio repellat?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quibusdam quis cum, mollitia alias officiis sed illum odit optio quisquam nam, quaerat accusamus ducimus sunt neque ipsa temporibus ex fugit!
      </Typography>
    </Box>
  );
};

export default AboutDes;