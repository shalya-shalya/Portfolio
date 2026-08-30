const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Your actual projects list
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Responsive full-stack e-commerce web platform featuring product listings and cart functionality.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"]
  },
  {
    id: 2,
    title: "Satvam Product Management System",
    description: "Web application developed for managing product catalogues, updates, and backend data workflows.",
    techStack: ["JavaScript", "HTML/CSS", "Express", "REST API"]
  },
  {
    id: 3,
    title: "Full-Stack Web Portfolio",
    description: "Personal dark-themed developer portfolio connected to a Node.js & Express REST API backend.",
    techStack: ["Node.js", "Express", "JavaScript", "HTML5/CSS3"]
  }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact request from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));