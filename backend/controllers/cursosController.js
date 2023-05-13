import Cursos from '../models/Cursos.js';
import Categorias from '../models/Categorias.js';

// Muestra todos los cursos
export const mostrarCursos = async (req, res) => {
    try {
        // obtener todos los cursos
        const documents = await Cursos.find({}).populate("categoria");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchCursos = async (req, res) => {
    try {
        // obtener el query de la URL
        const { query } = req.params;
        const documents = await Cursos.find({ nombre: new RegExp(query, 'i') })
        .populate({
            path: 'categoria',
            model: 'Categorias'
        });
        
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const searchCursosPorPrecio = async (req, res) => {
    try {
        // obtener el query de la URL
        const {minPrecio, maxPrecio} = req.params; // req.params.minPrecio
        const documents = await Cursos.find(  { $and:
            [
                {precio: { $gte: minPrecio } },
                {precio: { $lte: maxPrecio }},
            ]
         })
        .populate("categoria");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// Muestra un curso en especifico por su ID
export const mostrarCurso = async (req, res) => {
    const document = await Cursos.findById(req.params.idCurso);

    if(!document) {
        res.json({mensaje : 'Ese Curso no existe'});
    }
    // Mostrar el curso
    res.json(document);
};


// Agrega un nuevo curso
export const nuevoCurso = async (req, res) => {
    const document = new Cursos(req.body);
    try {
        // almacenar el registro
        await document.save();
        res.json({ mensaje : 'Se agrego un nuevo curso' });
    } catch (error) {
        // si hay un error, console.log
        res.send(error);
    }
};

// Actualiza un curso via id
export const actualizarCurso = async (req, res) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.body.id };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const document = await Cursos.findOneAndUpdate(filter, update, options);
        /*const curso = await Cursos.findAndModify({
            query:filter,
            update:{nombre:update.nombre, descripcion:update.descripcion},
            new:true
        });*/
        res.json(document);
    } catch (error) {
        res.send(error);
    }
};

// Elimina un curso via ID
export const eliminarCurso = async (req, res) => {
    try {
        await Cursos.findByIdAndDelete({ _id : req.params.idCurso });
        res.json({mensaje : 'El Curso se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};
