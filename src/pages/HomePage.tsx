import React from 'react'
import { useFetchJobs } from '../hooks/useFetchJobs'

const HomePage = () => {

  const {data} = useFetchJobs()

  return (
    <div>
    </div>
  )
}

export default HomePage
