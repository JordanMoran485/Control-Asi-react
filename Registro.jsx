import './Registro.css';
import { Link } from 'react-router-dom';

export const Registro = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los valores de los campos del formulario
    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const facultad = event.target.facultad.value;
    const carrera = event.target.carrera.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Crea un objeto con los datos del registro
    const registro = {
      nombre,
      apellido,
      facultad,
      carrera,
      email,
      password
    };

    // Almacena el registro en el localStorage
    localStorage.setItem('registro', JSON.stringify(registro));

    // Puedes redirigir a otra página aquí si lo deseas
    alert('Registro exitoso');
  };

  return (
    <div className='body-re'>
      <nav className='nav-re'>
        <Link className='link-re' to="/">Inicio</Link>
      </nav>

      <div className="Divformu-re">
        <form onSubmit={handleSubmit}>
          <h2 className='h2-re'>Registro de sesión</h2>
          <div className="Conte-re">
            <div className='input-label-re'>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" required />
            </div>
            <div className='input-label-re'>
              <label htmlFor="apellido">Apellido</label>
              <input type="text" name="apellido" id="apellido" required />
            </div>
            <div className='div-option'>
              <label htmlFor="carrera">Carrera</label>
              <select name="carrera" id="carrera" required>
                <option value="carrera1">Carrera 1</option>
                <option value="carrera2">Carrera 2</option>
                <option value="carrera3">Carrera 3</option>
              </select>
            </div>
            <div className='div-option'>
              <label htmlFor="facultad">Facultad</label>
              <select name="facultad" id="facultad"><br />
                <option value="salud">Salud</option>
                <option value="ingenieria">Ingenieria</option>
                <option value="educacion">educacion</option>
              </select>
            </div>
            <div className='input-label-re'>
              <label htmlFor="email">Correo</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className='input-label-re'>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" required />
            </div>
        
          </div>

          <div id="Botonid-re">
            <input className="boton-re" type="submit" value="Registrarse" />
          </div>
          <div className="DivRe-a">
            <Link className="DivRe-a" to="/Inicio-sesion">¿Ya tienes una cuenta?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
