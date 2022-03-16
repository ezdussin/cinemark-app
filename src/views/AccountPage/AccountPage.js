import { useCallback, useEffect, useState } from 'react'
import './AccountPage.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default function AccountPage() {
    const [user, setUser] = useState([])
    const auth = firebase.auth()
    const db = firebase.firestore()

    const getUser = useCallback(() => {
        auth.onAuthStateChanged(currentUser => {
            if(currentUser){
                db.collection('users').doc(currentUser.uid).get()
                .then(userData => {
                  setUser({...userData.data(), email: currentUser.email})
                })
            } else{
                alert("You're not logged!")
            }   
        })
    }, [auth, db])

    useEffect(() => {
      getUser()
    }, [getUser])

    const logout = () => {
      auth.signOut()
      .catch(err => {
        console.error(err)
      })
    }
    
  return (
    <div className='account-container'>
        <div className='account-block'>
            <span>Nome: {user.name}</span>
            <span>Apelido: {user.nickname}</span>
            <span>Email: {user.email}</span>
            <span>CPF: {user.document_id}</span>
            <span>Gênero: {user.gender}</span>
            <span>Telefone: {user.phone}</span>
            <span>Estado: {user.state}</span>
            <span>Cidade: {user.city}</span>
            <span>Data de Nascimento: {user.birthday}</span>
            <button onClick={logout}>Desconectar</button>
        </div>
    </div>
  )
}
