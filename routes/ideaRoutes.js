const express = require('express');
const router = express.Router();
const { addIdea, getAllIdeas } = require('../controllers/ideaController');

router.post('/ideas', addIdea);
router.get('/ideas', getAllIdeas);

module.exports = router;
