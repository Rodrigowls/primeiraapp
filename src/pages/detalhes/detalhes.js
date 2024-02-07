import React from 'react'
import { useParams } from 'react-router-dom';


function Detalhes() {
   const params = useParams()
   console.log(params)
    
    return( 
    <div>
       Detalhes do produto
    </div>
    )
}


export default Detalhes;