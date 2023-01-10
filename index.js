import path from "path";
import express from "express";
import dotEnv from "dotenv";
import bdRoutes from "./routers/bdRoutes.js";
import marketingRoutes from "./routers/marketingRoutes.js";
import okrRoutes from "./routers/okrRoutes.js";
import connectDb from "./config/db.js";
import userRoutes from "./routers/userRoutes.js";
import userOtherInformationRoutes from "./routers/userOtherInformationRoutes.js";
import cors from "cors";

dotEnv.config();
const app = express();
app.use(cors());

connectDb();

app.use(express.json());

app.use("/api/bd", bdRoutes);
app.use("/api/marketing", marketingRoutes);
app.use("/api/okr", okrRoutes);
app.use("/api/user", userRoutes);
app.use("/api/userOtherInformation", userOtherInformationRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
app.get("/", (req, res) => {
  res.send(" Tools23 api is running....");
});
// }

const Port = process.env.PORT || 8080;
app.listen(Port, console.log("Listening buddy to port ", Port));
