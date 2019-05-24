'use strict';
import { Document, Schema, Model, model} from "mongoose";

const UserSchema = new Schema({
  prenom: {
    type: String,
    required: true
  },
 
  nom: {
    type: String,
    required: true
  },

  couriel: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
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
UserSchema.pre('save', function(next) {
  //todo
  //this.updated = Date.now();
  next();
});

export default model('User', UserSchema);
