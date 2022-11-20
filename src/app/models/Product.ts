import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
    price: { type: Number, required: true },
    igredients: {
        type: [{
            name: { type: String, required: true },
            icon: { type: String, required: true },
        }],
        required: true },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true}

}));
