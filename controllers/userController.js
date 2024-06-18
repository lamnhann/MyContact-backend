import asyncHandle from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// @desc Register a user
// @route POST /api/users/register
// @access public
export const registerUser = asyncHandle(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created: ${user}`);
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    } else {
        res.status(400);
        throw new Error("User data us not valid");
    }
    
    res.json({ message: "Register the user"})
});

// @desc Login user
// @route POST /api/users/login
// @access public
export const loginUser = asyncHandle(async (req, res) => {
    res.json({ message: "Login user"})
});

// @desc Current user info
// @route GET /api/users/current
// @access private
export const currentUser = asyncHandle(async (req, res) => {
    res.json({ message: "Current user info"})
});

