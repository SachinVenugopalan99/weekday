import React from 'react'
import { useFetchJobs } from '../hooks/useFetchJobs'
import {Box, Grid, Typography, Stack, TextField} from "@mui/material";
import JobCard from '../components/atoms/JobCard';
import SimpleSelect from '../components/atoms/SimpleSelect/SimpleSelect';
import { ROLES, LOCATION, MIN_BASE_PAY } from '../utils/constants';

const HomePage = () => {

  const {data, isFetchingData} = useFetchJobs();

  return (
    <Box sx={{ flexGrow: 1, p: '25px', width: '100%' }}>
      <Stack spacing={2} width='100%' mb={2} sx={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', alignItems: 'center'}}>
      <SimpleSelect placeholder='Roles' list={ROLES} width='160px' sx={{ mr: '8px !important' }} onChange={() => {}}/>
      <SimpleSelect placeholder='Experience' width='160px' sx={{mt:'0px !important', mr: '8px !important'}}  list={Array.from({length: 10}, (_v, i) => ({label: i+1, value: i+1}))} onChange={() => {}}/>
      <SimpleSelect placeholder='Location' width='160px' sx={{mt:'0px !important', mr: '8px !important'}}  list={LOCATION} onChange={() => {}}/>
      <SimpleSelect placeholder='Min Base Pay Salary' width='160px' sx={{mt:'0px !important', mr: '8px !important' }}  list={MIN_BASE_PAY} onChange={() => {}}/>
      <TextField placeholder='Search company Name' sx={{mt:'0px !important', mr: '8px !important'}}/>
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
