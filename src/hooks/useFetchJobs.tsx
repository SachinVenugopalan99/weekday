import React, {useState, useEffect, useCallback} from 'react'
import { apiSettings } from '../api/api';

export const useFetchJobs = () => {
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const [existingPages, setExistingPages] = useState(new Set());
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<any>(null);

    const LIMIT = 10;

  const fetchData = async () => {
  try{
    if (!existingPages.has(page)) {
    setIsFetchingData(true);
    const body = {
        limit: LIMIT,
        offset: (page - 1) * LIMIT
    }
    const newData = await apiSettings.fetchWeekDayJobs(body);
    console.log(newData);
    setData((prev) => [...prev, ...newData?.jdList])
    const tempSet = new Set(existingPages);
    tempSet.add(page);
    setExistingPages(tempSet);
    }
      } catch(err) {
      console.error(err);
      } finally {
        setIsFetchingData(false)
      }
   };

   useEffect(() => {
   fetchData()
   }, [page])

      // Implement the infinite scroll event handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition >= documentHeight - 150 && !isFetchingData) {
      // Increment the year offset to fetch previous years
      setPage((prev) => prev + 1);
    }
  }, [isFetchingData]);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

    return {data}
}