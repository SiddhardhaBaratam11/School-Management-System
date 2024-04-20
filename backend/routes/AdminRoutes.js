const express = require('express');
const router = express.Router();
const SchoolController = require('../controllers/SchoolController');

router.post('/new', SchoolController.createSchool);
router.put('/:id', SchoolController.updateSchool);
router.delete('/:id', SchoolController.deleteSchool);
router.get('/schools', SchoolController.getAllSchools); // New endpoint to fetch all schools


module.exports = router;