import React, {useEffect} from 'react'
import './RegisterPage.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import CPFInput from './Inputs/CPFInput'
import TELInput from './Inputs/TELInput'

export default function RegisterPage() {
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
        
        if(pw.value === c_pw.value) 
            c_pw.setCustomValidity("")
        else{
            return c_pw.setCustomValidity("Passwords Don't Match")
        } 

        auth.createUserWithEmailAndPassword(email.value, pw.value)
        .then(model => {
            return db.collection('users').doc(model.user.uid).set({
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
        })
        .catch(err => {
            if(err){
                console.log(err)
            }  
        })
    }
    
    var imgIndex = 1
    useEffect(() => {
        showImg(1)

        setInterval(() => {
            nextImg(1)
        }, 10000)
    })
    
    const dateOnFocus = () => {
        document.getElementById('birthday').type = 'date'
    }
    
    const dateOnBlur = () => {
        const element = document.getElementById('birthday')
        if(element.value === '')
        document.getElementById('birthday').type = 'text'
    }

    const nextImg = (n) => {
        showImg(imgIndex += n)
    }
    
    const currentImg = (n) => {
        showImg(imgIndex = n);
    }
    
    const showImg = (n) => {
        var i;
        var imgs = document.getElementsByClassName('register-poster-container-img')
        var btns = document.getElementsByClassName('featuring-btn')

        if(n > imgs.length) imgIndex = 1
        if (n < 1) imgIndex = imgs.length

        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";  
        }

        for (i = 0; i < btns.length; i++) {
            btns[i].id = btns[i].id.replace("active", "");
        }

        if(imgs && btns){
            imgs[imgIndex-1].style.display = "block";  
            btns[imgIndex-1].id = "active";
        }
    }
  return ( 
    <div className='register-container'>
        <div className='register-page-block'>
            <form onSubmit={createAccount} id='form'>
                <h3>Preencha seus dados</h3>
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
                    <input className='default-input input-light' max='31-12-2022' name='birthday' placeholder="DATA DE NASCIMENTO" id='birthday' type="text" onFocus={dateOnFocus} onBlur={dateOnBlur} required></input>
                </div>
                <div className='register-flex-2-col state-city-container'>
                    <select className='default-input input-dark' id='state' name='state' defaultValue='state' required>
                        <option disabled={true} value="state">ESTADO</option>
                        <option value="SP">São Paulo</option>
                    </select>
                    <select className='default-input input-dark' id='city' name='city' defaultValue='' required>
                        <option disabled={true} value="">CIDADE</option>
                        <option value="São Paulo">São Paulo</option>
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
            <div className='side-featuring-container'>
                <div className='featuring'>
                    <div className='register-poster-container'>
                        <div className='register-poster-container-title'>
                            <h4>EM DESTAQUE</h4>
                        </div>
                        <div className='featuring-carousel-img'>
                            <div className='register-poster-container-img'>
                                <img src='https://i.imgur.com/k7m1EwD.jpg' alt='Register Poster 1'></img>
                            </div>
                            <div className='register-poster-container-img'>
                                <img src='https://i.imgur.com/NkOTj0T.jpg' alt='Register Poster 2'></img>
                            </div>
                            <div className='register-poster-container-img'>
                                <img src='https://i.imgur.com/GSZNfly.jpg' alt='Register Poster 3'></img>
                            </div>
                        </div>
                    </div>
                    <div className='side-featuring-buttons'>
                        <div className='featuring-buttons-block'>
                            <span onClick={() => currentImg(1)} className='featuring-btn' id='active'></span>
                            <span onClick={() => currentImg(2)} className='featuring-btn'></span>
                            <span onClick={() => currentImg(3)} className='featuring-btn'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
