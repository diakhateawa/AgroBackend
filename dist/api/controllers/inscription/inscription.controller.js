"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inscription_service_1 = __importDefault(require("./inscription.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class PartenerController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let partner = {
                nom: req.body.nom,
                prenom: req.body.prenom,
                adresse: req.body.adresse,
                ecole: req.body.ecole,
                telephone: req.body.telephone,
            };
            partner.ecole = yield inscription_service_1.default.getOneEcole(partner.ecole);
            if (partner.ecole == null) {
                return errorshandling_1.default.handleError(res, 404, 404, "ecole not found");
            }
            try {
                let _partner = yield inscription_service_1.default.create(partner);
                if (!_partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a partner', 'Error occurred when trying to subscribe as a partner', 500);
                }
                res.json(_partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    createEcole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let ecole = {
                nom: req.body.nom,
                description: req.body.description,
            };
            try {
                let _partner = yield inscription_service_1.default.createEcole(ecole);
                if (!_partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a partner', 'Error occurred when trying to subscribe as a partner', 500);
                }
                res.json(_partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one partner
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one partner without id', 'idPartner is required');
            }
            try {
                let partner = yield inscription_service_1.default.getOne(req.params.id);
                if (!partner) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this partner', 'Error occurred when trying to get this partner', 500);
                }
                res.json(partner);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * get all partners
     * @param req
     * @param res
     * @returns {Promise.<void>}
     */
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let partners = yield inscription_service_1.default.getAll();
                res.json(partners);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    getAllEcoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let ecoles = yield inscription_service_1.default.getAllEcole();
                res.json(ecoles);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new PartenerController();
//# sourceMappingURL=inscription.controller.js.map