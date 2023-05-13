import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
    curso: {
        type: mongoose.Schema.ObjectId,
        ref: 'Cursos',
        require: true
    },
    estudiante: {
        type: mongoose.Schema.ObjectId,
        ref: 'Estudiantes',
        require: true
    }
},
    { versionKey: false }
);

const Inscripciones = mongoose.model('Inscripciones', schema);
export default Inscripciones;