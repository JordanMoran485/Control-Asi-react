import './Asistencia.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Asistencia = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    // Leer los datos de localStorage al montar el componente
    const datosGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
    setEstudiantes(datosGuardados);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un nuevo objeto de estudiante
    const nuevoEstudiante = { nombre, email };

    // Actualizar la lista de estudiantes
    const nuevosEstudiantes = [...estudiantes, nuevoEstudiante];
    setEstudiantes(nuevosEstudiantes);

    // Almacenar los datos en localStorage
    localStorage.setItem('estudiantes', JSON.stringify(nuevosEstudiantes));

    // Limpiar los campos del formulario
    setNombre('');
    setEmail('');
  };

  return (
    <div className='Divformu-asis'>
      <nav className='nav-asis'>
        <Link className='link-asis' to="/">Inicio</Link>
        <Link className='link-asis' to="/Curso">Cursos</Link>
      </nav>
      <h1 className='h1-asis'>Ingreso de datos del estudiante</h1>

      <form className='formu-asis' onSubmit={handleSubmit}>
        <label className='label-asis' htmlFor="Nombre">Nombre del Estudiante:</label>
        <input
          className='input-asis'
          type="text"
          id="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label className='label-asis' htmlFor="email">Correo Institucional</label>
        <input
          className='input-asis'
          type="text"
          id="student-id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='boton-asis' type="submit">Registrar</button>
      </form>

      <h2 className='h2-asis'>Registro de usuario</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Estudiante</th>
            <th>Correo Institucional</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr key={index}>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
