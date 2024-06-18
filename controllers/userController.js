import asyncHandle from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const user = await User.findOne({ email });

    // compare password with hasedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
          {
            user: {
              username: user.username,
              email: user.email,
              id: user.id,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1m" }
        );
        res.status(200).json({ accessToken });
    }else {
        res.status(401)
        throw new Error("email or password is not valid");
    }
});

// @desc Current user info
// @route GET /api/users/current
// @access private
export const currentUser = asyncHandle(async (req, res) => {
    res.json({ message: "Current user info"})
});

