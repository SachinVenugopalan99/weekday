import {useRef} from 'react'
import { useFetchJobs } from '../hooks/useFetchJobs'
import {Box, Grid, Typography, Stack, TextField} from "@mui/material";
import JobCard from '../components/atoms/JobCard';
import SimpleSelect from '../components/atoms/SimpleSelect/SimpleSelect';
import { ROLES, LOCATION, MIN_BASE_PAY } from '../utils/constants';
import { useDebounce } from '../utils/util';
import { useVirtualizer } from '@tanstack/react-virtual';

const HomePage = () => {

  const {data, isFetchingData, filters, handleFilterChange} = useFetchJobs();

  const parentRef = useRef(null);

    const virtualizer = useVirtualizer({
    count: data?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35, // Estimate item height
    overscan: 5,
  });

  return (
    <Box sx={{ flexGrow: 1, p: '25px', width: '100%' }}>
      <Stack spacing={2} width='100%' mb={2} sx={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', alignItems: 'center'}}>
      <SimpleSelect placeholder='Roles' value={filters?.role} name='role' list={ROLES} width='160px' sx={{ mr: '8px !important' }} onChange={handleFilterChange}/>
      <SimpleSelect placeholder='Experience' value={filters?.experience} name='experience' width='160px' sx={{mt:'0px !important', mr: '8px !important'}}  list={Array.from({length: 10}, (_v, i) => ({label: `${i+1}`, value: `${i+1}`}))} onChange={handleFilterChange}/>
      <SimpleSelect placeholder='Location' value={filters?.location} name='location' width='160px' sx={{mt:'0px !important', mr: '8px !important'}}  list={LOCATION} onChange={handleFilterChange}/>
      <SimpleSelect placeholder='Min Base Pay Salary' value={filters?.salary} name='salary' width='160px' sx={{mt:'0px !important', mr: '8px !important' }}  list={MIN_BASE_PAY} onChange={handleFilterChange}/>
      <TextField placeholder='Search company Name' name='company' sx={{mt:'0px !important', mr: '8px !important'}} onChange={useDebounce((e: any) => handleFilterChange('company', e.target.value), 1000)}/>
      </Stack>
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        pt={3}
        ref={parentRef}
      >
        {data?.length ? virtualizer?.getVirtualItems()?.map((item, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
          <JobCard key={data[item?.index]?.jdUid} jobDetail={data[item?.index]}/>
          </Grid>
        )): <Stack height='70vh' width='100%' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Typography variant='h2' alignSelf='center'>There are no jobs to see.</Typography></Stack>}
      </Grid>
      {isFetchingData ? <Typography variant='h2' sx={{marginTop: '12px'}}>Loading...</Typography>: null}
    </Box>
  )
}

export default HomePage
