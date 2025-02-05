import React, { useEffect, useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFestivalData, fetchFestivals } from "../../Redux/Slice/festivalsSlice";

const FestivalList = () => {

  const [data,setData]= useState([])
  const dispatch = useDispatch();
  const { festivals } = useSelector((state) => state.festival);
  // console.log("fff",festivals)
  const [search, setSearch] = useState('');
  const [loadMore, setLoadMore] = useState(4);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 4);
  };


 const onhandleDelete = (id) => {
   dispatch(deleteFestivalData(id)).then(() => {
   //Fetch festivals again after deletion
        dispatch(fetchFestivals());
   });
 };

  useEffect(() => {
    dispatch(fetchFestivals());
  }, [dispatch]);


  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <TextField
          sx={{ margin: "25px 5px" }}
          placeholder="Search your festival here..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Link to='/addFestival' >
          <Button sx={{ margin: "35px 5px" }} variant='contained'>Add New Festivals</Button>
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Array.isArray(festivals) && festivals?.filter((item) => {

          if (search === "") {
            return item;
          } else if (item.name?.toLowerCase()?.includes(search)) {
            return item;
          }
          return false;
        })


          .slice(0, loadMore)
          .map((data) => (
            
            <Card 
              sx={{ 
                width: "300px", 
                m: 2, 
                borderRadius: "15px", 
                overflow: "hidden", 
                boxShadow: 3, 
                position: "relative",
              }} 
              key={data.id}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ height: "400px", filter: "brightness(0.7)" }}
                  component={"img"}
                  src={data.image}
                  alt={data.name}
                />
                <CardContent 
                  sx={{ 
                    position: "absolute", 
                    bottom: 0, 
                    color: "white", 
                    width: "100%", 
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "0px 5px 8px 4px",
                    background: "rgba(0,0,0,0.5)",
                  }}
                >
                  <Typography variant="h4" component="div" fontWeight="bold">
                    {data.name}
                  </Typography>
                  <Box sx={{ height: "2px", background: "#FFD700", width: "50px", margin: "10px auto" }} />
                  <Typography variant="body2" >

                    {data.season}
                  </Typography>
                  {console.log("id",data.id)}
                  <Box sx={{ marginTop: "15px" ,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                   }}>
                    <Link to={`/festivalDetails/${data.id}`}>
                    
                    
                    <Button variant="contained"
                    sx={{ 
                      backgroundColor: "red", 
                      color: "yellow", 
                      fontWeight: "bold", 
                    }}>
                      Read More
                      </Button>
                      </Link>

                
                    <Button   variant="contained" type="submit"
                     sx={{ 
                          backgroundColor: "red", 
                          color: "yellow", 
                          fontWeight: "bold", 
                        }} onClick={()=>onhandleDelete(data.id)}>
                    Delete
                        </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
        <Button variant="text" onClick={handleLoadMore}>
        View more
        </Button>
      </Box>
    </>
  );
};

export default FestivalList;






// import React, { useEffect, useState } from "react";
// import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, TextField, CircularProgress } from "@mui/material";
// import Button from "@mui/material/Button";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteFestivalData, fetchFestivals } from "../../Redux/Slice/festivalsSlice";

// const FestivalList = () => {
//   const [search, setSearch] = useState('');
//   const [loadMore, setLoadMore] = useState(4); 

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { festivals, loading } = useSelector((state) => state.festival);

//   const onhandleDelete = (id) => {
//    dispatch(deleteFestivalData(id)).then(() => {
//   //  Fetch festivals again after deletion
//         dispatch(fetchFestivals());
//    });
//  };

//   useEffect(() => {
//     dispatch(fetchFestivals());
//   }, [dispatch]);

//   const handleLoadMore = () => {
//     setLoadMore(loadMore + 4); // Load 4 more festivals
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value.toLowerCase());
//   };

//   if (loading) {
//     return <CircularProgress sx={{ display: 'block', margin: '50px auto' }} />;

    
//   }

//   return (
//     <>
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
//         <TextField
//           sx={{ margin: "25px 10px", width: "40%" }}
//           placeholder="Search your festival..."
//           onChange={handleSearch}
//           variant="outlined"
//         />
//         <Link to='/addFestival'>
//           <Button variant="contained" sx={{ margin: "25px 5px" }}>
//             Add New Festival
//           </Button>
//         </Link>
//       </Box>

//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {Array.isArray(festivals) && festivals
//           ?.filter((festival) => {
//             if (search === "") {
//               return festival;
//             } else if (festival.name?.toLowerCase().includes(search)) {
//               return festival;
//             }
//             return false;
//           })
//           .slice(0, loadMore)
//           .map((festival) => (
//             <Card
//               key={festival.id}
//               sx={{
//                 width: "300px",
//                 m: 2,
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 boxShadow: 3
//               }}
//               onClick={() => navigate(`/festivalList/festivalDetails/${festival.id}`)} >

//               <Link  style={{ textDecoration: 'none' }}>
//          <Button   variant="contained" type="submit"
//                      sx={{ 
//                           backgroundColor: "red", 
//                           color: "yellow", 
//                           fontWeight: "bold", 
//                         }} onClick={()=>onhandleDelete(festivals.id)}>
//                     Delete
//                         </Button>
//          </Link>
            
//               <CardActionArea>
//                 <CardMedia
//                   sx={{ height: "300px", filter: "brightness(0.7)" }}
//                   component="img"
//                   image={festival.image}
//                   alt={festival.name}
//                 />
//                 <CardContent sx={{ textAlign: "center", color: "#fff", background: "black" }}>
//                   <Typography variant="h5" fontWeight="bold">
//                     {festival.name}
//                   </Typography>
//                   <Typography variant="h6">
//                     Season: {festival.season}
//                   </Typography>
//                   <Typography variant="h6">
//                     Religion: {festival.religion}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
// ))}


//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
//         {/* <Button variant="contained" 
//          sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
//         onClick={handleLoadMore} disabled={loadMore >= festivals.length}>
//           Load More
//         </Button> */}
         

//         <Button variant="contained" sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darked' } }} 
//          onClick={handleLoadMore} disabled={loadMore >= festivals.length}>
//           Load More
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default FestivalList;