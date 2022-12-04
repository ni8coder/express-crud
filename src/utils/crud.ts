import { Model } from "./../resources/user/user.model";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

export const getOne = (model: Model) => async (req: Request, res: Response) => {
  try {
    const user = model.findOne(parseInt(req.params.id));

    if (!user) {
      return res.status(404).send({ message: "Record not found" });
    }

    res.status(200).json({ data: user });
  } catch (e) {
    console.error(e);
    res.status(400).send({ message: "Bad Request" });
  }
};

export const getMany =
  (model: Model) => async (req: Request, res: Response) => {
    try {
      const users = model.findMany();

      if (!users) {
        return res.status(404).send({ message: "Record not found" });
      }

      res.status(200).json({ data: users });
    } catch (e) {
      console.error(e);
      res.status(400).send({ message: "Bad Request" });
    }
  };

export const createOne =
  (model: Model) => async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const users = model.createOne(req);

      if (!users) {
        return res.status(404).send({ message: "Record not found" });
      }

      res.status(201).json({ data: users });
    } catch (e) {
      console.error(e);
      res.status(400).send({ message: "Bad Request" });
    }
  };

export const updateOne =
  (model: Model) => async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const updatedUser = model.findOneAndUpdate(parseInt(req.params.id), req);

      if (!updatedUser) {
        return res.status(404).send({ message: "Record not found" });
      }

      res.status(200).json({ data: updatedUser });
    } catch (e) {
      console.error(e);
      res.status(400).send({ message: "Bad Request" });
    }
  };

export const removeOne =
  (model: Model) => async (req: Request, res: Response) => {
    try {
      const removed = model.findOneAndRemove(parseInt(req.params.id));

      if (!removed) {
        return res.status(404).send({ message: "Record not found" });
      }

      res.status(200).json({ data: removed });
    } catch (e) {
      console.error(e);
      res.status(400).send({ message: "Bad Request" });
    }
  };

export const crudController = (model: Model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  createOne: createOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
});
