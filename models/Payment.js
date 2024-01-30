import mongoose from "mongoose";

const schema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model("Payment", schema);




















//In summary, this code defines a Mongoose schema for a "Payment" document, specifying the structure of the document and the data types of its fields.
// The schema allows you to create and query payment documents in a MongoDB database.
// This is commonly used when working with payment gateways like Razorpay, where you need to store
// and retrieve payment-related information in your application.




