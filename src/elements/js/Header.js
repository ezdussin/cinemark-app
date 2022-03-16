import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import React from 'react'
import '../css/Header.css'

export default function Header() {
  const auth = firebase.auth()
  const db = firebase.firestore()
  const [userNickname, setUserNickname] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection('users').doc(user.uid).get()
        .then(userData => {
          setUserNickname(userData.data().nickname)
        })
        document.getElementById('login_div').style.display = 'none'
        document.getElementById('account_div').style.display = 'block'
      } else{
        document.getElementById('login_div').style.display = 'block'
        document.getElementById('account_div').style.display = 'none'
      }
    })
  }, [auth, db])
  
  return (
    <header>
        <div className="navbar navbar-left">
          <Link to="/movies/batman" id="menu-button"><img src={process.env.PUBLIC_URL + "/img/menu.svg"} alt="Menu button"></img></Link>
        </div>
        <Link to="/"><h1>CINEMARK</h1></Link>
        <div className="navbar navbar-right">
          <div className="navbar-container search-navbar">
            <Link to="/"><img src={process.env.PUBLIC_URL + "/img/search.svg"} alt="Search Button"></img><span>Busca</span></Link>
          </div>
          <div id='login_div' className="navbar-container login-navbar">
            <Link to="/login"><img src={process.env.PUBLIC_URL + "/img/login.svg"} alt="Login Button"></img><span>Login</span></Link>
          </div>
          <div id='account_div' className="navbar-container account-navbar-block">
            <Link to='/account'><img src={process.env.PUBLIC_URL + "/img/account-template.svg"} alt="Account Perfil"></img><span>{userNickname}</span></Link>
          </div>
        </div>
    </header>
  )
}
