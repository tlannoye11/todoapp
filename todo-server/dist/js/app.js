"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(cors_1.default);
app.use(routes_1.default);
const uri = `mongodb+srv://todoAdmin:eyQMD49p8dLb4VtR@cluster0.dok5i.mongodb.net/CommanderCompanion?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)))
    .catch(error => {
    console.log("Failure to connect to MongoDB, uri=", uri);
    console.log("Error = ", error);
});
