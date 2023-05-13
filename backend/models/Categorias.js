import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categoriasSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }, 
    descripcion: {
        type: String
    }
}, 
{ versionKey: false }
);

const Categorias =  mongoose.model('Categorias', categoriasSchema);
export default Categorias;