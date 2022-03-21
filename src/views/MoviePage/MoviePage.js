import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Banner from "./js/Banner"
import Title from "./js/Title"
import Tickets from './js/Tickets'

export default function MoviePage() {
  const {id} = useParams()
  const db = firebase.firestore()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    db.collection('movies').doc(id).get()
    .then(m => {
      setMovie(m.data())
    })
    .catch(err => {
      console.error(err)
    })
  }, [db, id])

    return (
      <>
      <Banner bannerURL={movie.bannerURL}/>
      <Title 
      movieTitle={movie.title} 
      posterURL={movie.posterURL} 
      ar={movie.ar}
      length={movie.length} 
      genres={movie.genres}
      cast={movie.cast} 
      director={movie.director} 
      distribuitor={movie.distribuitor} 
      synopsis={movie.synopsis}
      />
      <Tickets trailerURL={movie.trailerURL}/>
      </>
    )
  }
