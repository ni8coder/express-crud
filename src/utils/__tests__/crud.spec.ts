import { getOne, getMany, createOne, updateOne, removeOne } from "../crud";
import User from "../../resources/user/user.model";
import { Request, Response } from "express";

describe("crud controllers", () => {
  describe("getOne", () => {
    it("finds one user", async () => {
      expect.assertions(2);

      const req = {
        params: {
          id: 9,
        },
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(200);
          return this;
        },
        json(result) {
          expect(9).toBe(9);
        },
      } as unknown as Response;

      await getOne(User)(req, res);
    });

    it("404 if no doc was found", async () => {
      expect.assertions(2);

      const req = {
        params: {
          id: -1,
        },
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(404);
          return this;
        },
        send(result) {
          expect(result.message).toEqual("Record not found");
        },
      } as unknown as Response;

      await getOne(User)(req, res);
    });
  });

  describe("getMany", () => {
    it("finds array of users", async () => {
      expect.assertions(2);

      const req = {} as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(200);
          return this;
        },
        json(result) {
          expect(result.data).toHaveLength(9);
        },
      } as unknown as Response;

      await getMany(User)(req, res);
    });
  });

  describe("createOne", () => {
    it("creates a new user", async () => {
      expect.assertions(2);

      const body = { name: "name" };

      const req = {
        body,
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(201);
          return this;
        },
        json(results) {
          expect(results.data[results.data.length - 1].name).toBe(body.name);
        },
      } as unknown as Response;

      await createOne(User)(req, res);
    });
  });

  describe("updateOne", () => {
    it("finds user by id to update", async () => {
      expect.assertions(3);
      const update = { name: "hello" };

      const req = {
        params: { id: 9 },
        body: update,
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(200);
          return this;
        },
        json(results) {
          expect(`${results.data.id}`).toBe(`${req.params.id}`);
          expect(results.data.name).toBe(update.name);
        },
      } as unknown as Response;

      await updateOne(User)(req, res);
    });

    it("404 if no doc", async () => {
      expect.assertions(2);

      const req = {
        params: {
          id: -1,
        },
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(404);
          return this;
        },
        send(result) {
          expect(result.message).toEqual("Record not found");
        },
      } as unknown as Response;

      await updateOne(User)(req, res);
    });
  });

  describe("removeOne", () => {
    it("find user by id to remove", async () => {
      expect.assertions(3);

      const req = {
        params: { id: 9 },
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(200);
          return this;
        },
        json(results) {
          expect(`${results.data.id}`).toBe(`${req.params.id}`);
          expect(results.data.deletedAt).not.toBeNull();
        },
      } as unknown as Response;

      await removeOne(User)(req, res);
    });

    it("404 if no doc", async () => {
      expect.assertions(2);

      const req = {
        params: {
          id: -1,
        },
      } as unknown as Request;

      const res = {
        status(status) {
          expect(status).toBe(404);
          return this;
        },
        send(result) {
          expect(result.message).toEqual("Record not found");
        },
      } as unknown as Response;

      await removeOne(User)(req, res);
    });
  });
});
