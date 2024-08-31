import axios from 'axios';

const addSkill = async (skill) => {
    const { data } = await axios.post('/api/skills', { name: skill });
    setSkills([...skills, data]);
};

const removeSkill = async (id) => {
    await axios.delete(`/api/skills/${id}`);
    setSkills(skills.filter(skill => skill._id !== id));
};

// Call this function to fetch all skills from the backend
const fetchSkills = async () => {
    const { data } = await axios.get('/api/skills');
    setSkills(data);
};
