import React from 'react'
import '../css/Title.css'

export default function Title({movieTitle, posterURL, length, genres, cast, director, distribuitor, synopsis}) {
  return (
    <div className='container'>
        <div className='one'>
            <div className="poster-container">
                <div className="poster">
                    <img src={posterURL} alt="Movie poster"></img>
                </div>
            </div>
            <div className="title-container">
                <div className="title">
                    <h2>{movieTitle}</h2>
                    <div className="title-bottom">
                        <img className="bottom" src={process.env.PUBLIC_URL + "/img/ar12.svg"} alt="Advisory Rating"></img>
                        <span className="border-text bottom">{length} MIN</span>
                        <span className="border-text bottom">{genres}</span>
                    </div>
                </div>
            </div>
            <div className="details">
            <div className="about cast">
                <img src={process.env.PUBLIC_URL + "/img/movie-cast.svg"} alt="Cast Icon"></img>
                <span>{cast}</span>
            </div>
            <div className="about director">
                <img src={process.env.PUBLIC_URL + "/img/movie-director.svg"} alt="Director Icon"></img>
                <span>{director}</span>
            </div>
            <div className="about distribuitor">
                <img src={process.env.PUBLIC_URL + "/img/movie-distributor.svg"} alt="Distribuitor Icon"></img>
                <span>{distribuitor}</span>
            </div>
            </div>
                <div className="synopsis">
                    <h3>Sinopse</h3>
                    <div className="text">
                        <p>{synopsis}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
