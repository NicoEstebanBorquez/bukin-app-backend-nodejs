import { NextFunction, Request, Response } from "express";

const logMiddelware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hola, soy el LOG.")
    next();
}

export { logMiddelware };