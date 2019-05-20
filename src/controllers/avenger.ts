import async from "async";
import { Avenger } from "../models/Avenger";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { IAvenger } from "./../interfaces/Avenger";

/**
 * GET /avengers/:id
 * Get Avenger by id.
 */
export let getById = (req: Request, res: Response, next: NextFunction) => {
    Avenger.findById(req.params.id, (err: Error, avenger: IAvenger) => {
      if (err) { return next(err); }
      res.send(avenger);
    });
};

export let getAll = (req: Request, res: Response, next: NextFunction) => {
    Avenger.find({}, (err: Error, avengers: IAvenger[]) => {
        if (err) return next(err);
        res.send(avengers);
    });
};