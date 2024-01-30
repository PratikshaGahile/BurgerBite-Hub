import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  photo: String,
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: "String",
    enum: ["admin", "user"],
    default: "user",
  },

  createdAt: { 
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", schema);



// this code defines a Mongoose schema for a "User" document, specifying the structure of the document and the data types of its fields. 
//The schema allows you to create and query user documents in a MongoDB database.
// It includes fields for user-related information such as name, photo, Google ID, role, and creation timestamp.
// This is a common setup for user management in applications where users can sign in with Google accounts.