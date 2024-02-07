import React from 'react'
import './styles.css'
import Logo_Fotos from '../../assets/logo2.png'

function Fotos() {
    return( 
        <div className='fundo'>
        <div className="actor-cards-container">
        <div className="cards-content">
            <div className="card banner-1">Robert Pattinson</div>
            <div className="card banner-2">Zoë Kravitz</div>
            <div className="card banner-3">Paul Dano</div>
            <div className="card banner-4">Colin Farrell</div>
            <div className="card banner-5">Jeffrey Wright</div>
            <div className="card banner-6">John Turturro</div>
        </div>
       </div>

       <footer className="footer-fotos">    
        <img id="logo" src={Logo_Fotos} />
            <span className="logo-fotos">Todos os direitos reservados ©</span>
            <span className="logo-fotos">Desenvolvido por Rodrigo William</span>
       </footer>
    </div>
    )
}


export default Fotos;