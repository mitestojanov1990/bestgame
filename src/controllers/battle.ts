import async from "async";
import nodemailer from "nodemailer";
import { Avenger } from "../models/Avenger";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { IAvenger } from "../interfaces/Avenger";

/**
 * GET /avengers/:id
 * Get Avenger by id.
 */
export let start = (req: Request, res: Response, next: NextFunction) => {
    res.send("I don't wanna fight you");
};