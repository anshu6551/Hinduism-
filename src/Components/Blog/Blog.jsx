import React from 'react';
import { Container, Grid, Paper, Typography, Box, Card, CardMedia, CardContent, Button } from '@mui/material';

const blogs = [
  {
    title: "The Significance of Diwali",
    description: "Diwali, also known as Deepavali, is one of the most important festivals in Hindu culture. It signifies the victory of light over darkness and good over evil.",
    videoUrl: "https://www.youtube.com/embed/your-video-id"
  },
  {
    title: "Understanding Vedic Astrology",
    description: "Vedic astrology is a traditional Hindu astrology system that originated in ancient India. It is deeply rooted in the Vedic texts and offers insights into life and destiny.",
    videoUrl: "https://www.youtube.com/embed/your-video-id"
  }
  
];

const BlogSection = () => {
  return (
    <Container>
        <Box sx={{ flexGrow: 1, padding: 6 }}>
        
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Blog</Typography>
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3}>
              <Card>
                <CardMedia
                  component="iframe"
                  src={blog.videoUrl}
                  title={blog.title}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {blog.description}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" sx={{backgroundColor: 'red', '&:hover':{backgroundColor: 'darked'}}} href={blog.videoUrl} target="_blank">
                      Watch Video
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Container>
    
  );
};

export default BlogSection;