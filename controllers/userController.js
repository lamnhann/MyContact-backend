import asyncHandle from 'express-async-handler';

// @desc Register a user
// @route POST /api/users/register
// @access public
export const registerUser = asyncHandle(async (req, res) => {
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

