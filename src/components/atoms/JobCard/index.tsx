import React, {FC} from 'react';
import {Card , Box, CardMedia, Link, Stack, Typography, CardActions, Button, CardContent} from "@mui/material";

interface JobCardProps{
    jobDetail: any;
}

const JobCard:FC<JobCardProps> = ({jobDetail}) => {
  return (
    <Card sx={{borderRadius: '20px', maxWidth: '420px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px', p: '20px', ':hover': { transition: 'all .2s ease-in-out', transform: 'scale(1.01)'}}}>
       <Box sx={{display: 'flex', alignItems:'center'}} gap={1}>
        <CardMedia
        component="img"
        sx={{ width: 30, height: 30, objectFit: 'contain' }}
        image={jobDetail?.logoUrl}
        alt={jobDetail?.companyName}
      />
      <Stack alignItems='flex-start'>
      <Typography variant='h3' fontWeight='bold' textTransform='capitalize' sx={{color: '#8b8b8b', mb: '3px'}} letterSpacing={1}>{jobDetail?.companyName}</Typography>
        <Typography variant='h2' lineHeight={1.5} textTransform='capitalize'>{jobDetail?.jobRole}</Typography>
        <Typography variant='h2' textTransform='capitalize' fontSize={11} sx={{mt: '5px'}}>{jobDetail?.location}</Typography>
      </Stack>
       </Box>
       <Box sx={{ display: 'flex', flexDirection: 'column', height: '250px', overflow: 'hidden',maskImage:'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))', mt: '8px'}}>
        <Typography fontSize={16} fontWeight='bold' textAlign='start'>
        About company:
        </Typography>
        <Typography fontSize={14} fontWeight='bold' textAlign='start'>
        About us
        </Typography>
        <Typography textAlign='start'>
            {jobDetail?.jobDetailsFromCompany}
        </Typography>
       </Box>
       <Box sx={{position: 'relative', top: '-20px', mb: '8px', textAlign: 'center', color: '#4943da'}}>
        View job
       </Box>
       {jobDetail?.minExp ? 
       <CardContent>
        <Typography variant='h3' fontWeight='bold' textAlign='start' sx={{color: '#8b8b8b', mb: '3px'}}>
        Minimum Experience
        </Typography>
        <Typography variant='h2' textAlign='start' lineHeight={1.5}>
        {`${jobDetail?.minExp} ${jobDetail?.minExp > 1? 'years' : 'year'}`}
        </Typography>
       </CardContent>: null}
        <CardActions sx={{display: 'flex', flexDirection: 'column'}}>
        <Stack sx={{backgroundColor: '#55efc4' , p: '8px 16px', borderRadius: '4px', fontSize: '500', width: '100%'}}>
        <Link  href={jobDetail?.jdLink} underline='none' color='black' target='_blank' rel="noreferrer">
            ⚡ Easy Apply
        </Link>
        </Stack>
        <Button fullWidth sx={{backgroundColor: '#4943da', p: '8px 16px', color: 'white', fontSize: '500', marginLeft: '0px !important', marginTop: '8px', ':hover': {color: 'black'} }}>
        Unlock referral asks
        </Button> 
      </CardActions>
    </Card>
  )
}

export default JobCard;
