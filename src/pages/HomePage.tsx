import React from 'react'
import { useFetchJobs } from '../hooks/useFetchJobs'
import {Box, Grid, Typography, Stack, TextField} from "@mui/material";
import JobCard from '../components/atoms/JobCard';
import SimpleSelect from '../components/atoms/SimpleSelect/SimpleSelect';

const HomePage = () => {

  const {data, isFetchingData} = useFetchJobs();

  const ROLES = [{label :'Frontend', value: 'frontend'}, {label: 'Backend', value: 'backend'}];
  const LOCATION = [{label :'Mumbai', value: 'mumbai'}, {label: 'Delhi', value: 'delhi'}, {label: 'Bangalore', value: 'bangalore'}];
  const MIN_BASE_PAY = [{label: '0L', value: 0}, {label: '10L', value: 10}, {label: '20L', value: 20}, {label: '30L', value: 30}, {label: '40L', value: 40}, {label: '50L', value: 50}, {label: '60L', value: 60}, {label: '70L', value: 70}]

  return (
    <Box sx={{ flexGrow: 1, p: '25px', width: '100%' }}>
      <Stack spacing={2} width='100%' mb={2} sx={{display: 'flex', flexDirection: 'row'}}>
      <SimpleSelect placeholder='Roles' list={ROLES} width='140px' onChange={() => {}}/>
      <SimpleSelect placeholder='Experience' width='140px'  list={Array.from({length: 10}, (_v, i) => ({label: i+1, value: i+1}))} onChange={() => {}}/>
      <SimpleSelect placeholder='Location' width='140px'  list={LOCATION} onChange={() => {}}/>
      <SimpleSelect placeholder='Min Base Pay' width='140px'  list={MIN_BASE_PAY} onChange={() => {}}/>
      <TextField placeholder='Search companies'/>
      </Stack>
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        pt={3}
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
