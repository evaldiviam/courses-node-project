import express from "express";
import * as categoriasController from '../controllers/categoriasController.js';

const router = express.Router();

router.get('/categorias', categoriasController.mostrarCategorias);
router.get('/categorias/:idCategoria', categoriasController.mostrarCategoria);
router.post('/categorias', categoriasController.nuevoCategoria);    
router.put('/categorias', categoriasController.actualizarCategoria);
router.delete('/categorias/:idCategoria', categoriasController.eliminarCategoria);

export default router;