import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';


function Header() {   
    return (
        <header>
            <img className='logo' src={Logo} />
           <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none' }} to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none' }}  to='/comentarios'>
                    <li>Comentarios</li> 
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;