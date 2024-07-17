import './Lista.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Lista = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [asistencias, setAsistencias] = useState({});

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
    setEstudiantes(datosGuardados);

    const asistenciasGuardadas = JSON.parse(localStorage.getItem('asistencias')) || {};
    setAsistencias(asistenciasGuardadas);
  }, []);

  const handleCheckboxChange = (email) => {
    setAsistencias((prevAsistencias) => {
      const nuevasAsistencias = {
        ...prevAsistencias,
        [email]: !prevAsistencias[email]
      };
      localStorage.setItem('asistencias', JSON.stringify(nuevasAsistencias));
      return nuevasAsistencias;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Asistencias:', asistencias);
    alert('Asistencias registradas con éxito');
  };

  return (
    <div className='body-lis'>
      <header className='header-lis'>
        <nav className='nav-lis'>
          <Link className='link-lis' to="/">Inicio</Link>
          <Link className='link-lis' to="/Curso">Cursos</Link>
        </nav>
        <h1 className='h1-lis'>Control de Asistencia de Estudiantes</h1>
      </header>
      <main className='main-lis'>
        <section className="section-lis">
          <h2 className='h2-lis'>Lista de Estudiantes</h2>
          <form onSubmit={handleSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Nombre del Estudiante</th>
                  <th>Correo Institucional</th>
                  <th>Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {estudiantes.map((estudiante, index) => (
                  <tr key={index}>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.email}</td>
                    <td>
                      <input
                        type="checkbox"
                        name="checkbox"
                        checked={asistencias[estudiante.email] || false}
                        onChange={() => handleCheckboxChange(estudiante.email)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div id="boton-id">
              <input type="submit" value="Enviar" className="boton-lis" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
