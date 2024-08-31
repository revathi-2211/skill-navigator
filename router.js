const express = require('express');
const { getSkills, createSkill, deleteSkill } = require('../controllers/skillController');
const router = express.Router();

router.route('/')
    .get(getSkills)
    .post(createSkill);

router.route('/:id')
    .delete(deleteSkill);

module.exports = router;
