'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InscriptionSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    ecole: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Ecole',
        select: true,
    },
    created: {
        type: Date,
        select: false,
        required: true,
        default: Date.now()
    },
    updated: {
        type: Date,
        select: false
    }
});
/**
 *  hooks methods
 */
InscriptionSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    next();
});
exports.default = mongoose_1.model('Inscription', InscriptionSchema);
//# sourceMappingURL=inscription.model.js.map