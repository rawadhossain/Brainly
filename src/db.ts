import mongoose, { Schema, model } from 'mongoose';

mongoose.connect('');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const UserModel = model('User', UserSchema); //Creates a model named User based on the UserSchema

const ContentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
});

export const ContentModel = model('Content', ContentSchema);
