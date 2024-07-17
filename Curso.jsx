import './Curso.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CursoItem = ({ titulo, facultad, carrera, paralelo }) => {
  return (
    <div className="curso-item">
      <p><b>{titulo}</b></p>
      <p>{facultad}</p>
      <p>{carrera}</p>
      <p>{paralelo}</p>
    </div>
  );
};

const RegistroCurso = ({ onAddCurso }) => {
  const [titulo, setTitulo] = useState('');
  const [facultad, setFacultad] = useState('');
  const [carrera, setCarrera] = useState('');
  const [paralelo, setParalelo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevoCurso = { titulo, facultad, carrera, paralelo };
    onAddCurso(nuevoCurso);

    setTitulo('');
    setFacultad('');
    setCarrera('');
    setParalelo('');
  };

  return (
    <form className="formu-curso" onSubmit={handleSubmit}>
      <h2>Agregar Nuevo Curso</h2>
      <div className="input-group">
        <label htmlFor="titulo">Título del Curso</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="facultad">Facultad</label>
        <input
          type="text"
          id="facultad"
          value={facultad}
          onChange={(e) => setFacultad(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="carrera">Carrera</label>
        <input
          type="text"
          id="carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="paralelo">Paralelo</label>
        <input
          type="text"
          id="paralelo"
          value={paralelo}
          onChange={(e) => setParalelo(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Curso</button>
    </form>
  );
};

export const Curso = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    setCursos(cursosGuardados);
  }, []);

  const handleAddCurso = (nuevoCurso) => {
    const nuevosCursos = [...cursos, nuevoCurso];
    setCursos(nuevosCursos);
    localStorage.setItem('cursos', JSON.stringify(nuevosCursos));
  };

  return (
    <div className='body-cur'>
      <nav className='nav-cur'>
        <Link className='link-cu' to="/">Inicio</Link>
        <Link className='link-cu' to="/asistencia">Asistencia</Link>
      </nav>
      <h2 className='h2-cur'>Cursos</h2>
      <RegistroCurso onAddCurso={handleAddCurso} />
      <div className="cursos">
        {cursos.map((curso, index) => (
          <CursoItem 
            key={index}
            titulo={curso.titulo}
            facultad={curso.facultad}
            carrera={curso.carrera}
            paralelo={curso.paralelo}
          />
        ))}
      </div>
    </div>
  );
};
