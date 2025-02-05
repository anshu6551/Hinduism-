import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Paper, Avatar, Typography, Grid, IconButton } from "@mui/material";
import { get_profile } from "../Redux/Slice/Slice";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Profilepage = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((s) => s.contents);

  useEffect(() => {
    dispatch(get_profile());
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ mt: 7, mb: 7 }}>
      <Paper elevation={3} sx={{ p: 4,  borderRadius: 4, background: "linear-gradient(to left, darkred, #FFC107)"}}>
        <Grid container spacing={3}>
          {/* Left Side (Image) */}
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${profile?.profile_pic}`}
                alt={profile?.first_name}
                sx={{ width: 200, height: 200, border: "4px solid #fff" }}
              />
            </Box>
            <Typography variant="h4" align="center" color="white" sx={{ mt: 2 }}>
              {profile?.first_name} {profile?.last_name}
            </Typography>
            <Typography variant="h6" align="center" color="red">
              Web Developer
            </Typography>
          </Grid>

          {/* Right Side (Profile Details) */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" color="white" gutterBottom>                   
              Profile Details
            </Typography>
            <Box sx={{ color: "white" }}>
              <Typography variant="body1" gutterBottom>
                <strong>Name:</strong> {profile?.first_name} {profile?.last_name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Age:</strong> 22
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Mobile:</strong> +91 XXXXXXXXXX
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {profile?.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Address:</strong> 123 Main St, Anytown, USA
              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography align="center" color="white"  sx={{ mt: 3, fontSize: '20px' }}>
          Made with ❤ by Anshu
        </Typography>
      </Paper>
    </Container>
  );
};

export default Profilepage;
