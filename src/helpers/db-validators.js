import Usuario from '../user/user.model.js'
import Recurso from '../recursos/recurso.model.js';

export const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo }); 
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado`);
    }
};

export const existeUsuarioById = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id ${id} no existe`);
    }
};

export const existeRecursoById = async (id) => {
    const existeRecurso = await Recurso.findById(id);
    if(!existeRecurso){
        throw new Error(`El id ${id} no existe`);
    }
};