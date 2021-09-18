import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  //Set State
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  //Fetch Data from Api
  const fetchData = async () => {

    setLoading(true)

    try {

      const res = await fetch("https://course-api.com/react-tours-project");
      const data = await res.json();
      setLoading(false)
      setTours(data)

    } catch (error){

      setLoading(false)
      console.log(error)
      
    }
  }
  //Invoke function to fetch data
  useEffect(()=> {
    fetchData();
  }, [])
  //Display loading
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } 
  //Display main component
  return <main>
    <Tours data={tours}/>;
    </main>
}
export default App;
