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
      const res = await fetch('https://course-api.com/react-tours-project');
      const data = await res.json();
      setLoading(false)
      setTours(data)
    } catch (error){
      setLoading(false)
      console.log(error)
    }
  }

  const removeTour = (id) => {
    // console.log(id)
    setTours(tours.filter((tour)=> tour.id !==id))
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
  if(tours.length === 0){
    return <div>
      <h2>"No More Tours"</h2>
      <button onClick={fetchData}>Refresh</button>
    </div>
  }
  //Display main component
  return <main>
    <Tours data={tours} onClick={removeTour}/>
    </main>
}
export default App;
