import React, {useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterPage.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import CPFInput from './Inputs/CPFInput'
import TELInput from './Inputs/TELInput'
import BirthdayInput from './Inputs/BirthdayInput'

export default function RegisterPage() {    
    const navigate = useNavigate()
    
    const [warningText, setWarningText] = useState([])

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    
    const auth = firebase.auth()
    const db = firebase.firestore()

    const createAccount = (e) => {
        e.preventDefault()
        
        // Auth
        const email = document.getElementById('email')
        const pw = document.getElementById('password')
        const c_pw = document.getElementById('c_password')

        // Collection
        const name = document.getElementById('name').value
        const nickname = document.getElementById('nickname').value
        const document_id = document.getElementById('document_id').value
        const phone = document.getElementById('phone').value
        const gender = document.getElementById('gender').value
        const birthday = document.getElementById('birthday').value
        const state = document.getElementById('state').value
        const city = document.getElementById('city').value
        
        const warningBlock = document.getElementById('register-warning-block')
        if(pw.value !== c_pw.value){
            setWarningText('As senhas precisam ser as mesmas')
            warningBlock.style.display = 'block'
            window.scrollTo(0, 0)
            return 
        }

        auth.createUserWithEmailAndPassword(email.value, pw.value)
        .then(model => {
            db.collection('users').doc(model.user.uid).set({
                id: model.user.uid,
                name: name,
                nickname: nickname,
                document_id: document_id,
                phone: phone,
                gender: gender,
                birthday: birthday,
                state: state,
                city: city
            })
            .then(() => {
                navigate('/account', {replace: true})
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.error(err)
            setWarningText('Este email já foi usado')
            warningBlock.style.display = 'block'
            window.scrollTo(0, 0)
        })
    }
    
    const timerRef = useRef(null)
    var imgIndex = 1
    useEffect(() => {
        showImg(1)

        // State API
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
        .then(JSONdata => {
            JSONdata.json().then(data => {
                setStates(data)
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })

        callSetInterval()
    }, [])

    const callSetInterval = () => {
        timerRef.current = setInterval(() => {
            nextImg(1)
        }, 10000)
        return () => {
            clearInterval(timerRef.current)
        }
    }

    const nextImg = (n) => {
        showImg(imgIndex += n)
    }
    
    const currentImg = (n) => {
        clearInterval(timerRef.current)
        callSetInterval()
        showImg(imgIndex = n)
    }
    
    const showImg = (n) => {
        var i;
        var imgs = document.getElementsByClassName('register-banner-container-img')
        var btns = document.getElementsByClassName('register-featuring-btn')

        if(n > imgs.length) imgIndex = 1
        if (n < 1) imgIndex = imgs.length

        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";  
        }

        for (i = 0; i < btns.length; i++) {
            btns[i].id = btns[i].id.replace("register-active-btn", "");
        }

        imgs[imgIndex-1].style.display = "block";  
        btns[imgIndex-1].id = "register-active-btn";
    }

    const loadCities = () => {
        const stateInput = document.getElementById('state').value

        const state = states.find(state => state.sigla === stateInput)

        // City API
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.id}/municipios`)
        .then(JSONdata => {
            JSONdata.json().then(data => {
                setCities(data)
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
  return ( 
    <div className='register-container'>
        <div className='register-page-block'>
            <form onSubmit={createAccount} id='form'>
                <h3>Preencha seus dados</h3>
                <div className='register-warning-block' id='register-warning-block'>
                    <span>&#9888; {warningText}</span>
                </div>
                <input className='default-input input-dark' id='name' name='name' type="text" minLength={3} placeholder='NOME COMPLETO' required></input>
                <input className='default-input input-light' id='nickname' name='nickname' type="text" minLength={3} placeholder='COMO GOSTARIA DE SER CHAMADO?' required></input>
                <div className='register-flex-2-col id-phone-container'>
                    <CPFInput/>
                    <TELInput/>
                </div>
                <div className='register-flex-2-col gender-birthday-container'>
                    <select className='default-input input-light' id='gender' name='gender' defaultValue='' required>
                        <option disabled={true} value="">GÊNERO</option>
                        <option value="masculine">Masculino</option>
                        <option value="feminine">Feminino</option>
                        <option value="non-binary">Não-binário</option>
                        <option value="other">Outro</option>
                    </select>
                    <BirthdayInput/>
                </div>
                <div className='register-flex-2-col state-city-container'>
                    <select className='default-input input-dark' id='state' name='state' defaultValue='' onChange={loadCities} required>
                        <option disabled={true} value="">ESTADO</option>
                        {states.map(state => {return <option key={state.sigla} value={state.sigla}>{state.sigla}</option>})}
                    </select>
                    <select className='default-input input-dark' id='city' name='city' defaultValue='' required>
                        <option disabled={true} value="">CIDADE</option>
                        {cities.map(city => {return <option key={city.nome} value={city.nome}>{city.nome}</option>})}
                    </select>
                </div>
                <input className='default-input input-light' name='email' type="email" id='email' placeholder='E-MAIL' required></input>
                <div className='register-flex-2-col password-confirm-container'>
                    <input className='default-input input-dark' name='password' type="password" minLength='6' id='password' placeholder='SENHA' required></input>
                    <input className='default-input input-dark' name='c_password' type="password" id='c_password' placeholder='CONFIRMAR SENHA' required></input>
                </div>
                <div className='checkbox-container'>
                    <div className='register-terms-flex'>
                        <input className='checkbox-input' type="checkbox" name='terms-of-service' id='terms-of-service' required></input>
                        <label htmlFor='terms-of-service'>LI E ACEITO OS TERMOS DE USO E POLÍTICA DE PRIVACIDADE</label>
                    </div>
                    <div className='register-terms-flex'>
                        <input className='checkbox-input' type="checkbox" name='veridical-term' id='veridical-term' required></input>
                        <label htmlFor='veridical-term'>DECLARO QUE TODAS AS INFORMAÇÕES PREENCHIDAS NESTE CADASTRO SÃO VERÍDICAS</label>
                    </div>
                </div>
                <div className='submit-container'>
                    <input type="submit" value='FINALIZAR CADASTRO'></input>
                </div>
            </form>
            <div className='register-side-featuring-container'>
                <div className='register-featuring'>
                    <div className='register-banner-container'>
                        <div className='register-banner-container-title'>
                            <h4>EM DESTAQUE</h4>
                        </div>
                        <div className='register-featuring-carousel-img'>
                            <div className='register-banner-container-img'>
                                <img src='https://i.imgur.com/k7m1EwD.jpg' alt='Register Banner 1'></img>
                            </div>
                            <div className='register-banner-container-img'>
                                <img src='https://i.imgur.com/NkOTj0T.jpg' alt='Register Banner 2'></img>
                            </div>
                            <div className='register-banner-container-img'>
                                <img src='https://i.imgur.com/GSZNfly.jpg' alt='Register Banner 3'></img>
                            </div>
                        </div>
                    </div>
                    <div className='register-side-featuring-buttons'>
                        <div className='register-featuring-buttons-block'>
                            <span onClick={() => currentImg(1)} className='register-featuring-btn' id='register-active-btn'></span>
                            <span onClick={() => currentImg(2)} className='register-featuring-btn'></span>
                            <span onClick={() => currentImg(3)} className='register-featuring-btn'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
