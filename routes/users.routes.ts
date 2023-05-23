import {Router} from "../depts.ts";
import { getAllUsers, getUser, createUser } from "../handlers/users.handlers.ts";

export const usersRouter = new Router()
.get("/users", getAllUsers)
.get("/users/:uid", getUser)
.post("/users", createUser)