import Categorias from '../models/Categorias.js';

export const mostrarCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.find({});
        res.json(categorias);
    } catch (error) {
        console.log(error);
    }
};

export const mostrarCategoria = async (req, res) => {
    const categoria = await Categorias.findById(req.params.idCategoria);
    if(!categoria) {
        res.json({mensaje : 'Categoria no existe'});
    }
    res.json(categoria);
};

export const nuevoCategoria = async (req, res) => {
    const categoria = new Categorias(req.body);
    try {
        await categoria.save();
        res.json({ mensaje : 'Se agrego un nuevo categoria' });
    } catch (error) {
        res.send(error);
    }
};

export const actualizarCategoria = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        const options = {new : true};
        const categoria = await Categorias.findOneAndUpdate(filter, update, options);

        res.json(categoria);
    } catch (error) {
        res.send(error);
    }
};

export const eliminarCategoria = async (req, res) => {
    try {
        await Categorias.findByIdAndDelete({ _id : req.params.idCategoria });
        res.json({mensaje : 'Categoria eliminado'});
    } catch (error) {
        console.log(error);
    }
};
