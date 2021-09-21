// models/User.js

// 1. IMPORTACIONES
const mongoose = require("mongoose");

// 2. SCHEMA

const userSchema = mongoose.Schema({
  username: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ], // one to many - BASE DE DATOS
});

/**
 * {
 *  _id: 123456789,
 *  username: "Erick",
 *  posts: [{789456612321564},{78786956456},{123456796},{2156456}]
 * }
 *
 */

// 3. MODELO
const User = mongoose.model("User", userSchema);

// 4. EXPORTACIÓN
module.exports = User;
