import React from 'react'
import Banner from '../Banner/Banner'
import AboutDesigner from '../About/About'
import { Typography } from '@mui/material'
import BlogSection from '../Blog/Blog'
import GallerySection from '../Gallery/Galery'
import FestivalList from '../Festivals/FestivalList'
import AddFestival from '../Festivals/AddFestival'
import Cards from '../Card/Card'
import TemplePage from '../Card/Temple'


const Home = () => {
  return (
    <div>
      <Banner/>
      <br/>
      {/* <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>About</Typography> */}
      {/* <AboutDesigner/> */}
      <br/>
     <Cards/>
      
      <br/>

      <TemplePage/>
      <br/>
      {/* <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Blog</Typography> */}
<BlogSection/>
<br/>
{/* <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Gallery</Typography> */}
<GallerySection/>
<br/>
    </div>
  )
}

export default Home
