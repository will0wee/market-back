import {Schema, model} from 'mongoose';

const userSchema = new Schema(
    {
        mail: {
            type: String,
            required: true
        },
        pwd: {
            type: String,
            required: true
        },
        type:
        {
            type: String,
            default: 'user'
        },
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        adress: {
            type: String
        },
        city: [{
            type: Schema.Types.ObjectId,
            ref: 'City'
        }]
    }
);

const User = model('User', userSchema);

export default User;