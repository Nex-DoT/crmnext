import { Schema , model , models } from "mongoose";

const customerElement = new Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
    },
    email:{
        type: String,
        required: true,
        minLength:1,
    }
})

const Customer = models.Customer || model("customer" , customerElement)