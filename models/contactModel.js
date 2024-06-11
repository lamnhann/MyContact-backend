import mongoose, { mongo } from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email address"],
    },
    phone: {
        type: String,
        required: [true, "Please add the phone number"],
    },
}, {
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;