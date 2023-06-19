'use client'

import styles from "./page.module.css";
import useSWR from 'swr'


const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {

  //   const getData = async() => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/post",{
  //     cache: "no-store",
  //   });

  //   if( !res.ok){
  //     setErr( true );
  //   }

  //   const data = await res.json();

  //   setData( data );
  //   setIsLoading( false );  
  //   }

  //   getData();

  // },[]);

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  //const { data, error, isLoading } = useSWR('/api/user/123', fetcher)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard