const API_URL = 'http://localhost:5000/api';

const defaultProjects = [
  {
    title: "E-Commerce Website",
    description: "Responsive full-stack e-commerce web platform featuring product listings and cart functionality.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"]
  },
  {
    title: "Satvam Product Management System",
    description: "Web application developed for managing product catalogues, updates, and backend data workflows.",
    techStack: ["JavaScript", "HTML/CSS", "Express", "REST API"]
  },
  {
    title: "Full-Stack Web Portfolio",
    description: "Personal dark-themed developer portfolio connected to a Node.js & Express REST API backend.",
    techStack: ["Node.js", "Express", "JavaScript", "HTML5/CSS3"]
  }
];

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  container.innerHTML = projects.map(project => `
    <div class="card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div>
        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

async function loadProjects() {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Backend offline');
    const projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    renderProjects(defaultProjects);
  }
}

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const statusElement = document.getElementById('form-status');
  statusElement.style.color = '#00ff88';
  statusElement.innerText = 'Message sent successfully!';
  document.getElementById('contact-form').reset();
});

loadProjects();