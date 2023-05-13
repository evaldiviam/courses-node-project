import express from "express";
import * as cursosController from '../controllers/cursosController.js';

const router = express.Router();

router.get('/cursos', cursosController.mostrarCursos);
router.get('/cursos/search/:query', cursosController.searchCursos);
router.get('/cursos/search/precio/:minPrecio/:maxPrecio', cursosController.searchCursosPorPrecio);
router.get('/cursos/:idCurso',  cursosController.mostrarCurso);
router.post('/cursos', cursosController.nuevoCurso);    
router.put('/cursos', cursosController.actualizarCurso);
router.delete('/cursos/:idCurso', cursosController.eliminarCurso);

export default router;



