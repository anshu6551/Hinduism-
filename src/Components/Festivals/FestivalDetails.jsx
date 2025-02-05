


import React, { useEffect } from "react";
import { Box, Typography, CardMedia, CircularProgress, Button, Grid, Card, CardContent } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleFestivalData } from "../../Redux/Slice/festivalsSlice";

const FestivalDetails = () => {
  const { id } = useParams(); // Get festival ID from URL
  console.log("iddd",id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedFestival, loading } = useSelector((state) => state.festival);

  useEffect(() => {
    dispatch(getSingleFestivalData(id)); // Fetch the specific festival by ID
  }, [dispatch, id]);

  if (loading) {
    return <CircularProgress sx={{ display: 'block', margin: '50px auto' }} />;
  }

  if (!selectedFestival) {
    return <Typography variant="h5">Festival not found</Typography>;
  }

  return (
    <Box sx={{ mt: 4, px: 2 }}>
    
        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Card
          
            sx={{
              padding: 3,
              borderRadius: "15px",
              boxShadow: 3,
              // backgroundColor: "#f5f5f5",
              background: "linear-gradient(to left, darkred, #FFC107)",
              marginBottom: "25px"
            }}
            
          >
            <CardMedia
            component="img"
            src={selectedFestival.image}
            alt={selectedFestival.name}
            sx={{
              // width: "100%",
              height: "800px",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
            <CardContent>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {selectedFestival.name}
              </Typography>

              <Typography variant="h5" color="text.secondary" gutterBottom>
                Season: {selectedFestival.season}
              </Typography>

              <Typography
                variant="body1"
                sx={{ mt: 2, textAlign: "justify", lineHeight: 1.8 }}
              >
                {selectedFestival.description}
              </Typography>

             

              <Button
                sx={{ mt: 4 ,background : "red", justifyContent: "flex-start", textAlign: "left"}}
                variant="contained"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </CardContent>
          </Card>
        </Grid>
    
    </Box>
  );
};

export default FestivalDetails;