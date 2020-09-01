import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(cors);
app.use(todoRoutes);

const uri: string = `mongodb+srv://todoAdmin:eyQMD49p8dLb4VtR@cluster0.dok5i.mongodb.net/CommanderCompanion?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose
    .connect(uri, options)
    .then(() => 
        app.listen(PORT, () =>
            console.log(`Server is running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        console.log("Failure to connect to MongoDB, uri=",uri);
        console.log("Error = ",error);
    })
