import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='register-notification'>
        <h3>Receba a Programação por e-mail</h3>
        <Link to="/register"><button>CADASTRE-SE</button></Link>
      </div>
      <div className='footer-container'>
        <div className='social-medias'>
          <div className='social-media-block facebook'>
            <img src={process.env.PUBLIC_URL + '/img/facebook.svg'} alt='Facebook Logo'></img>
            <div className='social-media-span'>
              <span>FACEBOOK</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block twitter'>
            <img src={process.env.PUBLIC_URL + '/img/twitter.svg'} alt='Twitter Logo'></img>
            <div className='social-media-span'>
              <span>TWITTER</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block instagram'>
            <img src={process.env.PUBLIC_URL + '/img/instagram.svg'} alt='Instagram Logo'></img>
            <div className='social-media-span'>
              <span>INSTAGRAM</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block youtube'>
            <img src={process.env.PUBLIC_URL + '/img/youtube.svg'} alt='Youtuber Logo'></img>
            <div className='social-media-span'>
              <span>YOUTUBE</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
          <div className='social-media-block linkedin'>
            <img src={process.env.PUBLIC_URL + '/img/linkedin.svg'} alt='Linkedin Logo'></img>
            <div className='social-media-span'>
              <span>LINKEDIN</span>
              <span>/CINEMARKOFICIAL</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='about-us'>
          <div className='about-us-cols col-1'>
            <ul>FILMES</ul>
            <li><Link to='/'>PROGRAMAÇÃO</Link></li>
            <li><Link to='/'>EM CARTAZ</Link></li>
            <li><Link to='/'>INGRESSOS</Link></li>
          </div>
          <div className='about-us-cols col-2'>
            <ul>MEU CINEMARK</ul>
            <li><Link to='/'>PROGRAMAÇÃO</Link></li>
            <li><Link to='/'>EM CARTAZ</Link></li>
          </div>
          <div className='about-us-cols col-3'>
            <ul>SNACK BAR</ul>
            <li><Link to='/'>CARDÁPIO SNACK BAR</Link></li>
            <li><Link to='/'>CARDÁPIO BRADESCO PRIME</Link></li>
          </div>
          <div className='about-us-cols col-4'>
            <ul>SALAS</ul>
            <li><Link to='/'>REAL D 3D</Link></li>
            <li><Link to='/'>XD</Link></li>    
            <li><Link to='/'>D-BOX</Link></li>    
            <li><Link to='/'>BRADESCO PRIME</Link></li>    
            <li><Link to='/'>MOVIE BISTRÔ</Link></li>    
            <li><Link to='/'>ALUGUEL DE SALAS</Link></li>  
          </div>
          <div className='about-us-cols col-5'>
            <ul>A CINEMARK</ul>
            <li><Link to='/'>INSTITUCIONAL</Link></li>
            <li><Link to='/'>ANUNCIE</Link></li>    
            <li><Link to='/'>IMPRENSA</Link></li>    
            <li><Link to='/'>GRADE DE PROGRAMAÇÃO</Link></li>    
            <li><Link to='/'>APLICATIVOS</Link></li>    
          </div>
          <div className='about-us-cols col-6'>
            <ul>CONTATO</ul>
            <li><Link to='/'>CENTRAL DE ATENDIMENTO</Link></li>
            <li><Link to='/'>TRABALHE</Link></li>   
          </div>
        </div>
        <hr></hr>
        <div className='logo-container'>
          <div className='logo'>
            <h3>CINEMARK</h3>
            <p>É MAIS QUE CINEMA, É CINEMARK</p>
          </div>
          <span>Copyright &copy; 2022 Cinemark</span>
          <Link to='/'>POLÍTICA DE PRIVACIDADE</Link>
          <Link to='/'>TERMOS DE USO</Link>
        </div>
      </div>
    </footer>
  )
}
