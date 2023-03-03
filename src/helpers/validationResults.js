import { validationResult } from "express-validator";


const validationsResult = (req, res, next) => {
  const errors = validationResult(req);
  // preguntar si tengo errores
 if (!errors.isEmpty()) {
   return res.status(400).json({ 
     errors: errors.array() //devuelve la lista de errores
     //errors: errors.mapped() //devuelve el error que ocurre
     });
 }
    //le digo que continue con el crud
    next();
};
 export default validationsResult