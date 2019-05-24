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
const inscription_model_1 = __importDefault(require("./inscription.model"));
const ecole_model_1 = __importDefault(require("./ecole.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const InscriptionRepository = new generic_repository_1.default(inscription_model_1.default);
const EcoleRepository = new generic_repository_1.default(ecole_model_1.default);
class InscriptionService {
    /**
     * save a new instance of partner
     * @param partner
     * @returns {Promise.<*>}
     */
    save(partner) {
        return __awaiter(this, void 0, void 0, function* () {
            let _partner = null;
            try {
                _partner = yield InscriptionRepository.save(partner);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this partner', 500);
            }
            return _partner;
        });
    }
    ;
    /**
     * Given a partner object this function create it
     * @param partner
     * @returns {Promise.<*>}
     */
    create(ins) {
        return __awaiter(this, void 0, void 0, function* () {
            let _partner = new inscription_model_1.default(ins);
            let errors = _partner.validateSync();
            if (errors) {
                return errorshandling_1.default.throwError(errors, 'Missing Parameters', 422);
            }
            return yield this.save(_partner);
        });
    }
    ;
    createEcole(ecole) {
        return __awaiter(this, void 0, void 0, function* () {
            let _ecole = new ecole_model_1.default(ecole);
            let errors = _ecole.validateSync();
            if (errors) {
                return errorshandling_1.default.throwError(errors, 'Missing Parameters', 422);
            }
            return yield this.save(_ecole);
        });
    }
    ;
    /**
     * Get all Ecolinscriptionse
     * @returns {Promise.<*>}
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let inscriptions = [];
            try {
                inscriptions = yield InscriptionRepository.getAll();
                inscription_model_1.default.findOne({ _id: "dhgjfjhdfgjdh" });
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all inscriptions', 500);
            }
            return inscriptions;
        });
    }
    ;
    getAllEcole() {
        return __awaiter(this, void 0, void 0, function* () {
            let ecoles = [];
            try {
                ecoles = yield EcoleRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all ecoles', 500);
            }
            return ecoles;
        });
    }
    ;
    /**
     * Get one partner
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOne(idPartner) {
        return __awaiter(this, void 0, void 0, function* () {
            let inscription = null;
            try {
                inscription = yield InscriptionRepository.getOne(idPartner);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this partner', 500);
            }
            return inscription;
        });
    }
    ;
    getOneEcole(idecole) {
        return __awaiter(this, void 0, void 0, function* () {
            let ecole = null;
            try {
                ecole = yield EcoleRepository.getOne(idecole);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this partner', 500);
            }
            return ecole;
        });
    }
    ;
}
exports.InscriptionService = InscriptionService;
;
exports.default = new InscriptionService();
//# sourceMappingURL=inscription.service.js.map