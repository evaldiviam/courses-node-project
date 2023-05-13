import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cursosSchema = new Schema({
    nombre: {
        type: String,
        required: true, 
        unique: true
    }, 
    descripcion: {
        type: String
    }, 
    precio:{
        type: Number,
        required: true
    },
    categoria:{
        type: mongoose.Schema.ObjectId, 
        ref: 'Categorias' 
    }
}, 
{ versionKey: false }
);

const Cursos = mongoose.model('Cursos', cursosSchema);
export default Cursos;