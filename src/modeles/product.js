import {Schema, model} from 'mongoose';

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "awesome product"
        },
        price: {
            type: Number,
            required: true
        },
        sellingType: {
            type: String,
            required: true
        },
        category:
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true 
        },
        city:
        {
            type: Schema.Types.ObjectId,
            ref: 'City',
            required: true 
        },
        owner:
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true 
        }
    }
);

const Product = model('Product', productSchema);

export default Product;