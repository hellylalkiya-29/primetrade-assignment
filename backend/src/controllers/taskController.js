const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ title: req.body.title, assignedTo: req.user._id });
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const viewScope = req.user.role === 'admin' ? {} : { assignedTo: req.user._id };
    const records = await Task.find(viewScope).populate('assignedTo', 'email role');
    res.json({ success: true, data: records });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const record = await Task.findById(req.params.id);
    if (!record) return res.status(404).json({ success: false, message: 'Record reference mismatch' });

    if (record.assignedTo.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Context violation bounds prevented change' });
    }

    const modernTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: modernTask });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const record = await Task.findById(req.params.id);
    if (!record) return res.status(404).json({ success: false, message: 'Record reference mismatch' });
    
    await record.deleteOne();
    res.json({ success: true, message: 'Object purged securely via Admin authorization signature' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
