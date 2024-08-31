const Skill = require('../models/skillModel');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
    const skills = await Skill.find();
    res.json(skills);
};

// @desc    Create a new skill
// @route   POST /api/skills
// @access  Public
const createSkill = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ message: 'Skill name is required' });
        return;
    }

    const skill = new Skill({ name });
    await skill.save();

    res.status(201).json(skill);
};

// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Public
const deleteSkill = async (req, res) => {
    const skill = await Skill.findById(req.params.id);

    if (skill) {
        await skill.remove();
        res.json({ message: 'Skill removed' });
    } else {
        res.status(404).json({ message: 'Skill not found' });
    }
};

module.exports = {
    getSkills,
    createSkill,
    deleteSkill,
};
