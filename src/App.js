import { useEffect } from 'react';
import News from './Components/JavaScript/News';
import Navbar from './Components/JavaScript/Navbar';
import SubNavbar from './Components/JavaScript/SubNavbar';


function App() {
//   const fetchData = async()=>{
//     let api_key = '5dd5f0cda53b40fe99097c7db8ca2753'
//     let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${api_key}`
//     let response = await fetch(url)
//      let data = await response.json('')
//      console.log(data)
// }

// useEffect(()=>(
//     fetchData()
// ),[])
  return (
   <>
   <Navbar/>
<   SubNavbar/>  
 <News/>
   </>
  );
}

export default App;
