import { Routes,Route } from "react-router";
import ChooseRepoPage from "./pages/ChooseRepoPage";
import ConnectAIPage from "./pages/ConnectAIPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
     <Routes>                      
      <Route path="/" element = {<MainPage />} />      
      <Route path="/connect-ai" element = {<ConnectAIPage />}/> 
      <Route path="/repos" element = {<ChooseRepoPage />}/>     
     </Routes>  
    </>
  )
}

export default App;
