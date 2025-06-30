import { useState } from "react"
import SearchBar from "./SearchBar"
import Container from "./Container";
import loadingSpinner from "./assets/loading3.webp";
function App() {
  const [location,setLocation] = useState({lat:28.6517178,lon:77.2219388});
const [loading, setLoading] = useState(false);
  return(
    <>
      <SearchBar setLocation={setLocation}/>
      <h3>Weekly Weather Report</h3>
      
      <Container location={location} setLoading={setLoading}/>
      {
          loading ?<div id="loadingDiv"> <img src={loadingSpinner} id="loader"></img> </div>: null
      }
    </>
  )
}

export default App
