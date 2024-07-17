import './Inicio.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Inicio = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los datos almacenados en localStorage
    const registro = JSON.parse(localStorage.getItem('registro'));

    // Validar los campos
    if (registro && registro.email === correo && registro.password === password) {
      // Redirigir a otra página si la validación es exitosa
      navigate('/Lista-estudiante'); // Cambia '/pagina-destino' por la ruta a la que quieres redirigir
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className='body-ini'>
      <nav className='nav-ini'>
        <Link className='link-ini' to="/">Inicio</Link>
      </nav>
      <div className="Divformu-ini">
        <form onSubmit={handleSubmit}>
          <h2 className='h2-ini'>Inicio de sesión</h2>
          <div className="Container">
            <div className='input-label-ini'>
              <label htmlFor="Correo">Correo</label>
              <input 
                type="text"  
                name="Correo" 
                id="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className='input-label-ini'>
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className='error'>{error}</p>}
          <div id="boton-id">
            <input className="boton-ini" type="submit" value="Iniciar sesión" />
          </div>
          <div className="DivIni-a">
            <Link className='DivIni-a' to="/Registro-sesion">¿No tienes una cuenta?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

