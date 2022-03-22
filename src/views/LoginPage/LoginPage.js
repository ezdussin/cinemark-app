import { Link } from 'react-router-dom'
import React from 'react'
import './LoginPage.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()
    
    const auth = firebase.auth()

    const login = (e) => {
        e.preventDefault()

        // Style
        const warningBlock = document.getElementById('login-warning-block')

        // Auth
        const email = document.getElementById('email')
        const password = document.getElementById('password')

        auth.signInWithEmailAndPassword(email.value, password.value)
        .then(model => {
            navigate('/account', {replace: true})
        })
        .catch(err => {
            warningBlock.style.display = 'block'
        })
    }
  return (
    <div className='login-container'>
        <div className='login-block'>
            <form onSubmit={login} id='form'>
                <div className='login-warning-block' id='login-warning-block'>
                    <span>&#9888; Email ou senha incorreto</span>
                </div>
                <div className='form-block username-block'>
                    <div className='username-block-text'>
                        <span>Email</span>
                    </div>
                    <input name='email' type="email" id='email' required></input>
                </div>
                <br></br>
                <div className='form-block password-block'>
                    <div className='password-block-text'>
                        <span>Senha</span>
                        <Link to='/'>Esqueceu a senha?</Link>
                    </div>
                    <input name='password' type="password" id='password' required></input>
                </div>
                <input type="submit" value="Login"></input>
            </form>
            <div className='ask-register-block'>
                <div className='ask-register-block-content'>
                    <span>Novo na cinemark?</span>
                    <Link to="/register">Crie uma conta.</Link>
                </div>
            </div>
            <div className='about-us-block'>
                <Link to='/'>Termos de serviço</Link>
                <Link to='/'>Privacidade</Link>
                <Link to='/'>Sobre nós</Link>
            </div>
        </div>
    </div>
  )
}
    