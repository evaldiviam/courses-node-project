import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String
    }
},
    { versionKey: false }
);


const Estudiantes = mongoose.model('Estudiantes', schema);
export default Estudiantes;