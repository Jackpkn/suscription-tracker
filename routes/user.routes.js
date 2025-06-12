import { Router } from "express";
const userRouter = Router();
// /users  -> GET all users
// /users/1 -> GET user by id
userRouter.get("/", (req, res) => res.send({ title: "GET all users" }));

userRouter.get("/:id", (req, res) => res.send({ title: "GET user details" }));

userRouter.post("/", (req, res) => res.send({ title: "CREATE user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));

userRouter.post("/:id", (req, res) => res.send({ title: "DELETE user" }));

export default userRouter;
