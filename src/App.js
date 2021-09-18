import {useState, useEffect} from 'react'
import Tours from "./components/Tours";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])
  const fetchData = async () => {
  const res = await fetch ('https://course-api.com/react-tours-project')
  const data = await res.json();

  console.log(data);
  }
  fetchData()
  if(loading){
   return <main><Loading />
          </main>
  }
  else {
    return (
      <div className="container">
        <h1>Hello React : Tours</h1>
        <Tours />
      </div>
    );
  }
  
}
export default App
