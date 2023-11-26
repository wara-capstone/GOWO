import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //router 사용
import MyPage from "./pages/mypage/MyPage";
import Main from "./pages/Main/Main";
import CardPlace from "./pages/card/CardPlace"
import Navbar from "./pages/Nav-Bar/NavBar";
import Login from "./pages/Login/Login"
import Routine from "./pages/mypage/routine"
import CardTool from "./pages/card/CardTool"
import CardGoal from "./pages/card/CardGoal"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mypage" element={<MyPage/>}/>
        <Route path="/CardPlace" element={<CardPlace/>}/>
        <Route path="/CardTool" element={<CardTool/>}/>
        <Route path="/CardGoal" element={<CardGoal/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Routine" element={<Routine/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;


