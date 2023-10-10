import { Schema , model , models } from "mongoose";

const customeres = new Schema({
    name:{
        type: String,
        required: true,
        minLength: 1,
    },
    name:{
        type:String,
        required: true,
        minLength: 3,
    },
    lastName:{
        type: String,
        required: true,
        minLength: 1,
    },
    email:{
        type: String,
        required: true,
        minLength: 1,
    },
    phone: String,
    address: String,
    postalCode: Number,
    date: Date,
    products : {
        type:Array,
        default:[],
    },
    createedAt: {
        type: Date,
        default: ()=> Date.now(),
        immutable: true,
    }

})
const Customer = models.Customer || model("Customer" , customeres);
const Customer = models.Custumer || model("Customer" , customeres)
export default Customer;