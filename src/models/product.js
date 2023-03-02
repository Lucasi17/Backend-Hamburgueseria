import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    productName: {
        require: true,
        type: String,
        minlenght: 2,
        maxlenght: 100,
        unique: true
    },
    price: {
        require: true,
        type: Number,
        min: 0, // solo permite valores positivos
        max: 10000
    },
    urlImg:{
        type: String,
        require: true
        },
    category:{
            type: String,
            require: true
     }
});

const Product = mongoose.model('product', productSchema);

export default Product
