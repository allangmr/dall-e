"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const connect_1 = __importDefault(require("./mongodb/connect"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const dalleRoutes_1 = __importDefault(require("./routes/dalleRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const mongoConnection = process.env.MONGODB_URL;
app.use(((0, cors_1.default)()));
app.use(express_1.default.json({ limit: '50mb' }));
app.use('/api/v1/post', postRoutes_1.default);
app.use('/api/v1/dalle', dalleRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello from DALL-EE');
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, connect_1.default)(mongoConnection);
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
startServer();
