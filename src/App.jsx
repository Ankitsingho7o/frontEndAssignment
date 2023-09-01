
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOneComp from "./components/PageOneComp"
import ChatBotComp from "./components/ChatBotComp";
import PageThreeComp from "./components/PageThreeComp";
import "./App.css";

function App() {
  

  return <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<PageOneComp/>}/>
      <Route path="/chatBot" exact element={<ChatBotComp/>}/>
      <Route path="/StudentDetails" exact element={<PageThreeComp/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
