import type { Request, Response } from "express";
import * as queries from "../db/queries.js";
import { getAuth } from "@clerk/express";

export async function syncUser(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ error: "Unautherized" });
    const { email, name, imageUrl } = req.body;
    if (!email || !name || !imageUrl) {
      return res
        .status(400)
        .json({ error: "emai, name amd imageUlr are required" });
    }
    const user = await queries.upsertUser({
      id: userId,
      email,
      name,
      imageUrl,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json("failed to sync the user");
  }
}
