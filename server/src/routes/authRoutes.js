const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

function signToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

function sanitizeUser(user) {
  return {
    id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone
  };
}

router.post('/register', async (req, res) => {
  try {
    const { name, username, phone, email, password } = req.body;

    if(!name || !username || !phone || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if(password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    }

    const existingEmail = await User.findOne({ email: email.toLowerCase() });
    if(existingEmail) {
      return res.status(400).json({ message: 'Email already registered. Please login.' });
    }

    const existingUsername = await User.findOne({ username: username.toLowerCase() });
    if(existingUsername) {
      return res.status(400).json({ message: 'Username already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      phone,
      email,
      password: hashedPassword
    });

    const token = signToken(user._id.toString());
    return res.status(201).json({
      message: 'Account created successfully.',
      token,
      user: sanitizeUser(user)
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error during registration.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if(!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = signToken(user._id.toString());
    return res.json({
      message: 'Login successful.',
      token,
      user: sanitizeUser(user)
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error during login.' });
  }
});

router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if(!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Server error while fetching profile.' });
  }
});

module.exports = router;
