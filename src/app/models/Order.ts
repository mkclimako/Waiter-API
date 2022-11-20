import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
    table: { type: String, required: true },
    status: {
        type: String,
        enun: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        default: 'WAITING',
    }, createdAt: {
        type: Date,
        default: Date.now,
    },
    products: {
        required: true,
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },]
    },
    quantity: {
        type: Number,
        default: 1,
    }
}));
