import { UserModel } from "./../../utils/users";
import users from "../../utils/users";
import { Request } from "express";

export type Model = {
  findOne: (id: number) => UserModel | undefined;
  findMany: () => UserModel[] | undefined;
  createOne: (req: Request) => UserModel[] | undefined;
  findOneAndUpdate: (id: number, req: Request) => UserModel | undefined;
  findOneAndRemove: (id: number) => UserModel | undefined;
};

const User: Model = {
  findOne: (id) => users.find((user) => user.id === id),
  findMany: () => users,
  createOne: (req: Request) => {
    const createObj = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      company: req.body.company,
      website: req.body.website,
      deletedAt: null,
    };
    return [...users, createObj];
  },
  findOneAndUpdate: (id, req: Request) => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return undefined;
    }

    const fields = [
      "name",
      "username",
      "email",
      "address",
      "phone",
      "company",
      "website",
    ];

    let updateObj = {};

    fields.forEach((field) => {
      if (req.body[field]) {
        updateObj = { ...updateObj, [field]: req.body[field] };
      }
    });

    users[index] = { ...users[index], ...updateObj };
    return users[index];
  },
  findOneAndRemove: (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return undefined;
    }
    users[index].deletedAt = Math.floor(Date.now() / 1000);
    return users[index];
  },
};

export default User;
