import React from 'react'
import './styles.css'
import Logo from '../../assets/logo2.png';
import Fotos2 from '../../assets/logo2.png'


function Contato() {
    return(
      <div>
      <div className="col-12" id="interface">
      <img src={Logo} className='profile' />
      <h1 className="h1-contato">Rodrigo William</h1>
      <h5 className="h5-contato">Profissão Programador</h5>
      <p className="p-contato">Estudando para se tornar um desenvolvedor FullStack</p>
      
      </div>

      <footer>        
        <img className='logo' src={Fotos2} />
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por Rodrigo William</span>
        </footer>
      </div> 
    )
}


export default Contato;