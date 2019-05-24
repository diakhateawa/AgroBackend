"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inscription_controller_1 = __importDefault(require("./inscription.controller"));
let publicRouter = express_1.default.Router()
    .get('/ecoles', inscription_controller_1.default.getAllEcoles)
    .get('/', inscription_controller_1.default.getAll)
    .get('/:id', inscription_controller_1.default.getOne)
    .post('/', inscription_controller_1.default.subscribe);
let privateRouter = express_1.default.Router()
    .post('/ecoles', inscription_controller_1.default.createEcole);
let value = { publicRouter: publicRouter, privateRouter: privateRouter };
exports.default = value;
//# sourceMappingURL=index.js.map