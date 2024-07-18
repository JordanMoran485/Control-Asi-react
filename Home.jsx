import './Home.css'
import { Link } from 'react-router-dom'

export const Home =() => {
    return(
     <div className='div-home'>
       <nav className='nav-ho'>
        <Link className='link-ho' to= "/inicio-sesion">Iniciar sesion</Link>
        <Link className='link-ho' to= "/Registro-sesion">Registro sesion</Link>
      </nav>

<div className="Bienvenida">
    
       <h2 className='h2-ho' >
        Bienvenido al sistema de control de asistencia, 
        diseñado para facilitar la gestión y el seguimiento 
        de la asistencia de tus estudiantes,
        permitiéndote concentrarte en lo que más importa: enseñar
       </h2>
    
</div>
     </div>
    )
}
    
       
  

    
    

