import { BrowserRouter, Route, Routes } from "react-router-dom"
import './db/firebase'
import HomePage from "./views/HomePage/HomePage"
import MoviePage from "./views/MoviePage/MoviePage"
import LoginPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import AccountPage from './views/AccountPage/AccountPage'
import Header from "./elements/js/Header"
import Footer from "./elements/js/Footer"
import './Main.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/movies/:id" element={<MoviePage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>    
      <Footer/>
    </BrowserRouter> 
  )
}

export default App;
