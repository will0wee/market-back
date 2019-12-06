import {Schema, model} from 'mongoose';

const orderSchema = new Schema(
    {
        content: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        price: {
            type: Number,
            required: true
        },
        owner:
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
);

const Order = model('Order', orderSchema);

export default Order;