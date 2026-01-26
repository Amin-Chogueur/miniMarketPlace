import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import commentRouter from "./routes/commentRoute.js";
const app = express();
app.use(
  cors({
    origin: ENV.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
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

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}
export default app;
