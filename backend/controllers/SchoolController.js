const School = require('../models/School');

exports.createSchool = async (req, res) => {
  try {
    const newSchool = await School.create(req.body);
    res.status(201).json(newSchool);
  } catch (error) {
    console.error('Error creating school:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    console.log("Fetched schools:", schools); // Logging fetched schools
    res.status(200).json(schools);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPaginatedSchools = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 1; // Set the page size to 1 for one school per page
    const skip = (page - 1) * pageSize;

    const totalSchools = await School.countDocuments();
    const totalPages = Math.ceil(totalSchools / pageSize);

    let query = {};
    if (req.query.filter) {
      query = { name: { $regex: req.query.filter, $options: 'i' } };
    }

    const schools = await School.find(query).skip(skip).limit(pageSize);

    res.status(200).json({ schools, totalPages }); // Sending schools and totalPages
  } catch (error) {
    console.error('Error fetching paginated schools:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.updateSchool = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedSchool);
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    await School.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'School deleted successfully' });
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({ error: 'Server error' });
  }
};