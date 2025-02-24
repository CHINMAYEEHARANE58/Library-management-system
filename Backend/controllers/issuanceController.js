const Issuance = require('../models/Issuance');

// Create a new issuance (issue a book)
exports.createIssuance = async (req, res) => {
  try {
    const issuance = new Issuance(req.body);
    await issuance.save();
    res.status(201).json(issuance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get issuance by ID
exports.getIssuance = async (req, res) => {
  try {
    const issuance = await Issuance.findById(req.params.id)
      .populate('member')
      .populate('book');
    if (!issuance) return res.status(404).json({ error: 'Issuance not found' });
    res.json(issuance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get pending issuances for a specific date (books not returned yet)
exports.getPendingIssuances = async (req, res) => {
  try {
    const { date } = req.query; // expected date format: YYYY-MM-DD
    const targetDate = new Date(date);
    const issuances = await Issuance.find({
      targetReturnDate: targetDate,
      returnedDate: { $exists: false }
    })
      .populate('member')
      .populate('book');
    res.json(issuances);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
