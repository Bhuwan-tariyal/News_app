import './App.css';


import React ,{useState}from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const pageSize=8;
  const apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress, setprogress] = useState(0)
  const setProgress = (Progress)=>{
    console.log(Progress);
    setprogress(Progress);
  }
  
    return (
      <>
      <Router>
      <NavBar></NavBar>
      <LoadingBar
        height={3}
        waitingTime={1000}
        color='#f11946'
        progress={progress}
      />
      <Routes>
          <Route path="/" extect element={<News  key={"general"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'general'}></News>}/>
          <Route path="/business" extect element={<News  key={"business"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'business'}></News>}/> 
          <Route path="/entertainment" extect element={<News key={"entertainment"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'entertainment'}></News>}/>
          <Route path="/general" extect element={<News  key={"general"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'general'}></News>}/>
          <Route path="/health" extect element={<News  key={"health"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'health'}></News>}/>
          <Route path="/science" extect element={<News  key={"science"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'science'}></News>}/>
          <Route path="/sports" extect element={<News  key={"sports"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'sports'}></News>}/>
          <Route path="/technology" extect element={<News  key={"technology"} apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country={'in'} category={'technology'}></News>}/>
      </Routes>
      </Router>
      </> 
    )
  
}

export default App
