import React from 'react'
import { useFetchJobs } from '../hooks/useFetchJobs'
import {Box, Grid, Typography} from "@mui/material";
import JobCard from '../components/atoms/JobCard';

const HomePage = () => {

  const {data, isFetchingData} = useFetchJobs();

  return (
    <Box sx={{ flexGrow: 1, p: '25px' }}>
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.map((item, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
          <JobCard key={item?.jdUid} jobDetail={item}/>
          </Grid>
        ))}
      </Grid>
      {isFetchingData ? <Typography sx={{marginTop: '8px'}}>Loading...</Typography>: null}
    </Box>
  )
}

export default HomePage
