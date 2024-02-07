import React from 'react'
import './styles.css'

function Comentarios() {
    return(
        <div>
            <div className='comment-box'>
                <h2>comentários</h2>
                <form action='#'>
                    <input type='text' name='full_name' placeholder='Nome Completo'></input>
                    <input type='email' name='email' placeholder='Insira o Email'></input>
                    <textarea name='comment' placeholder='Deixe seu Comentário'></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Comentarios;