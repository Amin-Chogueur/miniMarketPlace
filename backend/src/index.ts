import express from "express";
import cors from "cors";
import { ENV } from "./config/env.ts";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routes/userRoute.ts";
import productRouter from "./routes/productRoute.ts";
import commentRouter from "./routes/commentRoute.ts";
const app = express();
app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.json({
    message: "welcome to MiniMarketPlace Api,Developed By Amin Chogueur",
    endpoint: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/comments", commentRouter);

app.listen(ENV.PORT, () => {
  console.log("server is up and running on port ", ENV.PORT);
});
