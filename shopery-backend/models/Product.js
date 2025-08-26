import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  rating: Number,
  img: String
});

export default mongoose.model("Product", productSchema);
