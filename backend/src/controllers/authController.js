const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, message: 'Account context conflict: User already exists' });

    const user = await User.create({ name, email, password, role });
    res.status(201).json({ success: true, token: signToken(user._id), role: user.role });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({ success: true, token: signToken(user._id), role: user.role });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials array' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
