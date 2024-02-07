import React from 'react';
import './styles.css'
import Fotos from '../../assets/logo2.png';


function Footer() {
    return(
        <>
        <footer>        
        <img className='logo' src={Fotos} />
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por Rodrigo William</span>
        </footer>
        </>
    )       
}

export default Footer;