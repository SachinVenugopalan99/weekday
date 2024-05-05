import {useState, useEffect, useCallback, useRef, useMemo} from 'react'
import { apiSettings } from '../api/api';

export const useFetchJobs = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [existingPages, setExistingPages] = useState(new Set());
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [filters, setFilters] = useState<any>({role: '', experience: '', location: '', salary: '', company: ''});

  const isLoading = useRef(false);

  const LIMIT = 10;

  const fetchData = async () => {
  try{
    isLoading.current = true;
    if (!existingPages.has(page)) {
    const body = {
        limit: LIMIT,
        offset: (page - 1) * LIMIT
    }
    const newData = await apiSettings.fetchWeekDayJobs(body);
    setData((prev) => [...prev, ...newData?.jdList])
    setHasMore(page <=Math.ceil(newData?.totalCount / LIMIT))
    const tempSet = new Set(existingPages);
    tempSet.add(page);
    setExistingPages(tempSet);
    }
      } catch(err) {
      console.error(err);
      } finally {
        isLoading.current = false;
      }
  };

   useEffect(() => {
   fetchData()
   }, [page])

      // Implement the infinite scroll event handler
  const handleScroll = useCallback(() => {
  const { scrollTop, clientHeight, scrollHeight } =
    document.documentElement;

    // Check if the user has scrolled to the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading.current && hasMore) {
      // Increment the year offset to fetch previous years
      setPage((prev) => prev + 1);
    }
  }, [hasMore]);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleFilterChange = useCallback((name: string, val: string | number) => {
  setFilters((prev: any) => ({...prev, [name]: val}))
  }, [])


  const filteredData = useMemo(() => {
    let temp = [...data];

    if (filters?.role) {
    temp = temp?.filter((item) => item?.jobRole?.toLowerCase() === filters?.role?.toLowerCase())
    }
    if (filters?.experience) {
    temp = temp?.filter((item) => item?.minExp && item?.minExp <= parseInt(filters?.experience))
    }
    if (filters?.location) {
    temp = temp?.filter((item) => item?.location?.toLowerCase() === filters?.location?.toLowerCase())
    }
    if (filters?.salary) {
    temp = temp?.filter((item) => item?.minJdSalary >= parseInt(filters?.salary))
    }
    if (filters?.company) {
    temp = temp?.filter((item) => item?.companyName?.toLowerCase()?.includes(filters?.company?.toLowerCase()))
    }

  return temp;
  }, [filters, data])

    return {data: filteredData, isFetchingData: isLoading.current, filters, handleFilterChange}
}