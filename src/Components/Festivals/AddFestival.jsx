import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Button, Box, Alert, InputLabel, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { addFestivals } from '../../Redux/Slice/festivalsSlice';

const AddFestivals = () => {
  const dispatch = useDispatch();
  const { festivals } = useSelector((state) => state.festival);
  const [formData, setFormData] = useState({ name: '', image: '', description: '',season:'', religion:''});
  const [duplicateError, setDuplicateError] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate()

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result); // Set base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicate festival
    const isDuplicate = festivals?.some(festival => festival.name === formData.name);
    if (isDuplicate) {
      setDuplicateError(true);
      return;
    }

    setDuplicateError(false);

    // Use uploaded file's base64 data or URL
    const imageData = imageFile || formData.image;

    dispatch(addFestivals({ ...formData, image: imageData }));
    setFormData({ name: '', image: '',price: '', description: '',season:'' });
    setImageFile(null);
    navigate('/festivalList')
  };

  return (
    <Container sx={{marginTop:"50px",marginBottom:"60px"}}>
<Grid container sx={{justifyContent:"center"}}>
 <Grid item md={6}>
   <Box
   component="form"
   sx={{border:"1px solid black",minHeight:"100px",marginTop:"0px",padding:"15px",borderRadius:"8px"}}
   onSubmit={handleSubmit}
   >
    <h1 style={{textAlign:"center"}}>Add Festival!</h1>
    <Box sx={{marginBottom:"5px"}}>
     
      <TextField  label="Festival Name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          sx={{ marginBottom: 2 }}
      >      
      </TextField>
    </Box>
    <Box sx={{marginBottom:"5px"}}>
     
      <TextField  label="Season"
          variant="outlined"
          fullWidth
          required
          value={formData.season}
          onChange={(e) => setFormData({ ...formData, season: e.target.value })}
          sx={{ marginBottom: 2 }}
      >      
      </TextField>
    </Box>
    1
    <Box sx={{marginBottom:"5px"}}>
   
      <TextField  
      
          variant="outlined"
          fullWidth
          required
          type="file"
          
          onChange={handleFileChange}
          sx={{ marginBottom: 2 }}
      >      
      </TextField>
    </Box>

    
    <Box sx={{marginBottom:"5px"}}>      
      <TextField   label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          sx={{ marginBottom: 2 }}
      >      
              </TextField>
    </Box>
   
    {duplicateError && <Alert severity="error">Festival already added!</Alert>}
        <Button type="submit" variant="contained" color="primary">
          Add Festival
        </Button>
    </Box>
    </Grid>
    </Grid>
    </Container>    
  );
};

export default AddFestivals;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// // import { addFestival } from '../../Redux/Slice/festivalsSlice';
// import { TextField, Button, Box } from '@mui/material';
// import { addFestival } from '../../Redux/Slice/festivalsSlice';

// const AddFestivalForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     season: '',
//     religion: '',
//     description: '',
//   });

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addFestival(formData));
//     setFormData({ name: '', season: '', religion: '', description: '' });
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
//       <TextField
//         name="name"
//         label="Festival Name"
//         value={formData.name}
//         onChange={handleChange}
//         fullWidth
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         name="season"
//         label="Season"
//         value={formData.season}
//         onChange={handleChange}
//         fullWidth
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         name="religion"
//         label="Religion"
//         value={formData.religion}
//         onChange={handleChange}
//         fullWidth
//         sx={{ mb: 2 }}
//       />
//       <TextField
//         name="description"
//         label="Description"
//         value={formData.description}
//         onChange={handleChange}
//         multiline
//         rows={4}
//         fullWidth
//         sx={{ mb: 2 }}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Add Festival
//       </Button>
//     </Box>
//   );
// };

// export default AddFestivalForm;
