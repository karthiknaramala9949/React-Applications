import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [isPending,setIsPending]=useState(true);
    
      useEffect(()=>{
       fetch(url)
       .then(res =>{
        if(!res.ok){
          return res.text();
        }
        return res.json();
       })
       .then(data =>{
        //console.log(data);
        setData(data);
        setIsPending(false);
       })
      },[url])

      return {data,isPending};
}
export default useFetch;
