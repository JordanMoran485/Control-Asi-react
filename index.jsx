import React from 'react';
import { Home } from './Home/Home';

export {Home}
export const Curso = React.lazy(() =>import('./Curso/Curso'));
export const Asistencia = React.lazy(() => import('./asistencia/Asistencia'));
export const Inicio = React.lazy(() => import('./Inicio-sesion/Inicio'));
export const Registro = React.lazy(() => import('./Registro-sesion/Registro'));
export const Lista = React.lazy(() => import('./Lista-estudiante/Lista'));
