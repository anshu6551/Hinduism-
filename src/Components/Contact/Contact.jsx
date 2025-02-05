// import React, { useState } from "react";
// import { TextField, Button, Grid, Typography, Container } from "@mui/material";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to an API or display a success message)
//     console.log("Form submitted", formData);
//     // Reset form
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "50px" }}>
//       <Typography variant="h4" component="h1" align="center" gutterBottom>
//         Contact Us
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               multiline
//               rows={4}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} style={{ textAlign: "center" }}>
//             <Button variant="contained" color="primary" type="submit">
//               Send Message
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default Contact;





import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container,  } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url("https://t3.ftcdn.net/jpg/08/42/26/94/240_F_842269422_yq7LENwj4Ped7lvSRjXTJ7JRN0oHwgiA.jpg")', // Replace with your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {    
    backdropFilter: "blur(15px)", 
    padding: "20px",
    borderRadius: "10px",   
    boxShadow: "8px 8px 8px 8px"
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted", formData);
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <div className={classes.formContainer}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;