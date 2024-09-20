import { useState } from 'react';
import './Portfolio.scss';
import dimapLogo from '../../assets/img/dimap.jpg';
import polareLogo from '../../assets/img/polare.jpg';
import sisuLogo from '../../assets/img/sisu.png';
import besLogo from '../../assets/img/bes.jpg';
import proexLogo from '../../assets/img/proex.jpg';
import siaLogo from '../../assets/img/sia.jpg';
import posgraduacaoLogo from '../../assets/img/posgraduacao.jpg';
import sisbiLogo from '../../assets/img/sisbi.png';
import ecictLogo from '../../assets/img/ecict.png';
import portalLogo from '../../assets/img/portal.png';
import stiLogo from '../../assets/img/sti.png';

// Dados de exemplo para os projetos
const projects = [
    {
        name: 'DIMAp',
        image: dimapLogo,
        description: 'Descrição do Projeto 1.',
        technologies: ['React', 'CSS', 'JavaScript'],
      },
      {
        name: 'Polare',
        image: polareLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
      {
        name: 'BES',
        image: besLogo,
        description: 'Descrição do Projeto 1.',
        technologies: ['React', 'CSS', 'JavaScript'],
      },
      {
        name: 'SISU',
        image: sisuLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
      {
        name: 'SIA',
        image: siaLogo,
        description: 'Descrição do Projeto 1.',
        technologies: ['React', 'CSS', 'JavaScript'],
      },
      {
        name: 'Pós Graduação',
        image: posgraduacaoLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
      {
        name: 'DIMAp',
        image: dimapLogo,
        description: 'Descrição do Projeto 1.',
        technologies: ['React', 'CSS', 'JavaScript'],
      },
      {
        name: 'Proex',
        image: proexLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
      {
        name: 'Sisbi',
        image: sisbiLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
      {
        name: 'ECICT',
        image: ecictLogo,
        description: 'Descrição do Projeto 1.',
        technologies: ['React', 'CSS', 'JavaScript'],
      },
      {
        name: 'STI',
        image: stiLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
      {
        name: 'Portal UFRN',
        image: portalLogo,
        description: 'Descrição do Projeto 2.',
        technologies: ['Vue.js', 'HTML', 'Tailwind'],
      },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.name}
            className="portfolio-item"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="portfolio-image"
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="modal-image"
            />
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
