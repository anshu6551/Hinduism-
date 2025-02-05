import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  festivals: [],
  selectedFestival: null,
  loading: false,
  error: null,
};

//fetchFestival
export const fetchFestivals = createAsyncThunk('festivals/fetchFestivals', async () => {
  const response = await axios.get('http://localhost:1000/festivals');
  return response.data;
});

//AddFestival
export const addFestivals = createAsyncThunk('festivals/addFestival', async (newFestival) => {
  const response = await axios.post('http://localhost:1000/festivals', newFestival);
  return response.data;
});


  
//Fetch SingleFestival Data
export const getSingleFestivalData = createAsyncThunk('feativals/singleFestival', async (id)=>{
  const response = await axios.get(`http://localhost:1000/festivals/${id}`)
    return response?.data;
  
})

//EditFestival


export const editFestival = createAsyncThunk('festivals/editFestival', async ({ id, festivalData }) => {
  const response = await axios.put(`http://localhost:1000/festivals/${id}`, festivalData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data; // Return the updated festival data
});





//Delete
export const deleteFestivalData = createAsyncThunk('feativals/deleteFestival', async (id)=>{
  console.log("id", id)
  const response = await axios.delete(`http://localhost:1000/festivals/${id}`)
    return response?.data;
    
  
})


const festivalsSlice = createSlice({
  name: 'festivals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //fetchFestival
      .addCase(fetchFestivals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFestivals.fulfilled, (state, action) => {
        state.loading = false;
        state.festivals = action.payload;
      })
      .addCase(fetchFestivals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  
      //addFestival
      .addCase(addFestivals.fulfilled, (state, action) => {
        state.festivals.push(action.payload);
      })

      //get Single Festival Data
      .addCase(getSingleFestivalData.pending,(state)=>{
        state.loading=true;
      })
      .addCase(getSingleFestivalData.fulfilled,(state,action)=>{
        state.loading= false;
        state.selectedFestival =action.payload
      })
      .addCase(getSingleFestivalData.rejected,(state,action)=>{
        state.loading=true;
        state.error = action.error.message
      })


      //Edit Festival


      .addCase(editFestival.pending, (state) => {
        state.loading = true;
      })
      .addCase(editFestival.fulfilled, (state, action) => {
        state.loading = false;
        
      })
      .addCase(editFestival.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //Delete Data
      .addCase(deleteFestivalData.pending,(state)=>{
        state.loading=true;
      })
      .addCase(deleteFestivalData.fulfilled,(state,action)=>{
        state.loading= false;
        state.festivals =action.payload
        // console.log ("a",action.payload)
      })
      .addCase(deleteFestivalData.rejected,(state,action)=>{
        state.loading=true;
        state.error = action.error.message
      })



  }
});

export default festivalsSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async action to fetch festivals
// export const fetchFestivals = createAsyncThunk('festivals/fetchFestivals', async () => {
//   const response = await axios.get('http://localhost:1000/festivals');
//   return response.data;
// });

// // Async action to add a festival
// export const addFestival = createAsyncThunk('festivals/addFestival', async (festivalData) => {
//   const response = await axios.post('http://localhost:1000/festivals', festivalData);
//   return response.data;
// });

// const festivalSlice = createSlice({
//   name: 'festivals',
//   initialState: {
//     festivals: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFestivals.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchFestivals.fulfilled, (state, action) => {
//         state.festivals = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchFestivals.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       })
//       .addCase(addFestival.fulfilled, (state, action) => {
//         state.festivals.push(action.payload);
//       });
//   },
// });

// export default festivalSlice.reducer;
