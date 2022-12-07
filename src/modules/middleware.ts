import { validationResult } from "express-validator/src/validation-result";

export const handleInputError = (req, res, next) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
      } else {
        next()
      }
}